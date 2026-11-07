import { experience } from "../data";

export function Experience() {
  return (
    <section id="experiencia" className="wrap section" aria-labelledby="experiencia-title">
      <div className="section__head reveal">
        <h2 id="experiencia-title" className="h2">Experiencia</h2>
      </div>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company + e.period} className="timeline__item reveal">
            <p className="timeline__period">{e.period}</p>
            <div>
              <h3 className="timeline__role">{e.role}</h3>
              <p className="timeline__company">
                {e.company} <span aria-hidden>·</span> {e.location}
              </p>
              <ul className="timeline__points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
