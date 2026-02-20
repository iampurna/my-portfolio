"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Infinite marquee */}
      <div className="border-y border-border-subtle py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[13px] text-text-muted mx-8 uppercase tracking-widest"
            >
              {tech}
              <span className="text-accent/40 ml-8">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-gutter py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <motion.p
          className="font-mono text-[13px] text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Purna Lungeli
        </motion.p>
        <motion.p
          className="font-mono text-[13px] text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Next.js · TypeScript · Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}