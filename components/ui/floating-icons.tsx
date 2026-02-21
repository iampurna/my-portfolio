"use client";

import { m } from "framer-motion";
import Image from "next/image";

const FLOATING_ITEMS = [
  { label: "C#",         file: "c-sharp.png",      x: "5%",  y: "10%", size: 38, duration: 7,  delay: 0   },
  { label: ".NET",       file: "dotnet.png",       x: "85%", y: "15%", size: 34, duration: 9,  delay: 0.4 },
  { label: "Docker",     file: "docker.png",       x: "75%", y: "78%", size: 36, duration: 8,  delay: 0.2 },
  { label: "Redis",      file: "redis.png",        x: "90%", y: "48%", size: 30, duration: 6,  delay: 0.6 },
  { label: "Azure",      file: "azure.png",        x: "50%", y: "7%",  size: 32, duration: 10, delay: 1.0 },
  { label: "Git",        file: "git.png",          x: "25%", y: "44%", size: 28, duration: 7,  delay: 0.3 },
  { label: "Kubernetes", file: "kubernetes.png",   x: "65%", y: "58%", size: 32, duration: 9,  delay: 1.2 },
  { label: "PostgreSQL", file: "postgresql.png",   x: "10%", y: "33%", size: 30, duration: 8,  delay: 0.8 },
  { label: "TypeScript", file: "typescript.png",   x: "55%", y: "28%", size: 28, duration: 6,  delay: 0.5 },
  { label: "RabbitMQ",   file: "rabbitmq.png",     x: "80%", y: "33%", size: 28, duration: 7,  delay: 1.5 },
  { label: "SignalR",    file: "signalr.png",       x: "35%", y: "63%", size: 26, duration: 9,  delay: 0.9 },
  { label: "JWT",        file: "jwt.png",           x: "40%", y: "83%", size: 26, duration: 8,  delay: 1.8 },
  { label: "SQL",        file: "sql.png",           x: "15%", y: "73%", size: 30, duration: 6,  delay: 0.1 },
];

export function FloatingIcons() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {FLOATING_ITEMS.map((item, i) => (
        <m.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -18, 8, -12, 4, 0],
            x: [0, 8, -6, 10, -4, 0],
            rotate: [0, 4, -3, 6, -2, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
            repeatType: "mirror",
          }}
        >
          <div
            className="relative flex items-center justify-center rounded-xl"
            style={{
              width: item.size + 20,
              height: item.size + 20,
              background: "rgba(212,175,55,0.05)",
              border: "1px solid rgba(212,175,55,0.15)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Image
              src={`/icons/${item.file}`}
              alt={item.label}
              width={item.size}
              height={item.size}
              className="object-contain"
              style={{ opacity: 0.65 }}
            />
          </div>
        </m.div>
      ))}

      {/* Subtle rotating rings */}
      {[...Array(4)].map((_, i) => (
        <m.div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            width: 70 + i * 25,
            height: 70 + i * 25,
            left: `${18 + i * 18}%`,
            top: `${22 + (i % 3) * 22}%`,
            border: "1px solid rgba(212,175,55,0.05)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20 + i * 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}