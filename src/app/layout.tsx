import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmMono = DM_Mono({ subsets: ["latin"], variable: "--font-dm-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Yeshika B. Bandara | Software Engineer Intern",
  description:
    "Portfolio of Yeshika B. Bandara — Software Engineer Intern passionate about full-stack development, cloud technologies, and automation.",
  keywords: [
    "Yeshika Bandara",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Yeshika B. Bandara" }],
  openGraph: {
    title: "Yeshika B. Bandara | Software Engineer Intern",
    description: "Passionate about software development, cloud technologies, and automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeshika B. Bandara | Software Engineer Intern",
    description: "Passionate about software development, cloud technologies, and automation.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Blocking script: apply theme class before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
