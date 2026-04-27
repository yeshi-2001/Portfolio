"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { Mail, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import toast, { Toaster } from "react-hot-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yeshikabandara2001@gmail.com", href: "mailto:yeshikabandara2001@gmail.com" },
  { icon: Phone, label: "Phone", value: "0741711849", href: "tel:0741711849" },
  { icon: GitHubIcon, label: "GitHub", value: "github.com/yeshikabandara", href: "https://github.com/yeshikabandara" },
  { icon: LinkedInIcon, label: "LinkedIn", value: "linkedin.com/in/yeshika-bandara-1716092a8", href: "https://www.linkedin.com/in/yeshika-bandara-1716092a8" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ background: "var(--bg-secondary)" }} className="py-20 px-6">
      <Toaster position="bottom-right" />
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p style={{ color: "var(--highlight)" }} className="font-medium text-sm uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="mb-12 max-w-xl">
            I&apos;m open to internship opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--card-border)" }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all group hover:border-[var(--highlight)]"
                >
                  <div
                    style={{ background: "var(--icon-bg)" }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  >
                    <Icon size={18} style={{ color: "var(--highlight)" }} />
                  </div>
                  <div>
                    <p style={{ color: "var(--text-muted)" }} className="text-xs">{label}</p>
                    <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ color: "var(--text-muted)" }} className="block text-xs font-medium mb-1.5">Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name" autoComplete="off" suppressHydrationWarning
                    style={{ background: "var(--input-bg)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[var(--highlight)] focus:ring-1 focus:ring-[var(--highlight)] transition-colors text-sm placeholder:text-[var(--text-muted)]"
                  />
                </div>
                <div>
                  <label style={{ color: "var(--text-muted)" }} className="block text-xs font-medium mb-1.5">Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com" autoComplete="off" suppressHydrationWarning
                    style={{ background: "var(--input-bg)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[var(--highlight)] focus:ring-1 focus:ring-[var(--highlight)] transition-colors text-sm placeholder:text-[var(--text-muted)]"
                  />
                </div>
              </div>
              <div>
                <label style={{ color: "var(--text-muted)" }} className="block text-xs font-medium mb-1.5">Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ background: "var(--input-bg)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[var(--highlight)] focus:ring-1 focus:ring-[var(--highlight)] transition-colors text-sm resize-none placeholder:text-[var(--text-muted)]"
                />
              </div>
              <button
                type="submit" disabled={loading} suppressHydrationWarning
                style={{ background: "var(--highlight)", color: "#301405" }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-60 shadow-lg"
              >
                {loading ? <span className="w-4 h-4 border-2 border-[#301405]/30 border-t-[#301405] rounded-full animate-spin" /> : <Send size={16} />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
