"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative pl-12 pb-16 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Timeline line — animated with scroll */}
      {!isLast && (
        <div className="absolute left-[7px] top-[20px] bottom-0 w-[1px] bg-accent/5">
          <motion.div
            className="w-full bg-gradient-to-b from-accent/40 to-accent/5"
            style={{ height: lineHeight }}
          />
        </div>
      )}

      {/* Dot — animated with scroll */}
      <motion.div
        className="absolute left-0 top-[8px] w-[15px] h-[15px] rounded-full border-2 border-accent bg-bg-primary"
        style={{ scale: dotScale, opacity: dotOpacity }}
      />

      {/* Inner glow on dot */}
      <motion.div
        className="absolute left-[3px] top-[11px] w-[9px] h-[9px] rounded-full bg-accent/20"
        animate={{
          boxShadow: [
            "0 0 0px rgba(212,175,55,0)",
            "0 0 12px rgba(212,175,55,0.3)",
            "0 0 0px rgba(212,175,55,0)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />

      {/* Content */}
      <h3 className="font-display text-[20px] font-semibold text-text-primary mb-1">
        {item.role}
      </h3>
      <p className="font-mono text-[14px] text-accent mb-1">{item.company}</p>
      <p className="font-mono text-[13px] text-text-muted mb-5">
        {item.duration}
      </p>

      {/* Achievements */}
      <div className="space-y-3">
        {item.achievements.map((achievement, j) => (
          <motion.p
            key={j}
            className="text-[15px] text-text-secondary font-light leading-[1.7] pl-4 border-l border-border-subtle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + j * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {achievement}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-section px-gutter">
      <ScrollReveal>
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-3">
          03 — Experience
        </p>
        <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight text-text-primary mb-4 leading-tight">
          Where I&apos;ve worked
        </h2>
        <div className="section-divider mb-14" />
      </ScrollReveal>

      <div className="max-w-2xl">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            index={i}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}