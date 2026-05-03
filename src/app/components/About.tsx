"use client";
import FadeIn from "./FadeIn";
import { GraduationCap, Code2, Cloud, Layers, Download, Eye } from "lucide-react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const highlights = [
  { icon: GraduationCap, label: "CS Undergraduate", sub: "Eastern University, Trincomalee Campus" },
  { icon: Code2, label: "Full-Stack Dev", sub: "React, Flask, Spring Boot" },
  { icon: Cloud, label: "Cloud Enthusiast", sub: "AWS, Docker, Firebase" },
  { icon: Layers, label: "Scalable Systems", sub: "Distributed & cloud-native apps" },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark
    ? `radial-gradient(circle at 30% 30%, rgba(18,203,192,0.03), transparent 50%),
       radial-gradient(circle at 70% 70%, rgba(18,203,192,0.02), transparent 60%),
       linear-gradient(135deg, #0b1212, #0c2523)`
    : `radial-gradient(circle at 30% 30%, rgba(18,203,192,0.06), transparent 50%),
       linear-gradient(135deg, #e0faf9, #b2f0ec)`;

  return (
    <section id="about" style={{ background: bg, transition: "background 0.4s ease" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "var(--cta)" }} className="font-medium text-sm uppercase tracking-widest mb-2">About Me</p>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl md:text-4xl font-bold mb-12">Who I Am</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <FadeIn delay={0.1} className="flex flex-col items-center gap-6">
            <div className="rounded-full p-[3px] shadow-2xl" style={{ background: "linear-gradient(135deg, var(--cta), var(--accent))", boxShadow: "0 20px 40px rgba(18,203,192,0.15)" }}>
              <div style={{ background: "var(--bg-primary)" }} className="rounded-full p-[3px]">
                <div className="rounded-full overflow-hidden w-44 h-52 md:w-56 md:h-64">
                  <Image src="/profile.jpg" alt="Yeshika B. Bandara" width={224} height={224} className="w-full h-full object-cover object-[center_15%]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-[220px]">
              <a href="/Y.M_Yeshika_Bandara.pdf" target="_blank" rel="noopener noreferrer"
                style={{ background: "linear-gradient(135deg, var(--cta), var(--cta-hover))", color: "#ffffff", boxShadow: "0 4px 20px rgba(18,203,192,0.45)" }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:opacity-90">
                <Eye size={15} />View CV
              </a>
              <a href="/Y.M_Yeshika_Bandara.pdf" download="Y.M_Yeshika_Bandara.pdf"
                style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all hover:scale-105 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]">
                <Download size={15} />Download CV
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-2">
            <div style={{ color: "var(--text-primary)" }} className="space-y-4 leading-relaxed mb-8 text-justify">
              <p>
                I&apos;m a Computer Science undergraduate at{" "}
                <span style={{ color: "var(--cta)" }} className="font-medium">Eastern University, Trincomalee</span>
                , with a strong interest in building meaningful digital solutions. I enjoy turning ideas into functional products, working across both frontend and backend to create seamless user experiences.
              </p>
              <p>
                My journey revolves around full-stack development, scalable architectures, and cloud technologies. I&apos;m particularly motivated by solving real-world problems through clean, efficient code and thoughtful design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, sub }, i) => (
                <FadeIn key={label} delay={0.2 + i * 0.1}>
                  <div style={{ background: "var(--bg-card)", border: "1px solid var(--card-border)" }} className="p-4 rounded-2xl transition-colors group hover:border-[var(--cta)]">
                    <div style={{ background: "rgba(18,203,192,0.08)" }} className="w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-colors">
                      <Icon size={18} style={{ color: "var(--cta)" }} />
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
