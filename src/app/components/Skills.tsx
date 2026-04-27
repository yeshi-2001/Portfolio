"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const categories: {
  label: string;
  items: { name: string; iconBg: string; icon: React.ReactNode }[];
}[] = [
  {
    label: "Languages",
    items: [
      {
        name: "Python",
        iconBg: "#3776AB22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M9 1C5.5 1 5.5 2.5 5.5 2.5V4h7V5H3.5S1 5 1 9s2.5 4 2.5 4H4.5V11.5S4.5 9 7 9h6s2.5 0 2.5-2.5V3.5S16 1 9 1z" fill="#3776AB"/>
            <circle cx="7" cy="3" r="0.8" fill="#FFD43B"/>
            <path d="M9 17c3.5 0 3.5-1.5 3.5-1.5V14h-7v-1h9S17 13 17 9s-2.5-4-2.5-4H13.5V6.5S13.5 9 11 9H5S2.5 9 2.5 11.5V14.5S2 17 9 17z" fill="#FFD43B"/>
            <circle cx="11" cy="15" r="0.8" fill="#3776AB"/>
          </svg>
        ),
      },
      {
        name: "Java",
        iconBg: "#f8981d22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M6.5 12.5s-.8.5.6.6c1.6.2 2.5.2 4.3-.2 0 0 .5.3 1.1.5-3.9 1.7-8.8-.1-6-0.9z" fill="#f8981d"/>
            <path d="M6 11s-.9.7.9.8c2.4.2 4.3.2 6-.3 0 0 .3.3.8.5-5.3 1.5-11.2.1-7.7-1z" fill="#f8981d"/>
            <path d="M10 1.5s1.8 1.8-1.7 4.5C5.6 8.2 7.8 9.3 8.3 10.6 7 9.5 6.1 8.5 6.7 7.4 7.5 5.8 11.2 4.9 10 1.5z" fill="#EA2D2E"/>
            <path d="M10.7 13.5s.6.5-.7.9c-2.5.7-10.4 1-12.6 0-.8-.3.7-.8 1.2-.9.5-.1.8-.1.8-.1-.9-.6-6 1.3-2.6 1.9 9.4 1.5 17.1-.7 13.9-1.8z" fill="#f8981d"/>
            <path d="M7 9.5s-4.3 1-1.5 1.4c1.2.2 3.5.1 5.7-.1 1.8-.2 3.6-.5 3.6-.5s-.6.3-1.1.5c-4.3 1.1-12.6.6-10.2-.5C5.3 9.4 7 9.5 7 9.5z" fill="#f8981d"/>
          </svg>
        ),
      },
      {
        name: "JavaScript",
        iconBg: "#F7DF1E22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <rect width="18" height="18" rx="2" fill="#F7DF1E"/>
            <path d="M5 13.5c.3.5.7.9 1.5.9.8 0 1.3-.4 1.3-1.1V9h1.5v4.3c0 1.8-1 2.7-2.7 2.7-1.4 0-2.3-.7-2.7-1.6L5 13.5z" fill="#323330"/>
            <path d="M10.5 13.4c.4.6.9 1 1.8 1 .8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.3-1.2l-.4-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.3 1-2.4 2.6-2.4 1.1 0 1.9.4 2.5 1.4l-1.3.9c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.4.2c1.5.7 2.4 1.3 2.4 2.8 0 1.6-1.3 2.5-3 2.5-1.7 0-2.8-.8-3.3-1.9l1.4-.5z" fill="#323330"/>
          </svg>
        ),
      },
      {
        name: "C++",
        iconBg: "#00599C22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <circle cx="9" cy="9" r="8" fill="#00599C"/>
            <path d="M5.5 11.5V6.5L9 4l3.5 2.5v5L9 14 5.5 11.5z" fill="#004482"/>
            <text x="4" y="12" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">C++</text>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React.js",
        iconBg: "#61DAFB22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 9 9)"/>
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 9 9)"/>
            <circle cx="9" cy="9" r="1.5" fill="#61DAFB"/>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        iconBg: "#06B6D422",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M9 3.5C6.5 3.5 5 4.75 4.5 7.25c.75-1 1.625-1.375 2.625-1.125.57.143.977.557 1.43 1.018C9.28 7.88 10.13 8.75 12 8.75c2.5 0 4-1.25 4.5-3.75-.75 1-1.625 1.375-2.625 1.125-.57-.143-.977-.557-1.43-1.018C11.72 4.37 10.87 3.5 9 3.5zM4.5 8.75C2 8.75.5 10 0 12.5c.75-1 1.625-1.375 2.625-1.125.57.143.977.557 1.43 1.018C5.28 13.13 6.13 14 8 14c2.5 0 4-1.25 4.5-3.75-.75 1-1.625 1.375-2.625 1.125-.57-.143-.977-.557-1.43-1.018C7.22 9.62 6.37 8.75 4.5 8.75z" fill="#06B6D4"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Flask",
        iconBg: "rgba(255,255,255,0.06)",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M9 2 L7 7 Q5 8 5 10 Q5 14 9 15 Q13 14 13 10 Q13 8 11 7 Z" stroke="#BE3144" strokeWidth="1" fill="rgba(190,49,68,0.1)"/>
            <line x1="9" y1="2" x2="9" y2="5" stroke="#BE3144" strokeWidth="1"/>
            <circle cx="11.5" cy="9" r="0.8" fill="#BE3144"/>
          </svg>
        ),
      },
      {
        name: "Spring Boot",
        iconBg: "#6DB33F22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <circle cx="9" cy="9" r="7.5" fill="#6DB33F"/>
            <path d="M5 9.5 Q6 6 9 6 Q12 6 13 9.5 Q12 13 9 13 Q6 13 5 9.5z" fill="white"/>
            <path d="M9 7.5 Q10.5 7.5 11 9 Q10.5 10.5 9 10.5 Q7.5 10.5 7 9 Q7.5 7.5 9 7.5z" fill="#6DB33F"/>
          </svg>
        ),
      },
      {
        name: "Node.js",
        iconBg: "#33993322",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M9 1.5L2 5.5V12.5L9 16.5L16 12.5V5.5L9 1.5Z" fill="#339933"/>
            <path d="M9 4L4.5 6.5V11.5L9 14L13.5 11.5V6.5L9 4Z" fill="#33993388"/>
            <text x="6" y="11" fontSize="5.5" fill="white" fontFamily="monospace" fontWeight="bold">JS</text>
          </svg>
        ),
      },
      {
        name: "Express.js",
        iconBg: "rgba(255,255,255,0.06)",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <text x="1" y="12" fontSize="7" fill="#555" fontFamily="monospace" fontWeight="bold">Ex</text>
            <line x1="1" y1="14" x2="17" y2="14" stroke="#555" strokeWidth="0.8" opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "MySQL",
        iconBg: "#4479A122",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <ellipse cx="9" cy="5" rx="6" ry="2.5" fill="#4479A1"/>
            <path d="M3 5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" stroke="#4479A1" strokeWidth="1" fill="none"/>
            <path d="M3 9v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V9" stroke="#4479A1" strokeWidth="1" fill="none"/>
            <ellipse cx="9" cy="5" rx="6" ry="2.5" fill="#00758F"/>
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        iconBg: "#33679022",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <ellipse cx="9" cy="5" rx="6" ry="2.5" fill="#336791"/>
            <path d="M3 5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" stroke="#336791" strokeWidth="1" fill="none"/>
            <path d="M3 9v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V9" stroke="#336791" strokeWidth="1" fill="none"/>
            <ellipse cx="9" cy="5" rx="6" ry="2.5" fill="#336791"/>
            <path d="M13 3 Q16 2 15 6" stroke="#EEEEEE" strokeWidth="0.8" fill="none"/>
          </svg>
        ),
      },
      {
        name: "MongoDB",
        iconBg: "#47A24822",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M9 1.5 Q12 5 12 9 Q12 13.5 9 16.5 Q6 13.5 6 9 Q6 5 9 1.5Z" fill="#47A248"/>
            <line x1="9" y1="12" x2="9" y2="16" stroke="#47A248" strokeWidth="1.5"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        iconBg: "#FF990022",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M5 10.5 Q3 10 3 8.5 Q3 7 4.5 6.5 Q4.5 4 7 4 Q8 4 8.5 4.5 Q9 3 10.5 3 Q13 3 13 5.5 Q14.5 6 14.5 7.5 Q14.5 9.5 13 10.5Z" fill="#FF9900"/>
            <path d="M5.5 13 L4 15 M9 13.5 L9 15.5 M12.5 13 L14 15" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: "Docker",
        iconBg: "#2496ED22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <rect x="2" y="8" width="3" height="2.5" rx="0.4" fill="#2496ED"/>
            <rect x="5.5" y="8" width="3" height="2.5" rx="0.4" fill="#2496ED"/>
            <rect x="9" y="8" width="3" height="2.5" rx="0.4" fill="#2496ED"/>
            <rect x="5.5" y="5" width="3" height="2.5" rx="0.4" fill="#2496ED"/>
            <rect x="9" y="5" width="3" height="2.5" rx="0.4" fill="#2496ED"/>
            <path d="M2 11 Q2 14 6 14 H13 Q16 14 16 11 Q14.5 12 13 11.5 Q12.5 13 11 12 Q10.5 13.5 9 12.5" stroke="#2496ED" strokeWidth="0.8" fill="none"/>
            <path d="M14 9 Q16 8.5 16 10" stroke="#2496ED" strokeWidth="0.8" fill="none"/>
          </svg>
        ),
      },
      {
        name: "Firebase",
        iconBg: "#FFCA2822",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M4 14L6.5 4.5L9.5 9.5L11 6L14 14Z" fill="#FFCA28"/>
            <path d="M4 14L6.5 4.5L9.5 9.5Z" fill="#F57C00"/>
            <path d="M9.5 9.5L11 6L14 14Z" fill="#FF8F00"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        name: "GitHub",
        iconBg: "rgba(255,255,255,0.08)",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 3.315 2.15 6.127 5.13 7.12.375.07.512-.163.512-.362 0-.178-.007-.65-.01-1.277-2.088.454-2.529-.997-2.529-.997-.341-.867-.833-1.098-.833-1.098-.681-.465.051-.456.051-.456.753.053 1.15.773 1.15.773.669 1.146 1.755.815 2.183.623.068-.484.262-.815.476-1.002-1.666-.19-3.418-.833-3.418-3.707 0-.819.293-1.489.773-2.013-.077-.19-.335-.953.073-1.987 0 0 .63-.202 2.063.77A7.18 7.18 0 019 5.88c.638.003 1.28.086 1.88.253 1.43-.972 2.06-.77 2.06-.77.41 1.034.152 1.797.075 1.987.48.524.772 1.194.772 2.013 0 2.882-1.755 3.515-3.426 3.7.27.232.51.69.51 1.39 0 1.003-.009 1.812-.009 2.059 0 .2.135.435.516.361C15.352 15.124 17.5 12.314 17.5 9c0-4.14-3.36-7.5-7.5-7.5z" fill="#24292e"/>
          </svg>
        ),
      },
      {
        name: "Postman",
        iconBg: "#FF6C3722",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <circle cx="9" cy="9" r="7.5" fill="#FF6C37"/>
            <circle cx="9" cy="9" r="4" fill="white" opacity="0.15"/>
            <path d="M6 9 L12 9 M9 6 L12 9 L9 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: "VS Code",
        iconBg: "#007ACC22",
        icon: (
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <path d="M13 1.5L6.5 8 3 5 1 6.5 5 9 1 11.5 3 13 6.5 10 13 16.5 17 14.5V3.5L13 1.5Z" fill="#007ACC"/>
            <path d="M13 5.5L8.5 9 13 12.5V5.5Z" fill="white" opacity="0.4"/>
            <path d="M13 1.5L6.5 8 3 5 1 6.5 5 9 1 11.5 3 13 6.5 10 13 16.5" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3"/>
          </svg>
        ),
      },
    ],
  },
];

function CategoryCard({
  cat,
}: {
  cat: (typeof categories)[number];
}) {
  const [hovered, setHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--highlight)" : "var(--card-border)"}`,
        borderRadius: 14,
        padding: "20px 18px",
        transition: "border-color 0.2s ease",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "var(--accent)",
          margin: 0,
        }}
      >
        {cat.label}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {cat.items.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "5px 8px",
              borderRadius: 8,
              background:
                hoveredItem === item.name
                  ? "rgba(253,125,38,0.1)"
                  : "transparent",
              transition: "background 0.15s ease",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: item.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <span
              style={{
                color: "var(--text-primary)",
                fontSize: 13.5,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        background: "var(--bg-primary)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            color: "var(--accent)",
            fontSize: 13,
            letterSpacing: "1px",
            marginBottom: 8,
          }}
        >
          // tech stack
        </p>
        <h2
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: 48,
            lineHeight: 1.2,
          }}
        >
          Tools I build with
        </h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
