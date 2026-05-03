"use client";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Centralized Lost & Found System",
    description:
      "A privacy-focused web application for university students to report and recover lost items. Implements an AI-powered matching algorithm with 80%+ accuracy target and an intelligent verification system. Features secure database design, university email authentication, and real-time notifications for seamless item recovery.",
    features: [
      "AI-powered item matching algorithm with 80%+ accuracy target",
      "University email authentication & secure JWT sessions",
      "Real-time notifications for item matches",
      "Privacy-focused design with intelligent verification",
      "Structured PostgreSQL schema for scalable data management",
    ],
    tech: ["React.js", "Python Flask", "PostgreSQL", "OpenAI API", "JWT Authentication"],
    github: "https://github.com/yeshi-2001/Lost_And_Found_System",
    live: "",
    video: "",
  },
  {
    id: 2,
    title: "First Aid Expert System",
    description:
      "A rule-based expert system that delivers emergency medical guidance for 25 medical conditions across 8 categories. Provides step-by-step treatment instructions and emergency alerts based on American Red Cross guidelines. Integrated the knowledge base with a web interface for seamless and reliable user interaction.",
    features: [
      "Covers 25 medical conditions across 8 categories",
      "Step-by-step treatment instructions per condition",
      "Emergency alert system for critical situations",
      "Rule-based Prolog knowledge engine",
      "Seamless web interface integrated with backend logic",
    ],
    tech: ["React.js", "Node.js", "Prolog", "JavaScript", "REST API"],
    github: "https://github.com/yeshi-2001/first-Aid-Expert-System",
    live: "",
    video: "/First_Aid.mp4",
  },
  {
    id: 3,
    title: "Skill Exchange Web Application",
    description:
      "A full-stack platform connecting users who want to teach and learn skills. Uses an AI-powered matching algorithm to suggest learning partners based on skill compatibility. Features real-time chat, connection requests, secure authentication, and a scalable architecture with smooth frontend-backend integration.",
    features: [
      "AI-powered skill compatibility matching via Groq API",
      "Real-time chat using WebSocket (STOMP + SockJS)",
      "Connection request and approval workflow",
      "Spring Security with JWT authentication",
      "Scalable Spring Boot + React architecture",
    ],
    tech: ["Spring Boot", "Java", "React", "Material-UI", "PostgreSQL", "Groq API", "Spring Security", "JWT", "WebSocket"],
    github: "https://github.com/yeshi-2001/SkillMate",
    live: "https://www.linkedin.com/posts/yeshika-bandara-1716092a8_im-excited-to-share-skillmate-a-full-stack-activity-7454131735413428224-VKJd",
    video: "/Skill.mp4",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "Escape") setShowDetails(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, animating]);

  const navigate = (dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setVideoLoaded(false);
    setShowDetails(false);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "next" ? (prev + 1) % projects.length : (prev - 1 + projects.length) % projects.length
      );
      setAnimating(false);
    }, 380);
  };

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setVideoLoaded(false);
    setShowDetails(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 380);
  };

  const project = projects[current];

  const cardTransition: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "next" ? "40px" : "-40px"})`
      : "translateX(0px)",
    transition: "opacity 0.38s ease, transform 0.38s ease",
  };

  const cardHeight = isMobile ? 420 : 540;

  return (
    <section
      id="projects"
      style={{
        background: "var(--bg-secondary)",
        padding: "80px 24px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, var(--bg-card) 25%, var(--border-color) 50%, var(--bg-card) 75%);
          background-size: 800px 100%;
          animation: shimmer 1.4s infinite linear;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .details-panel {
          animation: slideUp 0.3s ease forwards;
        }
      `}</style>

      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>

        <div style={{ marginBottom: 32 }}>
          <p style={{ color: "var(--cta)", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Projects</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
            <h2 style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
            }}>
              Featured Projects
            </h2>
            <span style={{ color: "var(--text-muted)", fontSize: 14, fontFamily: "var(--font-dm-mono), monospace" }}>
              {current + 1} / {projects.length}
            </span>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: cardHeight,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            border: "1px solid var(--card-border)",
            ...cardTransition,
          }}
        >
          {project.video ? (
            <>
              {!videoLoaded && (
                <div className="shimmer" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
              )}
              <video
                ref={videoRef}
                key={project.video}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: videoLoaded ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </>
          ) : (
            <div style={{
              position: "absolute",
              inset: 0,
              background: "var(--bg-card)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="var(--text-muted)" stroke="none"/>
              </svg>
              <p style={{ color: "var(--text-muted)", fontSize: 15, fontWeight: 500, margin: 0 }}>Demo coming soon</p>
            </div>
          )}

          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 100,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.65), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }} />

          <div style={{ position: "absolute", top: 20, left: 24, zIndex: 3 }}>
            <h3 style={{
              color: "var(--bg-primary)",
              fontSize: isMobile ? 16 : 20,
              fontWeight: 700,
              margin: 0,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}>
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => setShowDetails((v) => !v)}
            title={showDetails ? "Hide details" : "Show details"}
            style={{
              position: "absolute",
              top: 16,
              right: 20,
              zIndex: 10,
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.5)",
              background: showDetails ? "var(--cta)" : "rgba(0,0,0,0.45)",
              color: "var(--bg-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            {showDetails ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="8" strokeWidth="3"/><line x1="12" y1="12" x2="12" y2="16"/>
              </svg>
            )}
          </button>

          {showDetails && (
            <div
              className="details-panel"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 5,
                background: "rgba(11,18,18,0.94)",
                backdropFilter: "blur(16px)",
                overflowY: "auto",
                padding: isMobile ? "60px 20px 24px" : "60px 36px 32px",
              }}
            >
              <p style={{ color: "rgba(224,250,249,0.75)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 18 }}>
                {project.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px 0" }}>
                {project.features.map((f, i) => (
                  <li key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    color: "rgba(224,250,249,0.65)",
                    fontSize: 13,
                    marginBottom: 7,
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: "var(--cta)", flexShrink: 0, marginTop: 1 }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    border: "1px solid var(--card-border)",
                    color: "var(--cta)",
                    borderRadius: 999,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 600,
                    background: "rgba(18,203,192,0.1)",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "8px 18px", borderRadius: 999,
                    border: "1px solid var(--cta)", color: "var(--cta)",
                    fontSize: 13, fontWeight: 600, textDecoration: "none",
                    background: "transparent", transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--cta)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg-primary)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--cta)"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          )}

          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 80,
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 24 }}>
          <button
            onClick={() => navigate("prev")}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1px solid var(--card-border)", background: "var(--bg-card)",
              color: "var(--text-primary)", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer",
              transition: "background 0.2s, transform 0.2s, border-color 0.2s", flexShrink: 0,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(18,203,192,0.1)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cta)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-card)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--card-border)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            aria-label="Previous project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 28 : 8, height: 8, borderRadius: 999,
                  background: i === current ? "var(--cta)" : "var(--border-color)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate("next")}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1px solid var(--card-border)", background: "var(--bg-card)",
              color: "var(--text-primary)", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer",
              transition: "background 0.2s, transform 0.2s, border-color 0.2s", flexShrink: 0,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(18,203,192,0.1)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cta)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-card)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--card-border)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            aria-label="Next project"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
