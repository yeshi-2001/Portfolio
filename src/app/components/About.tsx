"use client";
import FadeIn from "./FadeIn";
import { GraduationCap, Code2, Cloud, Layers, Download, Eye } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: GraduationCap, label: "CS Undergraduate", sub: "Eastern University, Trincomalee Campus" },
  { icon: Code2, label: "Full-Stack Dev", sub: "React, Flask, Spring Boot" },
  { icon: Cloud, label: "Cloud Enthusiast", sub: "AWS, Docker, Firebase" },
  { icon: Layers, label: "Scalable Systems", sub: "Distributed & cloud-native apps" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "var(--highlight)" }} className="font-medium text-sm uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl md:text-4xl font-bold mb-12">
            Who I Am
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 items-start">

          <FadeIn delay={0.1} className="flex flex-col items-center gap-6">
            <div className="rounded-full p-[3px] shadow-2xl" style={{ background: "linear-gradient(135deg, #fd7d26, #d97534, #f05920)", boxShadow: "0 20px 40px rgba(240,89,32,0.2)" }}>
              <div style={{ background: "var(--profile-ring)" }} className="rounded-full p-[3px]">
                <div className="rounded-full overflow-hidden w-44 h-52 md:w-56 md:h-64">
                  <Image
                    src="/profile.jpg"
                    alt="Yeshika B. Bandara"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[220px]">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "var(--highlight)", color: "#301405" }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105 shadow-md hover:opacity-90"
              >
                <Eye size={15} />
                View CV
              </a>
              <a
                href="/cv.pdf"
                download="Yeshika_Bandara_CV.pdf"
                style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all hover:scale-105 hover:bg-[var(--accent)] hover:text-[#301405]"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-2">
            <div style={{ color: "#f0c791" }} className="space-y-4 leading-relaxed mb-8 text-justify">
              <p>
                I&apos;m a Computer Science undergraduate at{" "}
                <span style={{ color: "var(--highlight)" }} className="font-medium">
                  Eastern University, Trincomalee
                </span>
                , with a strong interest in building meaningful digital solutions. I enjoy turning
                ideas into functional products, working across both frontend and backend to create
                seamless user experiences.
              </p>
              <p>
                My journey revolves around full-stack development, scalable architectures, and cloud
                technologies. I&apos;m particularly motivated by solving real-world problems through
                clean, efficient code and thoughtful design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, sub }, i) => (
                <FadeIn key={label} delay={0.2 + i * 0.08}>
                  <div
                    style={{ background: "var(--bg-card)", border: "1px solid var(--card-border)" }}
                    className="p-4 rounded-2xl transition-colors group hover:border-[var(--highlight)]"
                  >
                    <div
                      style={{ background: "var(--icon-bg)" }}
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-colors"
                    >
                      <Icon size={18} style={{ color: "var(--highlight)" }} />
                    </div>
                    <p style={{ color: "var(--text-primary)" }} className="font-semibold text-sm">{label}</p>
                    <p style={{ color: "var(--text-muted)" }} className="text-xs mt-0.5">{sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
