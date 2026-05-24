import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Code2 } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tighter">
          <Code2 className="w-6 h-6" />
          <span>Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#testimonies" className="hover:text-primary transition-colors">Testimonies</a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <a href="#cta">Contact Me</a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
