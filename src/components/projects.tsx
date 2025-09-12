import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Elemental Dojo",
    description: "Sitio web para academia de artes marciales con diseño moderno y responsive",
    image: "https://image.thum.io/get/width/1200/crop/800/png/https://muramasabjj.com/",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/jjmillar/muramasa-webapp",
    demo: "https://muramasabjj.com/",
    featured: true
  },
  {
    title: "Estética Girardi",
    description: "Landing page elegante para centro de estética con reservas online",
    image: "https://image.thum.io/get/width/1200/crop/800/png/https://esteticagirardi.com/",
    tags: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/jjmillar/muramasa-webapp",
    demo: "https://esteticagirardi.com/",
    featured: false
  },
  {
    title: "Muramasa BJJ",
    description: "Plataforma web para academia de jiu-jitsu brasileño",
    image: "https://image.thum.io/get/width/1200/crop/800/png/https://muramasabjj.com/",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/jjmillar/muramasa-webapp",
    demo: "https://muramasabjj.com/",
    featured: true
  },
  {
    title: "Bot Telegram con IA",
    description: "Bot inteligente para Telegram con capacidades de IA conversacional",
    image: "https://image.thum.io/get/width/1200/crop/800/png/https://muramasabjj.com/",
    tags: ["Node.js", "Express", "OpenAI API"],
    github: "https://github.com/jjmillar/muramasa-webapp",
    demo: "https://muramasabjj.com/",
    featured: false
  }
];

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Algunos de los trabajos que he desarrollado
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${
                project.featured && index === 0
                  ? 'lg:col-span-2' 
                  : 'lg:col-span-1'
              }`}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-card/80 hover:border-border hover:shadow-lg hover:shadow-cyan-400/10 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex items-center justify-center w-10 h-10 p-0 border-border/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-md hover:shadow-cyan-400/20 transition-all duration-200"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 hover:text-cyan-400 transition-colors duration-200" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex items-center justify-center w-10 h-10 p-0 border-border/50 hover:border-purple-400/50 hover:bg-purple-400/10 hover:shadow-md hover:shadow-purple-400/20 transition-all duration-200"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 hover:text-purple-400 transition-colors duration-200" />
                      </a>
                    </Button>
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