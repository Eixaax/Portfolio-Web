import { CardContent } from "@/components/ui/card";
import BorderGlow from "@/components/ui/react-bits/BorderGlow";
import { Database, Layout, Smartphone, Bot } from "lucide-react";
import { motion } from "framer-motion";

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const skills = [
  { name: "Frontend / Mobile", icon: Smartphone, desc: "Vue, React, React Native, HTML, CSS, JS" },
  { name: "Backend Development", icon: Database, desc: "Laravel, PHP, MySQL, MongoDB" },
  { name: "Web Applications", icon: Layout, desc: "Portfolios, Landing Pages, Custom Websites" },
  { name: "AI & Automation", icon: Bot, desc: "App Script, AI Tools, Workflow Automation" },
];

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 md:py-32 bg-secondary/20 w-full overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Hi, I’m Isaac Raddi Adjaluddin, a BSIT graduate from Western Mindanao State University and currently working as a Programmer for the City Government of Zamboanga. I specialize in web and mobile development, with experience building modern applications, automation systems, and digital solutions that improve workflows and user experience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My core stack includes Laravel, PHP, MySQL, MongoDB, React, React Native, Vue, HTML, CSS, and JavaScript. I also work with App Script automation and AI-powered tools to streamline processes and enhance productivity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
             Beyond my professional role, I offer freelance services for portfolios, landing pages, business websites, and custom web applications. I am continuously exploring emerging technologies in AI and automation, focusing on creating efficient, scalable, and user-centered solutions for modern development.
            </p>
            
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.facebook.com/eixaax/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/eixaxx/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/Eixaax" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors shadow-sm">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <BorderGlow
                  className="h-full bg-background"
                  glowColor="262.1 83.3% 65%" // Matching the primary purple theme
                  edgeSensitivity={30}
                  borderRadius={12}
                  animated={true}
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
                    </div>
                  </CardContent>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
