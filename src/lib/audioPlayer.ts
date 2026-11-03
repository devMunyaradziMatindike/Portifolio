import { TRACKS, type Track } from "@/lib/tracks";

type Listener = () => void;

class AudioPlayer {
  index = 0;
  playing = false;
  private audio: HTMLAudioElement | null = null;
  private listeners = new Set<Listener>();
  private readyPromise: Promise<void> | null = null;
  private loadedSrc = "";
  private playGeneration = 0;

  get track(): Track {
    return TRACKS[this.index]!;
  }

  private ensure() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.preload = "auto";
      this.audio.addEventListener("ended", () => this.next(true));
    }
    return this.audio;
  }

  private emit() {
    this.listeners.forEach((listener) => listener());
  }

  sub(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private stopCurrent() {
    const el = this.ensure();
    el.pause();
    el.currentTime = 0;
    this.playing = false;
  }

  /** Start fetching the current track so it can play as soon as boarding ends. */
  preload() {
    const el = this.ensure();
    const src = this.track.src;

    if (this.loadedSrc === src && this.readyPromise) {
      return this.readyPromise;
    }

    this.stopCurrent();
    this.loadedSrc = src;
    el.src = src;

    this.readyPromise = new Promise<void>((resolve) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        el.removeEventListener("canplaythrough", done);
        el.removeEventListener("canplay", done);
        resolve();
      };
      el.addEventListener("canplaythrough", done);
      el.addEventListener("canplay", done);
      el.load();
      if (el.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) done();
    });

    this.emit();
    return this.readyPromise;
  }

  load(play = false) {
    this.readyPromise = null;
    this.loadedSrc = "";
    this.preload();
    if (play) void this.playWhenReady();
  }

  async play() {
    const el = this.ensure();
    if (!el.src) this.preload();
    const generation = this.playGeneration;
    try {
      await el.play();
      if (generation !== this.playGeneration) {
        el.pause();
        return;
      }
      this.playing = true;
      this.emit();
    } catch {
      if (generation !== this.playGeneration) return;
      this.playing = false;
      this.emit();
    }
  }

  /** Wait until the track can play, then start (used after boarding). */
  async playWhenReady() {
    const generation = ++this.playGeneration;
    await this.preload();
    if (generation !== this.playGeneration) return;
    await this.play();
  }

  pause() {
    this.playGeneration += 1;
    this.stopCurrent();
    this.emit();
  }

  toggle() {
    if (this.playing) this.pause();
    else void this.playWhenReady();
  }

  next(autoPlay = this.playing) {
    this.playGeneration += 1;
    this.stopCurrent();
    this.index = (this.index + 1) % TRACKS.length;
    this.readyPromise = null;
    this.loadedSrc = "";
    this.emit();
    this.load(autoPlay);
  }
}

export const audioPlayer = new AudioPlayer();
