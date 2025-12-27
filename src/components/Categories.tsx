import { motion } from "framer-motion";
import furnitureImg from "@/assets/category-furniture.jpg";
import decorImg from "@/assets/category-decor.jpg";
import lightingImg from "@/assets/category-lighting.jpg";
import textilesImg from "@/assets/category-textiles.jpg";

const categories = [
  {
    name: "Furniture",
    description: "Antique chairs, tables & cabinets",
    image: furnitureImg,
    count: 48,
  },
  {
    name: "Decor",
    description: "Vases, mirrors & decorative pieces",
    image: decorImg,
    count: 124,
  },
  {
    name: "Lighting",
    description: "Chandeliers, lamps & sconces",
    image: lightingImg,
    count: 36,
  },
  {
    name: "Textiles",
    description: "Rugs, pillows & throws",
    image: textilesImg,
    count: 67,
  },
];

const Categories = () => {
  return (
    <section id="collections" className="py-24 bg-vintage-ivory vintage-grain">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Browse by Category
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Curated Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#${category.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-1">
                  {category.count} Items
                </span>
                <h3 className="font-display text-2xl text-primary-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {category.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-vintage-gold/50 rounded-lg transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
