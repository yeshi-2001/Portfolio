import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer style={{ background: "#301405", borderTop: "1px solid rgba(253,125,38,0.2)" }} className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: "#f3a65d" }} className="text-sm flex items-center gap-1.5">
          Built with <Heart size={14} style={{ color: "var(--highlight)", fill: "var(--highlight)" }} /> by{" "}
          <span style={{ color: "var(--highlight)" }} className="font-medium">Yeshika B. Bandara</span>
          {" "}· {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: GitHubIcon, href: "https://github.com/yeshikabandara", label: "GitHub" },
            { icon: LinkedInIcon, href: "https://www.linkedin.com/in/yeshika-bandara-1716092a8", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "#98734c" }}
              className="p-2 rounded-full transition-all hover:text-[var(--highlight)] hover:bg-[rgba(253,125,38,0.1)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
