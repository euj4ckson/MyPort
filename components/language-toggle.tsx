"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage, text } = useLanguage();
  const nextLanguage = language === "pt" ? "en" : "pt";
  const nextLanguageName =
    nextLanguage === "pt"
      ? text.language.portuguese
      : text.language.english;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 px-2.5"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={`${text.language.label}: ${nextLanguageName}`}
      title={`${text.language.label}: ${nextLanguageName}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase">
        {language === "pt" ? "EN" : "PT"}
      </span>
    </Button>
  );
}
