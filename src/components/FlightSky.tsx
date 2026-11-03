import { useEffect, useRef } from "react";
import { PLANE_PATH } from "@/lib/flightFx";

const ROUTES: [number, number, number, number, string, string][] = [
  [0.06, 0.8, 0.58, 0.18, "HRE", "JNB"],
  [0.2, 0.28, 0.92, 0.66, "VFA", "DXB"],
  [0.6, 0.92, 0.96, 0.2, "BUL", "CPT"],
  [0.03, 0.42, 0.46, 0.94, "HWN", "LUN"],
  [0.42, 0.08, 0.82, 0.88, "GWE", "NBO"],
  [0.72, 0.34, 0.14, 0.86, "BUQ", "AMS"],
];

const pointer = {
  x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
  y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  moved: false,
};

if (typeof window !== "undefined") {
  window.addEventListener(
    "mousemove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.moved = true;
    },
    { passive: true },
  );
}

export const FlightSky = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let frame = 0;
    const plane = new Path2D(PLANE_PATH);
    const clouds = Array.from({ length: 7 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 130 + 130 * Math.random(),
      s: 0.004 + 0.008 * Math.random(),
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const curve = (
      route: [number, number, number, number, string, string],
      t: number,
    ) => {
      const x0 = route[0] * width;
      const y0 = route[1] * height;
      const x1 = route[2] * width;
      const y1 = route[3] * height;
      let oy = y1 - y0;
      let ox = x0 - x1;
      if (ox > 0) {
        oy = -oy;
        ox = -ox;
      }
      const cx = (x0 + x1) / 2 + 0.25 * oy;
      const cy = (y0 + y1) / 2 + 0.25 * ox;
      const u = 1 - t;
      return [
        u * u * x0 + 2 * u * t * cx + t * t * x1,
        u * u * y0 + 2 * u * t * cy + t * t * y1,
        Math.atan2(
          2 * u * (cy - y0) + 2 * t * (y1 - cy),
          2 * u * (cx - x0) + 2 * t * (x1 - cx),
        ),
        cx,
        cy,
      ] as const;
    };

    const draw = (time: number) => {
      const parallaxX = -((pointer.x - width / 2) * 0.012);
      const parallaxY = -((pointer.y - height / 2) * 0.012);

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(parallaxX, parallaxY);

      for (const cloud of clouds) {
        const x = ((cloud.x + time * cloud.s * 0.4) % 1.3 - 0.15) * width;
        const y = cloud.y * height;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, cloud.r);
        gradient.addColorStop(0, "rgba(255,255,255,.6)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(x - cloud.r, y - cloud.r, 2 * cloud.r, 2 * cloud.r);
      }

      ctx.strokeStyle = "rgba(21,20,15,.08)";
      ctx.lineWidth = 1;
      for (let y = -(0.1 * height); y < 1.1 * height; y += height / 7) {
        ctx.beginPath();
        ctx.moveTo(-40, y);
        ctx.quadraticCurveTo(width / 2, y + (y - height / 2) * 0.14, width + 40, y);
        ctx.stroke();
      }
      for (let x = -(0.2 * width); x < 1.2 * width; x += width / 9) {
        ctx.beginPath();
        ctx.moveTo(width / 2 + (x - width / 2) * 0.82, -40);
        ctx.lineTo(width / 2 + (x - width / 2) * 1.18, height + 40);
        ctx.stroke();
      }

      ROUTES.forEach((route, index) => {
        const start = curve(route, 0);
        const end = curve(route, 1);
        ctx.setLineDash([3, 7]);
        ctx.lineDashOffset = -(14 * time);
        ctx.strokeStyle = "rgba(21,20,15,.22)";
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.quadraticCurveTo(start[3], start[4], end[0], end[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "rgba(21,20,15,.5)";
        ctx.font = '500 10px "DM Mono", monospace';
        (
          [
            [start, route[4]],
            [end, route[5]],
          ] as const
        ).forEach(([point, label]) => {
          ctx.beginPath();
          ctx.arc(point[0], point[1], 3, 0, 6.3);
          ctx.fill();
          ctx.fillText(label, point[0] + 8, point[1] + 3);
        });

        const progress = (0.035 * time + 0.17 * index) % 1;
        const pos = curve(route, progress);
        const hot =
          140 >
          Math.hypot(pos[0] + parallaxX - pointer.x, pos[1] + parallaxY - pointer.y);

        for (let i = 1; i <= 16; i++) {
          const a = progress - 0.005 * i;
          const b = progress - (i - 1) * 0.005;
          if (a < 0) break;
          const p0 = curve(route, a);
          const p1 = curve(route, b);
          ctx.strokeStyle = `${hot ? "rgba(255,74,28," : "rgba(21,20,15,"}${
            (1 - i / 16) * 0.32
          })`;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(p0[0], p0[1]);
          ctx.lineTo(p1[0], p1[1]);
          ctx.stroke();
        }

        ctx.save();
        ctx.translate(pos[0], pos[1]);
        ctx.rotate(pos[2] + Math.PI / 2);
        const scale = hot ? 1.6 : 1.1;
        ctx.scale(scale, scale);
        ctx.translate(-12, -12);
        ctx.fillStyle = hot ? "#8B0000" : "rgba(21,20,15,.75)";
        ctx.fill(plane);
        ctx.restore();
      });

      if (pointer.moved) {
        for (let n = 0; n < 2; n++) {
          const radius = (30 * time + 40 * n) % 80;
          ctx.strokeStyle = `rgba(255,74,28,${(1 - radius / 80) * 0.55})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(pointer.x - parallaxX, pointer.y - parallaxY, radius + 8, 0, 6.3);
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    const loop = () => {
      draw(Date.now() / 1400);
      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="bg"
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
};
