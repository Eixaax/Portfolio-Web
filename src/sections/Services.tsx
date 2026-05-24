import { useState } from "react";
import CardSwap, { Card } from '@/components/ui/react-bits/CardSwap';
import { motion, AnimatePresence } from "framer-motion";

import webDevImg from "@/assets/services/web dev.png";
import automationImg from "@/assets/services/automation.png";
import aiIntegrationImg from "@/assets/services/ai integration.png";

const services = [
  {
    title: "Web Development",
    description: "I build responsive, fast, and secure websites and landing pages tailored to your brand. Whether it's a portfolio, a corporate site, or a full custom application, I deliver high-quality code.",
    image: webDevImg,
  },
  {
    title: "App Script Automation",
    description: "I streamline your business workflows using Google App Script and automation tools. Save time by automating repetitive tasks, connecting APIs, and managing data efficiently.",
    image: automationImg,
  },
  {
    title: "AI Integration",
    description: "Passionate about AI, I explore and integrate artificial intelligence into modern tools to help you work more efficiently. From chatbots to automated data processing, AI is a game-changer.",
    image: aiIntegrationImg,
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 md:py-32 w-full overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I offer a wide range of digital services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
              >
                <div className="text-primary font-mono text-sm mb-4 tracking-wider">
                  0{activeIndex + 1} / 0{services.length}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  {services[activeIndex].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Card Swap */}
          <div className="w-full flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            <CardSwap
              cardDistance={80}
              verticalDistance={80}
              delay={5000}
              pauseOnHover={true}
              onChange={(idx) => setActiveIndex(idx)}
            >
              {services.map((service, idx) => (
                <Card key={idx} className="w-[300px] sm:w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-2xl border-white/20">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-bold">{service.title}</h4>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </motion.section>
  );
}