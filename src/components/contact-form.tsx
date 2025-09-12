import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    toast.success("¡Mensaje enviado correctamente! Te contactaré pronto.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Envíame un <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mensaje</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input-background border-border/50 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input-background border-border/50 focus:border-purple-400/50 focus:ring-purple-400/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto *</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-input-background border-border/50 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-input-background border-border/50 focus:border-purple-400/50 focus:ring-purple-400/20 resize-none"
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}