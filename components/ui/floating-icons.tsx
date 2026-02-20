"use client";

import { motion } from "framer-motion";

/* Each floating icon has: label, position, animation delay/duration, size */
const FLOATING_ITEMS = [
  { label: "C#", x: "5%", y: "10%", size: 42, duration: 18, delay: 0 },
  { label: ".NET", x: "85%", y: "15%", size: 36, duration: 22, delay: 1 },
  { label: "SQL", x: "15%", y: "75%", size: 30, duration: 20, delay: 2 },
  { label: "Docker", x: "75%", y: "80%", size: 34, duration: 24, delay: 0.5 },
  { label: "Redis", x: "90%", y: "50%", size: 28, duration: 19, delay: 1.5 },
  { label: "Azure", x: "50%", y: "8%", size: 32, duration: 21, delay: 3 },
  { label: "Git", x: "25%", y: "45%", size: 26, duration: 17, delay: 0.8 },
  { label: "K8s", x: "65%", y: "60%", size: 30, duration: 23, delay: 2.5 },
  { label: "gRPC", x: "40%", y: "85%", size: 24, duration: 20, delay: 1.2 },
  { label: "REST", x: "10%", y: "35%", size: 28, duration: 25, delay: 3.5 },
  { label: "MQ", x: "80%", y: "35%", size: 26, duration: 18, delay: 2.8 },
  { label: "EF", x: "55%", y: "30%", size: 24, duration: 22, delay: 0.3 },
  { label: "xUnit", x: "35%", y: "65%", size: 22, duration: 19, delay: 1.8 },
  { label: "LINQ", x: "70%", y: "12%", size: 26, duration: 21, delay: 4 },
  { label: "CI/CD", x: "20%", y: "90%", size: 28, duration: 16, delay: 2.2 },
  { label: "JWT", x: "48%", y: "50%", size: 22, duration: 24, delay: 3.2 },
  { label: "SignalR", x: "92%", y: "70%", size: 24, duration: 20, delay: 1.6 },
  { label: "TS", x: "8%", y: "55%", size: 30, duration: 23, delay: 0.6 },
];

/* SVG icons for select tech — shown as stylized badges */
const ICON_PATHS: Record<string, string> = {
  "C#": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  ".NET": "M4 4h16v16H4z M8 8h8v8H8z",
  Docker: "M3 13h2v-2H3v2zm0-4h2V7H3v2zm4 4h2v-2H7v2zm0-4h2V7H7v2zm0-4h2V3H7v2zm4 8h2v-2h-2v2zm0-4h2V7h-2v2zm0-4h2V3h-2v2zm4 8h2v-2h-2v2zm0-4h2V7h-2v2z M22 9a3 3 0 00-2-1c0-1.5-.5-2.5-1.5-3",
  Git: "M21.17 11.17l-8.34-8.34a1 1 0 00-1.41 0L9 5.25 11.34 7.6a1.21 1.21 0 011.58 1.58l2.27 2.27a1.21 1.21 0 011.16 2.05 1.21 1.21 0 01-1.72-1.72l-2.12-2.12v5.56a1.21 1.21 0 01.64 2.12 1.21 1.21 0 01-1.72-1.72 1.21 1.21 0 01.46-.92V9.3a1.21 1.21 0 01-.66-1.6L9.1 5.49l-6.27 6.27a1 1 0 000 1.41l8.34 8.34a1 1 0 001.41 0l8.59-8.59a1 1 0 000-1.41z",
};

export function FloatingIcons() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {FLOATING_ITEMS.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={{
            y: [0, -20, 10, -15, 5, 0],
            x: [0, 10, -8, 12, -5, 0],
            rotate: [0, 5, -3, 8, -2, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {/* Outlined text badge */}
          <div
            className="flex items-center justify-center rounded-lg border select-none"
            style={{
              width: item.size * 2.2,
              height: item.size,
              borderColor: "rgba(212,175,55,0.08)",
              background: "rgba(212,175,55,0.02)",
            }}
          >
            <span
              className="font-mono font-medium tracking-wide"
              style={{
                fontSize: item.size * 0.35,
                color: "rgba(212,175,55,0.12)",
              }}
            >
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Additional floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute rounded-full border border-accent/[0.04]"
          style={{
            width: 60 + i * 20,
            height: 60 + i * 20,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}