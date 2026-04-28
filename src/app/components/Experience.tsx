"use client";
import FadeIn from "./FadeIn";
import { experience } from "../data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg-primary)" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "var(--highlight)" }} className="font-medium text-sm uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl md:text-4xl font-bold mb-12">
            Leadership &amp; Activities
          </h2>
        </FadeIn>

        <div className="relative max-w-2xl">
          <div style={{ background: "var(--accent)", opacity: 0.4 }} className="absolute left-5 top-0 bottom-0 w-px" />

          <div className="space-y-8">
            {experience.map(({ role, org, period, description }, i) => (
              <FadeIn key={role} delay={i * 0.15}>
                <div className="relative flex gap-6 pl-14">
                  <div
                    style={{ background: "var(--highlight)", border: "2px solid var(--bg-primary)" }}
                    className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <Briefcase size={16} style={{ color: "#050a0a" }} />
                  </div>

                  <div
                    style={{ background: "var(--bg-card)", border: "1px solid var(--card-border)" }}
                    className="flex-1 p-5 rounded-2xl"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 style={{ color: "var(--text-primary)" }} className="font-bold">{role}</h3>
                        <p style={{ color: "var(--accent)" }} className="text-sm font-medium">{org}</p>
                      </div>
                      <span style={{ background: "var(--tag-bg)", color: "var(--text-muted)" }} className="text-xs px-3 py-1 rounded-full">
                        {period}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-muted)" }} className="text-sm">{description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
