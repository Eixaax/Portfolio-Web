import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import CircularGallery from "@/components/ui/react-bits/CircularGallery";
import BorderGlow from "@/components/ui/react-bits/BorderGlow";

import audalertsImg from "@/assets/projects/Audalerts.png";
import besideImg from "@/assets/projects/BESIDE.png";
import csdDashboardImg from "@/assets/projects/CSDDASHBOARD.png";
import craveEatImg from "@/assets/projects/CraveEAt.png";
import easeHealthImg from "@/assets/projects/EASEHEALTH.png";
import taskTrackerImg from "@/assets/projects/TASKTRACKER.png";
import ecoWattImg from "@/assets/projects/eco-watt.png";
import powerhouseImg from "@/assets/projects/owerhouse.png";
import wmsuresImg from "@/assets/projects/wmsures.png";

const projects = [
  { title: "Powerhouse", image: powerhouseImg },
  { title: "WMSU Res", image: wmsuresImg },
  { title: "Eco Watt", image: ecoWattImg },
  { title: "Task Tracker", image: taskTrackerImg },
  { title: "CSD Dashboard", image: csdDashboardImg },
  { title: "Crave Eat", image: craveEatImg },
  { title: "Ease Health", image: easeHealthImg },
  { title: "AudAlerts", image: audalertsImg },
  { title: "BESIDE", image: besideImg },
];

export function Projects() {
  const galleryItems = projects.map((p) => ({ image: p.image, text: p.title }));

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 md:py-32 bg-secondary/20 w-full overflow-hidden"

    >
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A selection of my recent work. I take pride in building performant and scalable applications.
        </p>
      </div>

      {/* Interactive 3D Circular Gallery - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 w-full px-4 md:px-8"
      >
        <BorderGlow
          className="w-full h-[450px] md:h-[600px] bg-background"
          glowColor="262.1 83.3% 65%" // Matching the primary purple theme
          edgeSensitivity={30}
          borderRadius={16}
          animated={true}
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 30px Inter, sans-serif"
          />
        </BorderGlow>
      </motion.div>
    </motion.section>
  );
}
