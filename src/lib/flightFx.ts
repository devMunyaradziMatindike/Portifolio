type AudioContextCtor = typeof AudioContext;

class FlightFx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  get running() {
    return this.ctx?.state === "running";
  }

  init() {
    if (this.ctx) return this.ctx;
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: AudioContextCtor })
        .webkitAudioContext;
    if (!Ctor) return null;
    const ctx = new Ctor();
    const master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
    this.ctx = ctx;
    this.master = master;
    return ctx;
  }

  resume() {
    void this.ctx?.resume();
  }

  private noise() {
    const ctx = this.ctx;
    if (!ctx) return null;
    if (!this.noiseBuffer) {
      const buffer = ctx.createBuffer(1, 2 * ctx.sampleRate, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = 2 * Math.random() - 1;
      this.noiseBuffer = buffer;
    }
    return this.noiseBuffer;
  }

  chime() {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master) return;
    const now = ctx.currentTime;
    (
      [
        [659.25, 0],
        [523.25, 0.5],
      ] as const
    ).forEach(([freq, delay]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + delay);
      gain.gain.linearRampToValueAtTime(0.35, now + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 1.5);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now + delay);
      osc.stop(now + delay + 1.6);
    });
  }

  say(text: string) {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      const voice = speechSynthesis
        .getVoices()
        .find((item) => /^en[-_](GB|US|NG)/i.test(item.lang));
      if (voice) utterance.voice = voice;
      speechSynthesis.speak(utterance);
    } catch {
      // ignore speech failures
    }
  }

  engine(durationMs: number) {
    const ctx = this.ctx;
    const master = this.master;
    const noise = this.noise();
    if (!ctx || !master || !noise) return;

    const now = ctx.currentTime;
    const duration = durationMs / 1000;

    const source = ctx.createBufferSource();
    source.buffer = noise;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(2600, now + duration);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.linearRampToValueAtTime(0.55, now + 0.8 * duration);
    gain.gain.linearRampToValueAtTime(0, now + duration + 0.9);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(now);
    source.stop(now + duration + 1);

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + duration);
    oscGain.gain.setValueAtTime(0.01, now);
    oscGain.gain.linearRampToValueAtTime(0.1, now + 0.8 * duration);
    oscGain.gain.linearRampToValueAtTime(0, now + duration + 0.9);
    osc.connect(oscGain);
    oscGain.connect(master);
    osc.start(now);
    osc.stop(now + duration + 1);
  }
}

export const flightFx = new FlightFx();

export const PLANE_PATH =
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z";
