import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    title: "Desarrollador Fullstack MERN",
    institution: "Launch-X Latam / Microsoft",
    period: "Diciembre 2022 - Enero 2023",
    location: "Remoto, Chile",
    type: "Certificación"
  },
  {
    title: "Programación Fullstack MERN",
    institution: "Udemy",
    period: "2022 - Presente",
    location: "Remoto, Chile",
    type: "Cursos"
  },
  {
    title: "Ingeniería en Construcción",
    institution: "IP Virginio Gómez",
    period: "2008 - 2013",
    location: "Concepción, Chile",
    type: "Título Profesional"
  }
];

export function Education() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Mi <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Formación</span>
          </h2>
        </motion.div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:bg-card/80 hover:border-border hover:shadow-lg hover:shadow-purple-400/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400/20 to-cyan-400/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-lg">{edu.title}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20">
                        {edu.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
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