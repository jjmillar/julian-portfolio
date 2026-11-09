import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "../data";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

// Marca en la navegación la sección que está en pantalla.
function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

export function Header() {
  const active = useActiveSection();
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#inicio" className="wordmark">
          {profile.name}
        </a>
        <nav aria-label="Secciones" className="site-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={active === l.href ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
