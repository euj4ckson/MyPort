import Link from "next/link";

import { profile } from "@/content/profile";

const footerLinks = [
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "Email", href: `mailto:${profile.social.email}` },
].filter((link) => Boolean(link.href));

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.headline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
