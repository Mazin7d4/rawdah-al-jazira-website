"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/cn";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          theme?: string;
        },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputCls =
  "w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm text-ink-900 transition placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";

const labelCls =
  "mb-1.5 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-700";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-semibold text-crimson-600">{message}</p>;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "" },
  });

  const renderTurnstile = () => {
    if (
      !TURNSTILE_SITE_KEY ||
      !window.turnstile ||
      !turnstileRef.current ||
      widgetId.current
    ) {
      return;
    }
    widgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: setTurnstileToken,
      "expired-callback": () => setTurnstileToken(""),
      theme: "light",
    });
  };

  const onSubmit = async (values: ContactInput) => {
    setStatus("submitting");
    setServerError("");
    try {
      // Honeypot: if filled by a bot, silently simulate success
      if (honeypotRef.current?.value) {
        setStatus("success");
        return;
      }

      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("name", values.name);
      if (values.company) formData.append("company", values.company);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("service", values.service);
      if (values.facility) formData.append("facility", values.facility);
      formData.append("message", values.message);

      if (process.env.NODE_ENV === "development") {
        console.log("[dev] Netlify form submitted:", Object.fromEntries(formData));
        setStatus("success");
        return;
      }

      let res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!res.ok) {
        res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        });
      }

      if (!res.ok) {
        throw new Error(
          "We could not send your message right now. Please call or WhatsApp us directly.",
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      window.turnstile?.reset(widgetId.current);
      setTurnstileToken("");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-100 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="size-14 text-brand-600" strokeWidth={1.5} aria-hidden />
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
          Thank you — we&apos;ve received your request.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
          {company.responsePromise} For anything urgent, reach us directly on
          WhatsApp or call {company.phoneDisplay}.
        </p>
        <ButtonLink
          href={company.whatsappHref}
          external
          variant="primary"
          size="lg"
          className="mt-7"
        >
          <MessageCircle className="size-5" aria-hidden />
          Continue on WhatsApp
        </ButtonLink>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={(e) => void handleSubmit(onSubmit)(e)}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onLoad={renderTurnstile}
        />
      )}

      {/* Honeypot — hidden from real users, attractive to bots. */}
      <div aria-hidden className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="bot-field">Website</label>
        <input
          ref={honeypotRef}
          type="text"
          id="bot-field"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Full name"
            autoComplete="name"
            className={cn(inputCls, errors.name && "border-crimson-500")}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="company" className={labelCls}>
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            placeholder="Optional"
            autoComplete="organization"
            className={cn(inputCls, errors.company && "border-crimson-500")}
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className={cn(inputCls, errors.email && "border-crimson-500")}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+971 5x xxx xxxx"
            autoComplete="tel"
            className={cn(inputCls, errors.phone && "border-crimson-500")}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="service" className={labelCls}>
            Service Needed *
          </label>
          <select
            id="service"
            className={cn(inputCls, errors.service && "border-crimson-500")}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Multiple / Other">Multiple / Other</option>
          </select>
          <FieldError message={errors.service?.message} />
        </div>

        <div>
          <label htmlFor="facility" className={labelCls}>
            Facility Type &amp; Size
          </label>
          <input
            id="facility"
            type="text"
            placeholder="e.g. 3-floor office, ~2,000 m²"
            className={cn(inputCls, errors.facility && "border-crimson-500")}
            {...register("facility")}
          />
          <FieldError message={errors.facility?.message} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Your Requirements *
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your space, the schedule you have in mind (monthly / yearly), and anything else we should know."
            className={cn(inputCls, "resize-y", errors.message && "border-crimson-500")}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      {TURNSTILE_SITE_KEY && <div ref={turnstileRef} className="mt-6" />}

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-crimson-500/30 bg-crimson-50 px-4 py-3 text-sm font-semibold text-crimson-700"
        >
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden />
            Send Request
          </>
        )}
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-ink-400">
        By submitting this form you agree to our privacy policy. We only use
        your details to respond to your enquiry.
      </p>
    </form>
  );
}
