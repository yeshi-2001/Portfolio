import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer style={{ background: "#050a0a", borderTop: "1px solid rgba(19,221,209,0.1)" }} className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: "#2a6b70" }} className="text-sm flex items-center gap-1.5">
          Built with <Heart size={14} style={{ color: "#13ddd1", fill: "#13ddd1" }} /> by{" "}
          <span style={{ color: "#13ddd1" }} className="font-medium">Yeshika B. Bandara</span>
          {" "}· {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: GitHubIcon, href: "https://github.com/yeshi-2001", label: "GitHub" },
            { icon: LinkedInIcon, href: "https://www.linkedin.com/in/yeshika-bandara-1716092a8", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color: "#2a6b70" }}
              className="p-2 rounded-full transition-all hover:text-[#13ddd1] hover:bg-[rgba(19,221,209,0.05)]">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
