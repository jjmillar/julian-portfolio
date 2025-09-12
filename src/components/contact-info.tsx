import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "julianjmillar@gmail.com",
    link: "mailto:julianjmillar@gmail.com",
    color: "from-red-400 to-red-600"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@julianjmillar",
    link: "https://github.com",
    color: "from-gray-400 to-gray-600"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "julián-millar-vollaire",
    link: "https://linkedin.com/in/julián-millar-vollaire",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+569 7215 1199",
    link: "tel:+56972151199",
    color: "from-green-400 to-green-600"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Enviar mensaje",
    link: "https://wa.me/56972151199",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Los Ángeles, Chile",
    link: "#",
    color: "from-purple-400 to-purple-600"
  }
];

export function ContactInfo() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Hablemos y <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Colaboremos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Siempre estoy abierto a nuevas oportunidades y proyectos interesantes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Button
                variant="outline"
                asChild
                className="w-full h-auto p-0 border-border/50 hover:border-border hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="p-6 space-y-4 text-left w-full">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} p-3 flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {method.label}
                        </h3>
                        <p className="font-semibold truncate group-hover:text-cyan-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}