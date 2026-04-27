"use client";
import FadeIn from "./FadeIn";
import { projects } from "../data/portfolio";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { useTheme } from "./ThemeProvider";

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Conic + mesh blend — different from radial (About) and linear-radial (Hero)
  const bg = isDark
    ? `conic-gradient(from 200deg at 70% 40%, #1a0d05 0deg, #602e11 90deg, #301405 180deg, #3d1a07 270deg, #1a0d05 360deg),
       radial-gradient(ellipse at 20% 80%, rgba(253,125,38,0.18) 0%, transparent 55%),
       radial-gradient(ellipse at 80% 10%, rgba(240,89,32,0.14) 0%, transparent 50%)`
    : `conic-gradient(from 200deg at 70% 40%, #fff8f0 0deg, #f3a65d 90deg, #f0c791 180deg, #fde8c8 270deg, #fff8f0 360deg),
       radial-gradient(ellipse at 20% 80%, rgba(253,125,38,0.2) 0%, transparent 55%),
       radial-gradient(ellipse at 80% 10%, rgba(217,117,52,0.15) 0%, transparent 50%)`;

  return (
    <section id="projects" style={{ background: bg, transition: "background 0.4s ease" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "var(--highlight)" }} className="font-medium text-sm uppercase tracking-widest mb-2">
            Projects
          </p>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl md:text-4xl font-bold mb-12">
            What I&apos;ve Built
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div
                style={{ background: "var(--bg-card)", border: "1px solid var(--card-border)" }}
                className="group flex flex-col h-full p-6 rounded-2xl hover:border-[var(--highlight)] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg"
                    style={{ background: "linear-gradient(135deg, #d97534, #fd7d26)" }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    style={{ color: "var(--text-primary)" }}
                    className="font-bold text-lg mb-1 transition-colors group-hover:text-[var(--highlight)]"
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {project.subtitle && (
                      <span style={{ background: "var(--tag-bg)", color: "var(--accent)" }} className="text-xs font-medium px-2 py-0.5 rounded-full">
                        {project.subtitle}
                      </span>
                    )}
                    {project.period && (
                      <span style={{ color: "var(--text-muted)" }} className="text-xs">{project.period}</span>
                    )}
                  </div>
                  <p style={{ color: "var(--text-muted)" }} className="text-sm leading-relaxed mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{ background: "var(--tag-bg)", color: "var(--accent)", border: "1px solid var(--card-border)" }}
                        className="px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid var(--border-color)" }} className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-muted)" }}
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--highlight)]"
                  >
                    <GitHubIcon size={14} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "var(--highlight)", color: "#301405" }}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg transition-all hover:opacity-90"
                  >
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
