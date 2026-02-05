import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
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
  return (
    <section id="contact" className="py-20">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos construir algo sólido"
          description="Compartilhe objetivos, prazo e contexto. Respondo com um plano claro e próximos passos."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="space-y-6 p-6">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold">Contato direto</h3>
              <p className="text-sm text-muted-foreground">
                Prefere uma resposta rápida? Fale comigo pelos canais abaixo.
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
              Disponível para projetos em .NET, ASP.NET Core e MAUI.
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
