import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonies = [
  {
    name: "Sarah Jenkins",
    role: "Local Business Owner",
    content: "Isaac built our company's landing page from scratch. It is fast, looks great on mobile, and brought us new clients immediately.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    content: "The App Script automation Isaac set up for our team saved us countless hours of manual data entry. His efficiency is incredible.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Emily Rodriguez",
    role: "Agency Director",
    content: "Working with Isaac as a VA has been a game changer. His technical skills in Laravel and Vue, combined with his AI knowledge, makes him an invaluable asset.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export function Testimonies() {
  return (
    <Section id="testimonies">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonies</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Don't just take my word for it. Here's what people I've worked with have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonies.map((testimony, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full bg-secondary/20 border-border relative">
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={40} />
              </div>
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <p className="text-lg italic mb-6 text-foreground/90 relative z-10">
                  "{testimony.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimony.avatar}
                    alt={testimony.name}
                    className="w-12 h-12 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{testimony.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimony.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
