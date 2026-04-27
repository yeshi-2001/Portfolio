"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
      style={{ background: isDark ? "#0a0500" : "var(--bg-primary)" }}
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Base gradient */}
        <div className="absolute inset-0" style={{
          background: isDark
            ? "radial-gradient(ellipse 80% 60% at 50% 50%, #0a0500 30%, #1a0a02 55%, #2a1005 75%, #3d1500 100%)"
            : "radial-gradient(ellipse 80% 60% at 50% 50%, #f0c791 20%, #f3a65d 60%, #f0c791 100%)"
        }} />

        {/* Top-right glow */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full" style={{
          background: isDark
            ? "radial-gradient(circle, rgba(217,117,52,0.25) 0%, rgba(253,125,38,0.12) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(217,117,52,0.18) 0%, rgba(253,125,38,0.08) 40%, transparent 70%)",
          filter: "blur(40px)"
        }} />

        {/* Bottom-left glow */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full" style={{
          background: isDark
            ? "radial-gradient(circle, rgba(240,89,32,0.2) 0%, rgba(154,76,30,0.1) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(240,89,32,0.15) 0%, rgba(154,76,30,0.08) 40%, transparent 70%)",
          filter: "blur(50px)"
        }} />

        {/* Circuit board SVG */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: isDark ? 0.35 : 0.2 }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-strong">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <style>{`
              @keyframes dash1 { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
              @keyframes dash2 { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
              @keyframes dash3 { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
              @keyframes pulse-node { 0%,100% { opacity:0.4; r:3; } 50% { opacity:1; r:5; } }
              @keyframes pulse-node2 { 0%,100% { opacity:0.3; r:2; } 50% { opacity:0.9; r:4; } }
              .line1 { stroke-dasharray: 400; animation: dash1 4s linear infinite; }
              .line2 { stroke-dasharray: 600; animation: dash2 6s linear infinite; }
              .line3 { stroke-dasharray: 300; animation: dash3 3.5s linear infinite; }
              .node1 { animation: pulse-node 2.5s ease-in-out infinite; }
              .node2 { animation: pulse-node2 3.2s ease-in-out infinite; }
              .node3 { animation: pulse-node 4s ease-in-out infinite 1s; }
            `}</style>
          </defs>
          <g filter="url(#glow)" stroke="#d97534" strokeWidth="1" fill="none">
            <polyline className="line1" points="100%,0 85%,0 85%,8% 70%,8% 70%,18% 55%,18%" />
            <polyline className="line2" points="100%,5% 90%,5% 90%,15% 78%,15% 78%,28%" />
            <polyline className="line3" points="95%,0 95%,12% 82%,12% 82%,22% 65%,22%" />
          </g>
          <g filter="url(#glow-strong)" fill="#fd7d26">
            <circle className="node1" cx="85%" cy="8%" r="3" />
            <circle className="node2" cx="70%" cy="18%" r="2.5" />
            <circle className="node3" cx="78%" cy="15%" r="2" />
            <circle className="node1" cx="90%" cy="5%" r="2" />
          </g>
          <g filter="url(#glow)" stroke="#f05920" strokeWidth="1" fill="none">
            <polyline className="line2" points="0,100% 15%,100% 15%,88% 28%,88% 28%,78% 42%,78%" />
            <polyline className="line1" points="0,92% 12%,92% 12%,82% 25%,82% 25%,70% 38%,70%" />
            <polyline className="line3" points="5%,100% 5%,90% 18%,90% 18%,80% 32%,80%" />
          </g>
          <g filter="url(#glow-strong)" fill="#f3a65d">
            <circle className="node2" cx="15%" cy="88%" r="3" />
            <circle className="node3" cx="28%" cy="78%" r="2.5" />
            <circle className="node1" cx="25%" cy="82%" r="2" />
            <circle className="node2" cx="12%" cy="92%" r="2" />
          </g>
          <g filter="url(#glow)" stroke="#98734c" strokeWidth="0.8" fill="none">
            <polyline className="line3" points="0,0 12%,0 12%,10% 22%,10% 22%,20%" />
            <polyline className="line1" points="0,6% 8%,6% 8%,16% 18%,16% 18%,26%" />
          </g>
          <g filter="url(#glow-strong)" fill="#d97534">
            <circle className="node3" cx="12%" cy="10%" r="2.5" />
            <circle className="node1" cx="22%" cy="20%" r="2" />
          </g>
          <g filter="url(#glow)" stroke="#9a4c1e" strokeWidth="0.8" fill="none">
            <polyline className="line2" points="100%,100% 88%,100% 88%,90% 76%,90% 76%,80%" />
            <polyline className="line3" points="100%,94% 92%,94% 92%,84% 80%,84%" />
          </g>
          <g filter="url(#glow-strong)" fill="#fd7d26">
            <circle className="node2" cx="88%" cy="90%" r="2.5" />
            <circle className="node1" cx="76%" cy="80%" r="2" />
          </g>
          <g fill="#fd7d26" filter="url(#glow)">
            <circle className="node2" cx="60%" cy="35%" r="1.5" />
            <circle className="node3" cx="35%" cy="65%" r="1.5" />
            <circle className="node1" cx="72%" cy="60%" r="1.5" />
            <circle className="node2" cx="25%" cy="40%" r="1.5" />
          </g>
        </svg>

        {/* Top reflection strip */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent, rgba(253,125,38,0.4), rgba(240,199,145,0.3), rgba(253,125,38,0.4), transparent)"
        }} />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: isDark
            ? "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)"
            : "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(154,76,30,0.15) 100%)"
        }} />
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20">

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: isDark ? "#f0c791" : "#301405" }}
            >
              Yeshika B.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd7d26] to-[#f05920]">
                Bandara
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium mb-6 !text-center -translate-x-[120px]"
              style={{ color: isDark ? "#f3a65d" : "#602e11" }}
            >
              Software Engineer Intern
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg font-bold max-w-xl mb-8 !text-center"
              style={{ color: isDark ? "#f0c791" : "#301405" }}
            >
              Passionate about software development, cloud technologies, and automation.
              Building scalable solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fd7d26, #f05920)",
                  color: isDark ? "#0a0500" : "#301405",
                  boxShadow: "0 4px 20px rgba(253,125,38,0.4)"
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                style={{
                  color: "#fd7d26",
                  border: "1px solid rgba(253,125,38,0.5)",
                  background: isDark ? "rgba(253,125,38,0.08)" : "rgba(253,125,38,0.12)",
                  backdropFilter: "blur(8px)"
                }}
              >
                Contact Me
              </button>
              <a
                href="/Y.M_Yeshika_B._Bandara.pdf"
                download="Y.M_Yeshika_B._Bandara.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
                style={{
                  color: "#fd7d26",
                  border: "1px solid rgba(253,125,38,0.5)",
                  background: isDark ? "rgba(253,125,38,0.08)" : "rgba(253,125,38,0.12)",
                  backdropFilter: "blur(8px)"
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              {[
                { icon: GitHubIcon, href: "https://github.com/yeshikabandara", label: "GitHub" },
                { icon: LinkedInIcon, href: "https://www.linkedin.com/in/yeshika-bandara-1716092a8", label: "LinkedIn" },
                { icon: Mail, href: "mailto:yeshikabandara2001@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full transition-all hover:scale-110"
                  style={{
                    background: "rgba(253,125,38,0.1)",
                    color: isDark ? "#98734c" : "#602e11",
                    border: "1px solid rgba(253,125,38,0.2)"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fd7d26")}
                  onMouseLeave={e => (e.currentTarget.style.color = isDark ? "#98734c" : "#602e11")}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full" style={{
                background: "linear-gradient(135deg, #fd7d26, #d97534, #f05920)",
                filter: "blur(16px)",
                opacity: 0.5,
                transform: "scale(1.1)"
              }} />
              <div className="rounded-full p-[3px] relative" style={{
                background: "linear-gradient(135deg, #fd7d26, #d97534, #f05920)",
                boxShadow: "0 0 40px rgba(253,125,38,0.35), 0 0 80px rgba(240,89,32,0.15)"
              }}>
                <div className="rounded-full p-[3px]"
                  style={{ background: isDark ? "#0a0500" : "#f0c791" }}>
                  <div className="rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72">
                    <Image
                      src="/profile.jpg"
                      alt="Yeshika B. Bandara"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover object-[50%_20%]"
                      priority
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-3 -right-3 rounded-2xl px-3 py-2 shadow-lg"
                style={{
                  background: isDark ? "rgba(10,5,0,0.85)" : "rgba(240,199,145,0.95)",
                  border: "1px solid rgba(253,125,38,0.35)",
                  backdropFilter: "blur(12px)",
                  color: isDark ? "#f0c791" : "#301405"
                }}
              >
                <p className="text-xs font-semibold text-center">Software Engineer</p>
                <p className="text-xs text-center" style={{ color: "#fd7d26" }}>Intern</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 animate-bounce"
        style={{ color: "rgba(253,125,38,0.5)" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
