"use client";

import Link from "next/link";

import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const { text } = useLanguage();
  const navLinks = [
    { label: text.nav.home, href: "/" },
    { label: text.nav.projects, href: "/projects" },
    { label: text.nav.certificates, href: "/certificates" },
    { label: text.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Jackson.
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/#contact">{text.nav.talk}</Link>
          </Button>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
