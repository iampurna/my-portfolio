"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/motion/animated-text";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { PERSONAL } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  /* Mouse parallax for portrait */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 50, damping: 20 };
  const portraitMoveX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
    springConfig
  );
  const portraitMoveY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />

      {/* Grid layout */}
      <motion.div
        className="w-full px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 lg:pt-0"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Left — Text Content */}
        <div className="order-2 lg:order-1 z-10">
          {/* Subtitle */}
          <motion.p
            className="font-mono text-[clamp(11px,1.2vw,14px)] uppercase tracking-[0.2em] text-accent mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {PERSONAL.title}
          </motion.p>

          {/* Name — character reveal */}
          <AnimatedText
            text={PERSONAL.name}
            as="h1"
            splitBy="char"
            delay={0.4}
            className="font-display text-[clamp(44px,7vw,88px)] font-bold leading-[1.05] tracking-tight text-text-primary mb-5"
          />

          {/* Tagline */}
          <motion.p
            className="text-[clamp(16px,1.6vw,21px)] text-text-secondary font-light leading-relaxed max-w-[540px] mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 bg-accent text-bg-primary font-mono text-[13px] font-semibold uppercase tracking-[0.06em] rounded-lg hover:shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-shadow duration-300"
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              as="a"
              href={PERSONAL.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/15 text-text-primary font-mono text-[13px] font-medium uppercase tracking-[0.06em] rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              Download CV
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end z-10"
          style={{ y: portraitY }}
        >
          <motion.div
            ref={portraitRef}
            className="portrait-container glitch-wrapper relative"
            style={{
              x: portraitMoveX,
              y: portraitMoveY,
              scale: portraitScale,
            }}
            initial={{ opacity: 0, scale: 0.8, clipPath: "circle(0% at 50% 50%)" }}
            animate={{ opacity: 1, scale: 1, clipPath: "circle(75% at 50% 50%)" }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
              clipPath: { duration: 1.5, delay: 0.3 },
            }}
          >
            {/* Portrait image */}
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src="/images/portrait-sketch.svg"
                alt="Purna Lungeli — Sketched Portrait"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 320px, 380px"
              />

              {/* Duotone overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-bg-primary/30 mix-blend-color pointer-events-none" />

              {/* Scanline effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                }}
              />
            </div>

            {/* Glitch clone layers */}
            <div className="glitch-clone-1 absolute inset-0 rounded-2xl overflow-hidden opacity-0 pointer-events-none">
              <Image
                src="/images/portrait-sketch.svg"
                alt=""
                fill
                className="object-cover object-center"
                style={{ filter: "hue-rotate(90deg)" }}
                sizes="380px"
              />
            </div>
            <div className="glitch-clone-2 absolute inset-0 rounded-2xl overflow-hidden opacity-0 pointer-events-none">
              <Image
                src="/images/portrait-sketch.svg"
                alt=""
                fill
                className="object-cover object-center"
                style={{ filter: "hue-rotate(-90deg)" }}
                sizes="380px"
              />
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}