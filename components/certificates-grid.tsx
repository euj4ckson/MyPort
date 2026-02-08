"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
  const [activeFilter, setActiveFilter] = useState<
    "all" | "certificate" | "academic"
  >("all");
  const [imageSrcByTitle, setImageSrcByTitle] = useState<
    Record<string, string>
  >({});

  const filteredCertificates = useMemo(
    () =>
      certificates.filter((certificate) =>
        activeFilter === "all" ? true : certificate.category === activeFilter,
      ),
    [activeFilter],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Button
          size="sm"
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
        >
          Todos
        </Button>
        <Button
          size="sm"
          variant={activeFilter === "certificate" ? "default" : "outline"}
          onClick={() => setActiveFilter("certificate")}
        >
          Certificacões
        </Button>
        <Button
          size="sm"
          variant={activeFilter === "academic" ? "default" : "outline"}
          onClick={() => setActiveFilter("academic")}
        >
          Formação acadêmica
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredCertificates.map((certificate) => {
          const currentImage =
            imageSrcByTitle[certificate.title] ?? certificate.image;

          return (
            <Dialog key={certificate.title}>
              <Card className="flex h-full flex-col">
                <CardContent className="space-y-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {certificate.issuer}
                    </p>
                  </div>
                  {certificate.credentialId ? (
                    <p className="text-xs text-muted-foreground">
                      Credencial: {certificate.credentialId}
                    </p>
                  ) : null}
                </CardContent>
                <CardFooter className="mt-auto">
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      {certificate.credentialId ? "Ver credencial" : "Ver detalhes"}
                    </Button>
                  </DialogTrigger>
                  {certificate.url !== "#" ? (
                    <Button asChild size="sm">
                      <Link href={certificate.url}>Abrir link</Link>
                    </Button>
                  ) : null}
                </CardFooter>
              </Card>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{certificate.title}</DialogTitle>
                  <DialogDescription>{certificate.issuer}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Image
                    src={currentImage}
                    alt={`Preview do certificado ${certificate.title}`}
                    width={1200}
                    height={800}
                    className="h-64 w-full rounded-2xl border border-border/60 object-cover"
                    onError={(event) => {
                      if (event.currentTarget.src.includes("/projects/atlas.svg")) {
                        return;
                      }
                      setImageSrcByTitle((previous) => ({
                        ...previous,
                        [certificate.title]: "/projects/atlas.svg",
                      }));
                    }}
                  />
                  <div className="flex flex-wrap gap-3">
                    {certificate.url !== "#" ? (
                      <Button asChild size="sm">
                        <Link href={certificate.url}>Ver credencial</Link>
                      </Button>
                    ) : null}
                    <Button asChild size="sm" variant="outline">
                      <Link href={currentImage} download>
                        Baixar imagem
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
