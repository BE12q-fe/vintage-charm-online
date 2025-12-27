import { motion } from "framer-motion";
import { Award, Truck, RefreshCw, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Authenticated Pieces",
    description: "Every item is verified by our expert curators for authenticity and quality.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Careful handling and delivery by our specialized antique transport team.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description: "Not quite right? Return any item within 30 days for a full refund.",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your transactions are protected with bank-level encryption.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-vintage-ivory vintage-grain">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Celebrating the Beauty of the Past
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Patina & Co. began as a passion project in a small 
                Brooklyn warehouse. What started as a personal collection has grown 
                into a curated marketplace for vintage enthusiasts worldwide.
              </p>
              <p>
                We believe that every piece tells a story. Our team travels across 
                Europe and the Americas to source unique furniture, lighting, and 
                decorative objects that bring character and warmth to modern homes.
              </p>
              <p>
                Each item in our collection is carefully authenticated, restored 
                when necessary, and presented with its complete history and provenance.
              </p>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-background rounded-lg shadow-soft"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
