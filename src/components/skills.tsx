import { motion } from "motion/react";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Server, 
  Palette, 
  Globe,
  Layers,
  Zap
} from "lucide-react";

const skills = [
  { icon: Code2, name: "React.js", color: "from-cyan-400 to-cyan-600" },
  { icon: Zap, name: "Next.js", color: "from-purple-400 to-purple-600" },
  { icon: Code2, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { icon: Layers, name: "HTML5", color: "from-orange-400 to-orange-600" },
  { icon: Palette, name: "CSS3/SASS", color: "from-blue-400 to-blue-600" },
  { icon: Server, name: "Node.js", color: "from-green-400 to-green-600" },
  { icon: Database, name: "MongoDB", color: "from-emerald-400 to-emerald-600" },
  { icon: Database, name: "MySQL", color: "from-indigo-400 to-indigo-600" },
  { icon: Globe, name: "Express.js", color: "from-pink-400 to-pink-600" },
  { icon: Smartphone, name: "Responsive", color: "from-teal-400 to-teal-600" }
];

export function Skills() {
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
            Mis <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center transition-all duration-300 group-hover:bg-card/80 group-hover:border-border group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} p-3 flex items-center justify-center`}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-medium text-sm group-hover:text-foreground transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}