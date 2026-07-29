"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
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
import { localizeCertificate } from "@/lib/i18n";

export function CertificatesGrid() {
  const { language, text } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "certificate" | "academic"
  >("all");
  const [imageSrcByTitle, setImageSrcByTitle] = useState<
    Record<string, string>
  >({});

  const filteredCertificates = useMemo(
    () =>
      certificates
        .filter((certificate) =>
          activeFilter === "all" ? true : certificate.category === activeFilter,
        )
        .map((certificate) => localizeCertificate(certificate, language)),
    [activeFilter, language],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Button
          size="sm"
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
        >
          {text.certificatesPage.all}
        </Button>
        <Button
          size="sm"
          variant={activeFilter === "certificate" ? "default" : "outline"}
          onClick={() => setActiveFilter("certificate")}
        >
          {text.certificatesPage.certifications}
        </Button>
        <Button
          size="sm"
          variant={activeFilter === "academic" ? "default" : "outline"}
          onClick={() => setActiveFilter("academic")}
        >
          {text.certificatesPage.academic}
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
                      {text.certificatesPage.credential}{" "}
                      {certificate.credentialId}
                    </p>
                  ) : null}
                </CardContent>
                <CardFooter className="mt-auto">
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      {certificate.credentialId
                        ? text.certificatesPage.viewCredential
                        : text.certificatesPage.details}
                    </Button>
                  </DialogTrigger>
                  {certificate.url !== "#" ? (
                    <Button asChild size="sm">
                      <Link href={certificate.url}>
                        {text.certificatesPage.open}
                      </Link>
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
                    alt={`${text.certificatesPage.previewAlt} ${certificate.title}`}
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
                        <Link href={certificate.url}>
                          {text.certificatesPage.viewCredential}
                        </Link>
                      </Button>
                    ) : null}
                    <Button asChild size="sm" variant="outline">
                      <Link href={currentImage} download>
                        {text.certificatesPage.download}
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
