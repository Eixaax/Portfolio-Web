import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function CTA() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    setStatus("idle");
    
    // REPLACE TEMPLATE_ID WITH YOUR ACTUAL EMAILJS TEMPLATE ID
    const SERVICE_ID = "service_5j64kge";
    const TEMPLATE_ID = "template_f7cbitt";
    const PUBLIC_KEY = "-JtC18JZmYI4yEIpU";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus("success");
          form.current?.reset();
      }, (error) => {
          setStatus("error");
          console.error(error.text);
      })
      .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <Section id="cta" className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-primary/20 via-background to-purple-500/10 border border-primary/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10" />

        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your next project?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Whether you have a concrete idea or just a spark of inspiration, I'm here to help turn your vision into reality. Let's create something extraordinary.
        </p>
        
        <form 
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto flex flex-col gap-4 relative z-10 text-left"
        >
          <Input 
            type="text" 
            name="name"
            required
            placeholder="Your name" 
            className="rounded-xl bg-background/50 backdrop-blur-sm border-primary/30 h-12 px-4"
          />
          <Input 
            type="email" 
            name="email"
            required
            placeholder="Your email address" 
            className="rounded-xl bg-background/50 backdrop-blur-sm border-primary/30 h-12 px-4"
          />
          
          <textarea 
            name="message"
            required
            placeholder="Tell me about your project..."
            className="flex min-h-[120px] w-full rounded-xl border border-primary/30 bg-background/50 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
          
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className={`rounded-xl w-full font-bold transition-all ${status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : status === 'error' ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : status === "success" ? (
              "Message Sent!"
            ) : status === "error" ? (
              "Error! Try Again"
            ) : (
              <><Send className="w-4 h-4 mr-2" /> Send Message</>
            )}
          </Button>
        </form>
      </motion.div>
    </Section>
  );
}
