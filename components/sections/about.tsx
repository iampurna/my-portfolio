"use client";

import { motion } from "framer-motion";
import { PERSONAL, TECH_STACK } from "@/lib/data";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { FloatingIcons } from "@/components/ui/floating-icons";

export function About() {
  return (
    <section
      id="about"
      className="relative py-section px-gutter overflow-hidden"
    >
      {/* Floating tech icons background */}
      <FloatingIcons />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <ScrollReveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-3">
            01 — About
          </p>
          <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight text-text-primary mb-4 leading-tight">
            A bit about me
          </h2>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        {/* About paragraphs */}
        <StaggerContainer className="space-y-6 mb-16 max-w-2xl">
          {PERSONAL.about.map((text, i) => (
            <StaggerItem key={i}>
              <p className="text-[clamp(16px,1.4vw,19px)] text-text-secondary font-light leading-[1.8]">
                {text}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tech stack badges */}
        <ScrollReveal delay={0.2}>
          <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-text-muted mb-6">
            Technologies I work with
          </p>
        </ScrollReveal>

        <StaggerContainer className="flex flex-wrap gap-3" delay={0.3}>
          {TECH_STACK.map((tech) => (
            <StaggerItem key={tech}>
              <motion.span
                className="inline-block px-4 py-2 text-[13px] font-mono tracking-wide rounded-full border border-accent/15 text-accent/70 bg-accent/[0.03] cursor-default"
                whileHover={{
                  borderColor: "rgba(212,175,55,0.4)",
                  color: "rgba(212,175,55,1)",
                  backgroundColor: "rgba(212,175,55,0.08)",
                  scale: 1.05,
                  y: -2,
                }}
                transition={{ duration: 0.25 }}
              >
                {tech}
              </motion.span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}