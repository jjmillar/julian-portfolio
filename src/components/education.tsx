import { education } from "../data";

export function Education() {
  return (
    <section className="tile tile--edu reveal" aria-labelledby="formacion-title">
      <h3 id="formacion-title" className="tile__title">Formación</h3>
      <ul className="edu">
        {education.map((e) => (
          <li key={e.title}>
            <p className="edu__title">{e.title}</p>
            <p className="edu__inst">{e.institution}</p>
            <p className="meta">{e.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
