"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/content/profile";

const contactLinks = [
  { label: "LinkedIn", href: profile.social.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.social.github, icon: Github },
  { label: "Email", href: `mailto:${profile.social.email}`, icon: Mail },
  { label: "WhatsApp", href: profile.social.whatsapp, icon: MessageCircle },
].filter((link) => Boolean(link.href));

export function ContactSection() {
  const { text } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow={text.contact.eyebrow}
          title={text.contact.title}
          description={text.contact.description}
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="space-y-6 p-6">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold">
                {text.contact.direct}
              </h3>
              <p className="text-sm text-muted-foreground">
                {text.contact.directDescription}
              </p>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background px-4 py-3 text-sm transition hover:border-primary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-xs text-muted-foreground">
              {text.contact.available}
            </div>
          </Card>
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
