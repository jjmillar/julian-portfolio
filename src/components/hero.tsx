import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile, stack, languages } from "../data";

const formatTime = (timeZone: string) =>
  new Intl.DateTimeFormat("es-CL", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => formatTime(timeZone));
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(timeZone)), 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
}

export function Hero() {
  const time = useLocalTime(profile.timeZone);

  return (
    <section id="inicio" className="wrap hero" aria-labelledby="hero-title">
      <div className="bento bento--hero">
        <article className="tile tile--intro">
          <div className="blueprint" aria-hidden />
          <h1 id="hero-title" className="display">
            {profile.name}
          </h1>
          <p className="intro__role">{profile.role}</p>
          <p className="intro__summary">{profile.summary}</p>
          <div className="actions">
            <a className="btn btn--primary" href="#contacto">
              Hablemos de tu proyecto
            </a>
            <a className="btn btn--ghost" href="#proyectos">
              Ver proyectos
            </a>
          </div>
        </article>

        <article className="tile tile--status">
          <p className="status">
            <span className="status__dot" aria-hidden />
            {profile.status}
          </p>
          <div>
            <p className="clock" aria-label={`Hora local en ${profile.location}: ${time}`}>
              {time}
            </p>
            <p className="meta">Hora en {profile.location}</p>
          </div>
        </article>

        <article className="tile tile--years">
          <p className="big-number">9</p>
          <p className="tile__text">años en oficina técnica de obras antes del código. Planifico, presupuesto y entrego a tiempo.</p>
        </article>

        <article className="tile tile--stack">
          <h2 className="tile__title">Stack</h2>
          <ul className="chips">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>

        <article className="tile tile--langs">
          <h2 className="tile__title">Idiomas</h2>
          <dl className="langs">
            {languages.map((l) => (
              <div key={l.name}>
                <dt>{l.name}</dt>
                <dd>{l.level}</dd>
              </div>
            ))}
          </dl>
        </article>

        <a className="tile tile--dojo tile--link" href="https://muramasabjj.com/" target="_blank" rel="noopener noreferrer">
          <h2 className="tile__title">Fuera de la pantalla</h2>
          <p className="tile__lead">Dirijo Muramasa BJJ y enseño Jiujitsu brasileño desde 2022.</p>
          <span className="tile__cta">
            muramasabjj.com <ArrowUpRight size={16} aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
