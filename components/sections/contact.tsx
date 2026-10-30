"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "@/components/providers";
import { ArrowUpRight, Reveal } from "@/components/ui";
import { links } from "@/lib/copy";
import { checkEmail } from "@/lib/validate-email";

type Status = "idle" | "sending" | "success" | "error";
type Topic = "project" | "product" | "sarathi" | "other";

type Field = "name" | "email" | "message";

const fieldClass =
  "mt-2 block w-full rounded-xl border bg-paper px-3.5 text-base text-ink transition-colors placeholder:text-faint focus:outline-none";
const fieldState = (invalid: boolean) =>
  invalid
    ? "border-red-500 focus:border-red-600"
    : "border-line-strong hover:border-faint focus:border-brand";

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm font-normal text-red-700">
      <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4.8v3.6M8 10.8v.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {children}
    </p>
  );
}

export default function Contact() {
  const { t, lang } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState<Topic>("project");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<Field, boolean>>({ name: false, email: false, message: false });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const email = checkEmail(values.email);
  const errors: Record<Field, string | null> = {
    name: values.name.trim() ? null : f.nameRequired,
    email: email.ok ? null : email.reason === "empty" ? f.emailRequired : f.emailInvalid,
    message: values.message.trim().length >= 10 ? null : f.messageShort,
  };
  const show = (field: Field) => touched[field] && errors[field];
  const update = (field: Field) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));
  const blur = (field: Field) => () => setTouched((t) => ({ ...t, [field]: true }));

  /* Links like /contact?topic=sarathi pre-select the topic. */
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the URL after hydration
    if (requested && requested in f.topics) setTopic(requested as Topic);
  }, [f.topics]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const firstInvalid = (["name", "email", "message"] as Field[]).find((field) => errors[field]);
    if (firstInvalid) {
      setTouched({ name: true, email: true, message: true });
      ({ name: nameRef, email: emailRef, message: messageRef })[firstInvalid].current?.focus();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(links.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Form submit failed: ${response.status}`);
      form.reset();
      setValues({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTopic("project");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  const channels = [
    { label: t.contact.line, value: "@069twqcs", href: links.line, copyable: false },
    { label: t.contact.email, value: links.email, href: `mailto:${links.email}`, copyable: true },
  ];
  const socials = [
    { label: "Instagram", href: links.instagram },
    { label: "Facebook", href: links.facebook },
    { label: "LinkedIn", href: links.linkedin },
  ];

  return (
    <section aria-label={t.contact.label} className="pt-6 pb-24 md:pt-10 md:pb-32">
      <div className="container-x relative grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <div>
          <Reveal className="space-y-3">
            {channels.map((channel) => (
              <div key={channel.label} className="relative">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-line bg-paper px-5 py-4 transition-colors hover:border-ink"
                >
                  <span>
                    <span className="block text-xs text-faint">{channel.label}</span>
                    <span className="mt-0.5 block font-medium">{channel.value}</span>
                  </span>
                  <ArrowUpRight
                    className={`size-4 text-faint transition-colors group-hover:text-ink ${
                      channel.copyable ? "mr-20" : ""
                    }`}
                  />
                </a>
                {channel.copyable ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="absolute top-1/2 right-3 h-8 -translate-y-1/2 cursor-pointer rounded-lg border border-line px-2.5 font-mono text-xs text-ink-soft transition-colors hover:border-ink"
                  >
                    <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
                  </button>
                ) : null}
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">{t.contact.social}</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-paper/90 p-6 shadow-[0_24px_60px_-28px_rgba(48,70,232,0.45)] backdrop-blur md:p-8"
          >
            <input type="hidden" name="language" value={lang} />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                {f.name}
                <input
                  ref={nameRef}
                  name="name"
                  required
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  onBlur={blur("name")}
                  aria-invalid={Boolean(show("name"))}
                  aria-describedby={show("name") ? "name-error" : undefined}
                  className={`${fieldClass} ${fieldState(Boolean(show("name")))} h-12`}
                />
                {show("name") ? <FieldError id="name-error">{errors.name}</FieldError> : null}
              </label>
              <label className="block text-sm font-medium">
                {f.email}
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={update("email")}
                  onBlur={blur("email")}
                  aria-invalid={Boolean(show("email"))}
                  aria-describedby={show("email") ? "email-error" : undefined}
                  className={`${fieldClass} ${fieldState(Boolean(show("email")))} h-12`}
                />
                {show("email") ? <FieldError id="email-error">{errors.email}</FieldError> : null}
                {touched.email && email.suggestion ? (
                  <button
                    type="button"
                    onClick={() => setValues((v) => ({ ...v, email: email.suggestion ?? v.email }))}
                    className="mt-1.5 cursor-pointer text-left text-sm font-normal text-muted"
                  >
                    {f.emailSuggest}{" "}
                    <span className="font-medium text-brand underline underline-offset-2">{email.suggestion}</span>?
                  </button>
                ) : null}
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">
              {f.topic}
              <select
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value as Topic)}
                className={`${fieldClass} ${fieldState(false)} h-12 cursor-pointer`}
              >
                {(Object.keys(f.topics) as Topic[]).map((key) => (
                  <option key={key} value={key}>
                    {f.topics[key]}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium">
              {f.message}
              <textarea
                ref={messageRef}
                name="message"
                required
                rows={5}
                placeholder={f.messagePlaceholder}
                value={values.message}
                onChange={update("message")}
                onBlur={blur("message")}
                aria-invalid={Boolean(show("message"))}
                aria-describedby={show("message") ? "message-error" : undefined}
                className={`${fieldClass} ${fieldState(Boolean(show("message")))} resize-y py-3`}
              />
              {show("message") ? <FieldError id="message-error">{errors.message}</FieldError> : null}
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sending" ? f.sending : f.submit}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-sm ${status === "error" ? "text-red-700" : "text-emerald-700"}`}
            >
              {status === "success" ? f.success : status === "error" ? f.error : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
