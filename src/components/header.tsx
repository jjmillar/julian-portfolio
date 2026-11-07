import { ThemeToggle } from "./theme-toggle";
import { profile } from "../data";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#inicio" className="wordmark">
          {profile.name}
        </a>
        <nav aria-label="Secciones" className="site-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
