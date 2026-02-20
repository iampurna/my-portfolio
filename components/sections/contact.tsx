"use client";

import { m } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Contact() {
  return (
    <section id="contact" className="py-section px-gutter relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <ScrollReveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-3">
            04 — Contact
          </p>
          <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight text-text-primary mb-4 leading-tight">
            Let&apos;s connect
          </h2>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-xl">
            <p className="text-[clamp(16px,1.4vw,19px)] text-text-secondary font-light leading-[1.8] mb-10">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just talking tech. Feel free to reach out through any
              of the channels below.
            </p>

            {/* Large email CTA */}
            <m.a
              href={`mailto:${PERSONAL.email}`}
              className="inline-block font-display text-[clamp(24px,3.5vw,44px)] font-bold text-text-primary hover:text-accent transition-colors duration-300 mb-12 group"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {PERSONAL.email}
              <m.span
                className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </m.span>
            </m.a>

            {/* Social links */}
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                as="a"
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border-subtle bg-bg-card text-text-primary font-mono text-[14px] hover:border-accent/30 hover:bg-accent/4 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </MagneticButton>

              <MagneticButton
                as="a"
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border-subtle bg-bg-card text-text-primary font-mono text-[14px] hover:border-accent/30 hover:bg-accent/4 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border-subtle bg-bg-card text-text-primary font-mono text-[14px] hover:border-accent/30 hover:bg-accent/4 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}