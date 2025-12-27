import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Patina & Co. family!", {
        description: "You'll receive our latest finds and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vintage-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vintage-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Join Our Community
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Be the First to Know
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to receive updates on new arrivals, exclusive previews, 
            and curated collections delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-vintage-gold"
              required
            />
            <Button variant="vintage-gold" type="submit" className="shrink-0">
              Subscribe
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
