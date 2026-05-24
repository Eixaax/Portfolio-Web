import { Button } from "@/components/ui/button";
import Lanyard from "@/components/ui/react-bits/Lanyard";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layout, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex items-center">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      {/* Text content — left side */}
      <div className="container mx-auto px-6 relative z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 w-full lg:w-1/2 pointer-events-auto pt-20 lg:pt-0"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit text-sm font-medium">
            Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Hi, I'm Isaac.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Web Developer & Aspiring VA.
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg">
            I craft scalable web applications, automate workflows with App Script, and create stunning digital experiences using Laravel, Vue, React, and modern web technologies. Let's build something amazing together.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/25" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#cta">
                Contact Me
              </a>
            </Button>
          </div>

          {/* Features Row */}
          <div className="flex items-center gap-12 md:gap-20 pt-8 mt-4 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <Code2 className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase text-center leading-tight">Premium<br />Code</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Layout className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase text-center leading-tight">Tailored<br />Solutions</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Zap className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase text-center leading-tight">Fast &<br />Scalable</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lanyard — absolute positioned to cover full screen so it isn't cut off when dragged */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 w-full h-screen z-10 pointer-events-none"
      >
        <div className="w-full h-full pointer-events-auto">
          <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} fov={10} />
        </div>
      </motion.div>
    </section>
  );
}
