"use client";

import { useRef, useState } from "react";
import { m } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/scroll-reveal";

/* ── 3D Tilt Card ── */
function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setHovering(false);
  };

  return (
    <m.div
      ref={cardRef}
      className="project-card relative group rounded-2xl border border-border-subtle bg-bg-card p-[clamp(24px,3vw,36px)] flex flex-col gap-5 cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        translateY: hovering ? -8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      {/* Color accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Project number */}
      <span className="font-mono text-[11px] text-text-muted tracking-wider uppercase">
        Project {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="font-display text-[22px] font-semibold text-text-primary leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-text-secondary font-light leading-[1.7] flex-1">
        {project.description}
      </p>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-[11px] font-mono tracking-wide rounded-full border border-accent/15 text-accent/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-6 mt-2 pt-4 border-t border-border-subtle">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[13px] text-accent/70 hover:text-accent transition-colors duration-200 group/link"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <span className="group-hover/link:underline underline-offset-4">
            Source
          </span>
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[13px] text-accent/70 hover:text-accent transition-colors duration-200 group/link"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span className="group-hover/link:underline underline-offset-4">
            Live Demo
          </span>
        </a>
      </div>

      {/* Hover glow effect */}
      <m.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovering
            ? `0 0 80px ${project.color}08, inset 0 0 80px ${project.color}03`
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.4 }}
      />
    </m.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-section px-gutter">
      <ScrollReveal>
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-3">
          02 — Projects
        </p>
        <h2 className="font-display text-[clamp(30px,4.5vw,52px)] font-bold tracking-tight text-text-primary mb-4 leading-tight">
          Selected work
        </h2>
        <div className="section-divider mb-14" />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}