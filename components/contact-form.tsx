"use client";

import * as React from "react";
import { z } from "zod";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = { name: string; email: string; message: string };

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const { text } = useLanguage();
  const [values, setValues] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");

  const onChange =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const validate = () => {
    const schema = z.object({
      name: z.string().min(2, text.form.nameError),
      email: z.string().email(text.form.emailError),
      message: z.string().min(10, text.form.messageError),
    });
    const result = schema.safeParse(values);
    if (result.success) {
      setErrors({});
      return true;
    }
    const nextErrors: FieldErrors = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof FormState | undefined;
      if (field) {
        nextErrors[field] = issue.message;
      }
    });
    setErrors(nextErrors);
    return false;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setValues(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          {text.form.name}
        </label>
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={onChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder={text.form.namePlaceholder}
          required
        />
        {errors.name ? (
          <p id="name-error" className="text-xs text-red-500">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          {text.form.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder={text.form.emailPlaceholder}
          required
        />
        {errors.email ? (
          <p id="email-error" className="text-xs text-red-500">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {text.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder={text.form.messagePlaceholder}
          required
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? text.form.sending : text.form.send}
        </Button>
        <div className="min-h-[20px]" aria-live="polite">
          {status === "success" ? (
            <p className="text-sm text-emerald-500">{text.form.success}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-500">
              {text.form.error}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
