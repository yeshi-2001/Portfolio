"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  {
    id: "about",
    label: "About",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const btnW = isMobile ? 38 : 72;
  const btnH = isMobile ? 38 : 42;
  const fontSize = isMobile ? "9px" : "11px";
  const gap = isMobile ? 4 : 8;
  const padding = isMobile ? "5px 6px" : "8px 14px";

  const frontFaceStyle = (id: string): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: activeSection === id ? "rgba(253,125,38,0.15)" : "rgba(253,125,38,0.08)",
    border: activeSection === id
      ? "1px solid rgba(253,125,38,0.7)"
      : "1px solid rgba(253,125,38,0.2)",
    borderRadius: 12,
    color: "var(--highlight)",
    transition: "background 0.3s, border 0.3s",
  });

  const backFaceStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateX(180deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fd7d26, #f05920)",
    borderRadius: 12,
    color: "#301405",
    fontSize,
    fontWeight: 700,
    letterSpacing: "0.5px",
    whiteSpace: "nowrap",
    padding: "0 6px",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap,
        padding,
        background: "rgba(48,20,5,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 999,
        border: "1px solid rgba(253,125,38,0.25)",
        boxShadow: "0 8px 32px rgba(48,20,5,0.35)",
      }}
    >
      {/* Nav link buttons */}
      {navLinks.map(({ id, label, icon }) => (
        <div
          key={id}
          style={{ width: btnW, height: btnH, perspective: 600, cursor: "pointer" }}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollTo(id)}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
              transform: hovered === id ? "rotateX(180deg)" : "rotateX(0deg)",
              borderRadius: 12,
            }}
          >
            {/* Front — icon */}
            <div style={frontFaceStyle(id)}>{icon}</div>
            {/* Back — label */}
            <div style={backFaceStyle}>{label}</div>
          </div>
        </div>
      ))}

      {/* Divider */}
      <div style={{
        width: 1,
        height: 28,
        background: "rgba(253,125,38,0.25)",
        alignSelf: "center",
        margin: "0 4px",
        flexShrink: 0,
      }} />

      {/* Theme toggle button */}
      <div
        style={{ width: btnW, height: btnH, perspective: 600, cursor: "pointer" }}
        onMouseEnter={() => setHovered("theme")}
        onMouseLeave={() => setHovered(null)}
        onClick={toggle}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
            transform: hovered === "theme" ? "rotateX(180deg)" : "rotateX(0deg)",
            borderRadius: 12,
          }}
        >
          {/* Front — current mode icon */}
          <div style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(253,125,38,0.08)",
            border: "1px solid rgba(253,125,38,0.2)",
            borderRadius: 12,
            color: "var(--highlight)",
          }}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </div>
          {/* Back — "Theme" label */}
          <div style={backFaceStyle}>Theme</div>
        </div>
      </div>
    </nav>
  );
}
