"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "char" | "word";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  as = "h1",
  splitBy = "char",
}: AnimatedTextProps) {
  const Tag = motion[as];
  const units = splitBy === "char" ? text.split("") : text.split(" ");
  const variants = splitBy === "char" ? charVariants : wordVariants;

  return (
    <>
      {/* Screen reader accessible text */}
      <span className="sr-only">{text}</span>

      <Tag
        className={className}
        variants={containerVariants}
        custom={delay}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
        style={{
          display: "flex",
          flexWrap: "wrap",
          perspective: "600px",
        }}
      >
        {units.map((unit, i) => (
          <motion.span
            key={i}
            variants={variants}
            style={{
              display: "inline-block",
              willChange: "transform, opacity",
            }}
          >
            {unit === " " || (splitBy === "word" && i < units.length - 1)
              ? unit + "\u00A0"
              : unit}
          </motion.span>
        ))}
      </Tag>
    </>
  );
}

/* Simpler fade-up text for scroll reveals */
export function RevealText({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}