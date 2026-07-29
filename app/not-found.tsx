"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { text } = useLanguage();

  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>
        <h1 className="font-display text-4xl font-semibold">
          {text.notFound.title}
        </h1>
        <p className="max-w-lg text-sm text-muted-foreground">
          {text.notFound.description}
        </p>
        <Button asChild>
          <Link href="/">{text.notFound.back}</Link>
        </Button>
      </div>
    </section>
  );
}
