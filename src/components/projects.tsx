import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "../data";

// Conversación de ejemplo: el menú replica los botones reales del bot.
function BotChat() {
  return (
    <div className="chat" role="img" aria-label="Ejemplo de conversación con el bot en Telegram">
      <p className="chat__msg chat__msg--me">/helio</p>
      <div className="chat__msg">
        <p>¡Hola! ¿Qué buscas hoy?</p>
        <div className="chat__menu">
          {["Material", "Apuntes", "Reglamentos", "Tienda", "Convenios", "Redes"].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
      <p className="chat__msg chat__msg--me">¿Qué es la guardia cerrada?</p>
      <p className="chat__msg">Rodeas la cintura del rival con las piernas y cruzas los tobillos: controlas la distancia desde abajo.</p>
    </div>
  );
}

function Links({ p, onImage }: { p: Project; onImage: boolean }) {
  const solid = onImage ? "btn btn--sm btn--light" : "btn btn--sm btn--primary";
  const quiet = onImage ? "btn btn--sm btn--on-image" : "btn btn--sm btn--ghost";
  return (
    <div className="project__links">
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={solid}>
          {p.demoLabel} <ArrowUpRight size={15} aria-hidden />
        </a>
      )}
      <a href={p.repo} target="_blank" rel="noopener noreferrer" className={p.demo ? quiet : solid}>
        <Github size={15} aria-hidden /> Código
      </a>
    </div>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="wrap section" aria-labelledby="proyectos-title">
      <div className="section__head reveal">
        <p className="eyebrow">Proyectos</p>
        <h2 id="proyectos-title" className="h2">Sitios en producción</h2>
        <p className="section__lead">Sitios y herramientas que diseñé, programé y mantengo.</p>
      </div>
      <div className="bento bento--projects">
        {projects.map((p, i) => {
          const isBot = p.image.includes("bot");
          return (
            <article key={p.title} className={`tile project project--${i + 1} ${isBot ? "project--plain" : ""} reveal`}>
              {isBot ? (
                <BotChat />
              ) : (
                <div className="project__shot">
                  <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="project__body">
                <ul className="tags" aria-label="Tecnologías">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <Links p={p} onImage={!isBot} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
