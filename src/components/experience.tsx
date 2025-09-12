import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Users } from "lucide-react";

const experiences = [
  {
    company: "JJ Studio",
    position: "CEO - Desarrollador freelance",
    location: "Los Ángeles, Chile",
    period: "Octubre 2022 - Presente",
    type: "Freelance",
    responsibilities: [
      "Diseñar interfaces de usuario",
      "Desarrollar proyectos fullstack",
      "Desplegar y controlar webs y hosting"
    ],
    color: "from-cyan-400 to-cyan-600"
  },
  {
    company: "Vialum",
    position: "Jefe de Operaciones",
    location: "Los Ángeles, Chile",
    period: "Febrero 2022 - Presente",
    type: "Tiempo Completo",
    responsibilities: [
      "Desarrollar y ejecutar planes de fabricación e instalación de productos",
      "Implementación y control de proyectos a través de metodología ágil de monday.com"
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    company: "Muramasa BJJ",
    position: "CEO - Profesor de Jiujitsu brasileño",
    location: "Los Ángeles, Chile",
    period: "Junio 2022 - Presente",
    type: "Emprendimiento",
    responsibilities: [
      "Programar, diseñar y dictar clases",
      "Implementar nuevas metodologías y conocimientos",
      "Coordinar competiciones"
    ],
    color: "from-emerald-400 to-emerald-600"
  },
  {
    company: "Varias empresas",
    position: "Oficina Técnica - Administrador de Proyectos",
    location: "Chile",
    period: "2014 - 2022",
    type: "8 años",
    responsibilities: [
      "9 años de experiencia trabajando en proyectos de construcción civil, industrial, eléctrica y estudios de propuestas",
      "Control de obras usando office",
      "Liderar equipos de trabajo"
    ],
    color: "from-orange-400 to-orange-600"
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Mi <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experiencia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trayectoria profesional y experiencia laboral
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:bg-card/80 hover:border-border hover:shadow-lg hover:shadow-cyan-400/10">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} p-3 flex items-center justify-center flex-shrink-0`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-xl group-hover:text-cyan-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Responsabilidades principales:</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground relative">
                            <span className="absolute -left-4 top-2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}