"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { certificates } from "@/content/certificates";

export function CertificatesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certificates.map((certificate) => (
        <Dialog key={certificate.title}>
          <Card className="flex h-full flex-col">
            <CardContent className="space-y-4 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {certificate.date}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {certificate.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {certificate.issuer}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Credencial: {certificate.credentialId}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                  Ver credencial
                </Button>
              </DialogTrigger>
              <Button asChild size="sm">
                <Link href={certificate.url}>Abrir link</Link>
              </Button>
            </CardFooter>
          </Card>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{certificate.title}</DialogTitle>
              <DialogDescription>
                {certificate.issuer} · {certificate.date}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Image
                src={certificate.image}
                alt={`Preview do certificado ${certificate.title}`}
                width={1200}
                height={800}
                className="h-64 w-full rounded-2xl border border-border/60 object-cover"
              />
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <Link href={certificate.url}>Ver credencial</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href={certificate.image} download>
                    Baixar imagem
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
