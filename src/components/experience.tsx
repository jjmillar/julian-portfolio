import type { CSSProperties } from "react";
import { experience } from "../data";
import { Education } from "./education";

const START = 2014;
const today = new Date();
const NOW = today.getFullYear() + today.getMonth() / 12;
const pct = (year: number) => ((year - START) / (NOW - START)) * 100;
const ticks = Array.from({ length: Math.floor((NOW - START) / 2) + 1 }, (_, i) => START + i * 2);
const rows = [...experience].sort((a, b) => a.from - b.from);

// La carrera como carta Gantt: el idioma de una oficina técnica.
function Gantt() {
  return (
    <figure className="tile gantt reveal">
      <figcaption className="gantt__head">
        <h3 className="tile__title">Carta Gantt de mi carrera</h3>
        <ul className="gantt__legend">
          <li><span className="gantt__key gantt__key--on" aria-hidden /> En curso</li>
          <li><span className="gantt__key" aria-hidden /> Terminado</li>
        </ul>
      </figcaption>
      <div className="gantt__plot" style={{ "--step": `${pct(START + 2)}%` } as CSSProperties}>
        <ol className="gantt__rows">
          {rows.map((e) => {
            const left = pct(e.from);
            const width = pct(e.to ?? NOW) - left;
            return (
              <li key={e.company} className="gantt__row">
                <p className="gantt__label">
                  <strong>{e.company}</strong>
                  <span className="meta">{e.period}</span>
                </p>
                <div className="gantt__track">
                  <span
                    className={`gantt__bar ${e.to === null ? "gantt__bar--on" : ""}`}
                    style={{ "--l": `${left}%`, "--w": `${width}%` } as CSSProperties}
                  />
                </div>
              </li>
            );
          })}
        </ol>
        <div className="gantt__axis" aria-hidden>
          <div>
            {ticks.map((t) => (
              <span key={t} style={{ left: `${pct(t)}%` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="wrap section" aria-labelledby="experiencia-title">
      <div className="section__head reveal">
        <p className="eyebrow">Experiencia</p>
        <h2 id="experiencia-title" className="h2">De la obra al código</h2>
        <p className="section__lead">Años coordinando presupuestos, plazos y equipos, ahora al servicio de productos web.</p>
      </div>
      <div className="bento bento--exp">
        <Gantt />
        {experience.map((e) => (
          <article key={e.company + e.period} className="tile job reveal">
            <p className="meta">{e.period}</p>
            <h3 className="job__role">{e.role}</h3>
            <p className="job__company">{e.company}</p>
            <ul className="job__points">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
        <Education />
      </div>
    </section>
  );
}
