"use client";
import FadeIn from "./FadeIn";
import { projects } from "../data/portfolio";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#0a0f0f", transition: "background 0.4s ease" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "#13ddd1" }} className="font-medium text-sm uppercase tracking-widest mb-2">Projects</p>
          <h2 style={{ color: "#e0f7f7" }} className="text-3xl md:text-4xl font-bold mb-12">What I&apos;ve Built</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div style={{ background: "#0d1a1a", border: "1px solid rgba(19,221,209,0.1)" }} className="group flex flex-col h-full p-6 rounded-2xl hover:border-[rgba(19,221,209,0.3)] hover:shadow-xl transition-all duration-300">
                <div className="flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#050a0a] font-bold text-lg" style={{ background: "linear-gradient(135deg, #13ddd1, #0fa89e)" }}>
                    {i + 1}
                  </div>
                  <h3 style={{ color: "#e0f7f7" }} className="font-bold text-lg mb-1 transition-colors group-hover:text-[#13ddd1]">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {project.subtitle && <span style={{ background: "rgba(19,221,209,0.08)", color: "#13ddd1" }} className="text-xs font-medium px-2 py-0.5 rounded-full">{project.subtitle}</span>}
                    {project.period && <span style={{ color: "#2a6b70" }} className="text-xs">{project.period}</span>}
                  </div>
                  <p style={{ color: "#2a6b70" }} className="text-sm leading-relaxed mb-4 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} style={{ background: "rgba(19,221,209,0.06)", color: "#13ddd1", border: "1px solid rgba(19,221,209,0.12)" }} className="px-2 py-1 rounded-md text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(19,221,209,0.1)" }} className="flex gap-3 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#2a6b70" }} className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[#13ddd1]">
                    <GitHubIcon size={14} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ background: "#13ddd1", color: "#050a0a" }} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg transition-all hover:opacity-90">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
