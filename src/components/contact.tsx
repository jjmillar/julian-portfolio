import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { profile } from "../data";

type Status = "idle" | "sending" | "sent" | "error";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "Escríbeme", href: profile.whatsapp },
  { icon: Linkedin, label: "LinkedIn", value: "Julián Millar Vollaire", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
  { icon: Phone, label: "Teléfono", value: profile.phone, href: profile.phoneHref },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="wrap section" aria-labelledby="contacto-title">
      <div className="bento bento--contact">
        <div className="tile tile--cta reveal">
          <h2 id="contacto-title" className="h2">¿Construimos algo?</h2>
          <p className="section__lead">Cuéntame qué necesitas: una web nueva, mejorar la que tienes o automatizar algo de tu negocio.</p>
          <div className="email-row">
            <a className="email-big" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button type="button" className="icon-btn" onClick={copyEmail} aria-label="Copiar email">
              {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copiado" : ""}
            </span>
          </div>
          <ul className="channels">
            {channels.map((c) => (
              <li key={c.label}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <c.icon size={18} aria-hidden />
                  <span className="channels__label">{c.label}</span>
                  <span className="channels__value">{c.value}</span>
                  <ArrowUpRight size={16} aria-hidden className="channels__arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="tile tile--form reveal" name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contacto" />
          <p hidden>
            <label>
              No llenar: <input name="bot-field" />
            </label>
          </p>
          <div className="field">
            <label htmlFor="f-name">Nombre</label>
            <input id="f-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="f-message">¿En qué te ayudo?</label>
            <textarea id="f-message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>
          <p className="form-status" role="status">
            {status === "sent" && "Mensaje enviado. Te respondo pronto."}
            {status === "error" && (
              <>
                No se pudo enviar. Escríbeme directo a <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
