import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Projects } from "./components/projects";
import { ContactInfo } from "./components/contact-info";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}