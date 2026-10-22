"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { text } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full"
      >
        <Sun className="h-4 w-4" />
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={isDark ? text.theme.switchToLight : text.theme.switchToDark}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
