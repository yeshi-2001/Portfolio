"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const techCategories = [
  {
    emoji: "💻",
    label: "Programming",
    icons: "python,java,js,cpp",
  },
  {
    emoji: "🎨",
    label: "Frontend",
    icons: "html,css,react,tailwind,figma",
  },
  {
    emoji: "⚙️",
    label: "Backend",
    icons: "flask,spring,nodejs,express",
  },
  {
    emoji: "🗄️",
    label: "Databases",
    icons: "mysql,postgres,mongodb",
  },
  {
    emoji: "☁️",
    label: "Cloud & DevOps",
    icons: "aws,firebase,docker,git",
  },
  {
    emoji: "🔧",
    label: "Tools",
    icons: "github,postman,vscode",
  },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Communication",
  "Attention To Detail",
];

const languages = [
  { name: "English", color: "2563EB" },
  { name: "Sinhala", color: "d97534" },
  { name: "Tamil", color: "f05920" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{ background: "var(--bg-primary)", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          color: "var(--text-primary)",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: 48,
          lineHeight: 1.2,
        }}>
          Tools I build with
        </h2>

        {/* ── Tech Stack Grid ── */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 56,
          }}
        >
          {techCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariant}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
                borderRadius: 14,
                padding: "20px 20px",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--highlight)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(253,125,38,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--card-border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <p style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}>
                <span>{cat.emoji}</span> {cat.label}
              </p>
              <img
                src={`https://skillicons.dev/icons?i=${cat.icons}&theme=dark`}
                alt={cat.label}
                style={{ display: "block", height: 40 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Soft Skills ── */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{ marginBottom: 40 }}
        >
          <h3 style={{
            color: "var(--text-primary)",
            fontSize: "1.2rem",
            fontWeight: 700,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            🤝 Soft Skills
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {softSkills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "rgba(253,125,38,0.12)",
                  color: "var(--accent)",
                  border: "1px solid rgba(253,125,38,0.3)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  fontSize: 13,
                  fontWeight: 500,
                  transition: "background 0.2s, color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLSpanElement).style.background = "var(--highlight)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#301405";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLSpanElement).style.background = "rgba(253,125,38,0.12)";
                  (e.currentTarget as HTMLSpanElement).style.color = "var(--accent)";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Languages ── */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 style={{
            color: "var(--text-primary)",
            fontSize: "1.2rem",
            fontWeight: 700,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            🌐 Languages
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {languages.map((lang) => (
              <span
                key={lang.name}
                style={{
                  background: `#${lang.color}22`,
                  color: `#${lang.color}`,
                  border: `1px solid #${lang.color}44`,
                  borderRadius: 999,
                  padding: "5px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "default",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLSpanElement).style.background = `#${lang.color}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLSpanElement).style.background = `#${lang.color}22`;
                }}
              >
                {lang.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
