import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              ¡Hola! Soy{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Julián Millar
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Desarrollador Frontend
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Bienvenido a mi portafolio. Soy un desarrollador apasionado con experiencia en React, Next.js y tecnologías modernas. 
            Me especializo en crear experiencias web elegantes y funcionales.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Los Ángeles, Chile
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              julianjmillar@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              +569 7215 1199
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}