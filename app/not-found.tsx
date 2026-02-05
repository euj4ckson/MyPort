import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          404
        </p>
        <h1 className="font-display text-4xl font-semibold">Página não encontrada</h1>
        <p className="max-w-lg text-sm text-muted-foreground">
          A página que você buscou não existe. Vamos voltar ao início.
        </p>
        <Button asChild>
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </section>
  );
}
