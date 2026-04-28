"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const techCategories = [
  { emoji: "💻", label: "Programming", icons: "python,java,js,cpp" },
  { emoji: "🎨", label: "Frontend", icons: "html,css,react,tailwind,figma" },
  { emoji: "⚙️", label: "Backend", icons: "flask,spring,nodejs,express" },
  { emoji: "🗄️", label: "Databases", icons: "mysql,postgres,mongodb" },
  { emoji: "☁️", label: "Cloud & DevOps", icons: "aws,firebase,docker,git" },
  { emoji: "🔧", label: "Tools", icons: "github,postman,vscode" },
];

const softSkills = ["Problem Solving", "Teamwork", "Time Management", "Communication", "Attention To Detail"];
const languages = [
  { name: "English", color: "13ddd1" },
  { name: "Sinhala", color: "0fa89e" },
  { name: "Tamil", color: "2a6b70" },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="skills" style={{ background: isDark ? "#050a0a" : "#ffffff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ color: isDark ? "#e0f7f7" : "#0a0f0f", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 48, lineHeight: 1.2 }}>
          Tools I build with
        </h2>

        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "show" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 56 }}>
          {techCategories.map((cat) => (
            <motion.div key={cat.label} variants={cardVariant}
              style={{ background: isDark ? "#0d1a1a" : "#ffffff", border: `1px solid ${isDark ? "rgba(19,221,209,0.1)" : "rgba(19,221,209,0.15)"}`, borderRadius: 14, padding: "20px", transition: "border-color 0.2s ease, box-shadow 0.2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(19,221,209,0.3)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(19,221,209,0.06)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = isDark ? "rgba(19,221,209,0.1)" : "rgba(19,221,209,0.15)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase", color: isDark ? "#13ddd1" : "#0fa89e", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span>{cat.emoji}</span> {cat.label}
              </p>
              <img src={`https://skillicons.dev/icons?i=${cat.icons}&theme=dark`} alt={cat.label} style={{ display: "block", height: 40 }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={cardVariant} initial="hidden" animate={inView ? "show" : "hidden"} style={{ marginBottom: 40 }}>
          <h3 style={{ color: isDark ? "#e0f7f7" : "#0a0f0f", fontSize: "1.2rem", fontWeight: 700, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>🤝 Soft Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {softSkills.map((skill) => (
              <span key={skill}
                style={{ background: "rgba(19,221,209,0.06)", color: isDark ? "#13ddd1" : "#0fa89e", border: "1px solid rgba(19,221,209,0.15)", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 500, transition: "background 0.2s, color 0.2s", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = "#13ddd1"; (e.currentTarget as HTMLSpanElement).style.color = isDark ? "#050a0a" : "#ffffff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = "rgba(19,221,209,0.06)"; (e.currentTarget as HTMLSpanElement).style.color = isDark ? "#13ddd1" : "#0fa89e"; }}
              >{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={cardVariant} initial="hidden" animate={inView ? "show" : "hidden"}>
          <h3 style={{ color: isDark ? "#e0f7f7" : "#0a0f0f", fontSize: "1.2rem", fontWeight: 700, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>🌐 Languages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {languages.map((lang) => (
              <span key={lang.name}
                style={{ background: `#${lang.color}15`, color: `#${lang.color}`, border: `1px solid #${lang.color}30`, borderRadius: 999, padding: "5px 16px", fontSize: 13, fontWeight: 600, cursor: "default", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.background = `#${lang.color}25`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.background = `#${lang.color}15`; }}
              >{lang.name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
