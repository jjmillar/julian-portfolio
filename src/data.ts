// Todo el contenido del portafolio vive aquí: para actualizar el CV basta con editar este archivo.

export const profile = {
  name: "Julián Millar",
  fullName: "Julián Jesús Millar Vollaire",
  role: "Programador web fullstack",
  location: "Los Ángeles, Chile",
  timeZone: "America/Santiago",
  email: "julianjmillar@gmail.com",
  phone: "+569 7215 1199",
  phoneHref: "tel:+56972151199",
  whatsapp: "https://wa.me/56972151199",
  linkedin: "https://linkedin.com/in/julián-millar-vollaire",
  github: "https://github.com/jjmillar",
  githubUser: "jjmillar",
  summary:
    "Diseño, desarrollo y despliego aplicaciones web de punta a punta. Vengo de nueve años gestionando proyectos de construcción: presupuestos, plazos, clientes y equipos.",
  status: "Abierto a proyectos freelance",
};

export const stack = [
  { group: "Frontend", items: ["HTML5", "CSS3", "SASS", "JavaScript", "React.js", "Next.js"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Datos", items: ["MongoDB", "PostgreSQL"] },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repo: string;
  /** URL pública. Si se omite, la tarjeta solo enlaza al código. */
  demo?: string;
  demoLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Muramasa BJJ",
    description: "Sitio de la academia de Jiujitsu brasileño: horarios, galería y reserva de clase de prueba en un toque.",
    image: "/proyecto-muramasa.webp",
    tags: ["React", "CSS3", "JavaScript"],
    repo: "https://github.com/jjmillar/muramasa-webapp",
    // muramasabjj.com no resuelve (nov 2026): agrega demo y demoLabel cuando el sitio tenga URL activa.
  },
  {
    title: "Elemental Dojo",
    description: "Diccionario interactivo de términos de Jiu-Jitsu Brasileño.",
    image: "/proyecto-elemental-dojo.webp",
    tags: ["React", "CSS3", "JavaScript"],
    repo: "https://github.com/jjmillar/glosario-ed",
    demo: "https://glosarioed.netlify.app/",
    demoLabel: "Ver sitio",
  },
  {
    title: "Estética Girardi",
    description: "Landing page para centro de estética con agenda online.",
    image: "/proyecto-girardi.webp",
    tags: ["React", "CSS3", "JavaScript"],
    repo: "https://github.com/jjmillar/react-agenda-online",
    demo: "https://esteticagirardi.com/",
    demoLabel: "Ver sitio",
  },
  {
    title: "Bot de Telegram con IA",
    description: "Asistente de la academia en Telegram: menú con material y reglamentos, y respuestas con inteligencia artificial.",
    image: "/proyecto-bot.webp",
    tags: ["Telegraf.js", "Cloudflare Workers", "Groq"],
    repo: "https://github.com/jjmillar/bot-muramasa",
    demo: "https://t.me/HelioGBot",
    demoLabel: "Probar bot",
  },
];

// from/to: año decimal para la carta Gantt (to: null = sigue en curso).
export const experience = [
  {
    company: "JJ Studio",
    from: 2022.75,
    to: null,
    role: "CEO · Desarrollador freelance",
    location: "Los Ángeles, Chile",
    period: "Oct 2022 — Presente",
    points: ["Diseñar interfaces de usuario.", "Desarrollar proyectos fullstack.", "Desplegar y controlar webs y hosting."],
  },
  {
    company: "Muramasa BJJ",
    from: 2022.42,
    to: null,
    role: "CEO · Profesor de Jiujitsu brasileño",
    location: "Los Ángeles, Chile",
    period: "Jun 2022 — Presente",
    points: ["Programar, diseñar y dictar clases.", "Implementar nuevas metodologías y conocimientos.", "Coordinar competiciones."],
  },
  {
    company: "Vialum",
    from: 2022.08,
    to: 2025.67,
    role: "Jefe de Operaciones",
    location: "Los Ángeles, Chile",
    period: "Feb 2022 — Sep 2025",
    points: [
      "Desarrollar y ejecutar planes de fabricación e instalación de productos.",
      "Implementación y control de proyectos con metodología ágil en monday.com.",
    ],
  },
  {
    company: "Varias empresas",
    from: 2014,
    to: 2022,
    role: "Oficina Técnica · Administrador de Proyectos",
    location: "Chile",
    period: "2014 — 2022",
    points: [
      "Proyectos de construcción civil, industrial, eléctrica y estudios de propuestas.",
      "Control de obras usando Office.",
      "Liderar equipos de trabajo.",
    ],
  },
];

export const education = [
  { title: "Desarrollador Fullstack MERN", institution: "Launch-X Latam / Microsoft", period: "Dic 2022 — Ene 2023" },
  { title: "Cursos de programación fullstack MERN", institution: "Udemy", period: "2022 — Presente" },
  { title: "Ingeniería en Construcción", institution: "IP Virginio Gómez, Concepción", period: "2008 — 2013" },
];
