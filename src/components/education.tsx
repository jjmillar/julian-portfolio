import { education } from "../data";

export function Education() {
  return (
    <section id="formacion" className="wrap section section--tight" aria-labelledby="formacion-title">
      <div className="section__head reveal">
        <h2 id="formacion-title" className="h2">Formación</h2>
      </div>
      <ul className="edu">
        {education.map((e) => (
          <li key={e.title} className="edu__item reveal">
            <h3 className="edu__title">{e.title}</h3>
            <p className="edu__inst">{e.institution}</p>
            <p className="meta">{e.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
