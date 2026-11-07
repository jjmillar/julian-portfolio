import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="proyectos" className="wrap section" aria-labelledby="proyectos-title">
      <div className="section__head reveal">
        <h2 id="proyectos-title" className="h2">Proyectos</h2>
        <p className="section__lead">Sitios y herramientas que diseñé, programé y mantengo en producción.</p>
      </div>
      <div className="bento bento--projects">
        {projects.map((p, i) => (
          <article key={p.title} className={`tile project project--${i + 1} reveal`}>
            <div className="project__shot">
              <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" decoding="async" width={1200} height={800} />
            </div>
            <div className="project__body">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <ul className="tags" aria-label="Tecnologías">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project__links">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-strong">
                  {p.demoLabel} <ArrowUpRight size={16} aria-hidden />
                </a>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-soft">
                  <Github size={16} aria-hidden /> Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
