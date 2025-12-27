import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import mirrorImg from "@/assets/product-mirror.jpg";
import vaseImg from "@/assets/product-vase.jpg";
import candlestickImg from "@/assets/product-candlestick.jpg";
import tableImg from "@/assets/product-table.jpg";
import chandelierImg from "@/assets/product-chandelier.jpg";
import pillowImg from "@/assets/product-pillow.jpg";

const products = [
  {
    id: 1,
    name: "Ornate Gilt Mirror",
    price: 485,
    era: "1920s",
    image: mirrorImg,
    category: "Decor",
  },
  {
    id: 2,
    name: "Terracotta Amphora Vase",
    price: 165,
    era: "1940s",
    image: vaseImg,
    category: "Decor",
  },
  {
    id: 3,
    name: "Brass Candlestick Pair",
    price: 220,
    era: "1890s",
    image: candlestickImg,
    category: "Decor",
  },
  {
    id: 4,
    name: "Carved Oak Side Table",
    price: 695,
    era: "1880s",
    image: tableImg,
    category: "Furniture",
  },
  {
    id: 5,
    name: "Empire Crystal Chandelier",
    price: 1250,
    era: "1910s",
    image: chandelierImg,
    category: "Lighting",
  },
  {
    id: 6,
    name: "Embroidered Floral Pillow",
    price: 85,
    era: "1950s",
    image: pillowImg,
    category: "Textiles",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              New Arrivals
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Featured Treasures
            </h2>
          </div>
          <Button variant="vintage-outline" className="self-start md:self-auto">
            View All Products
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-card mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors shadow-soft">
                    <Heart className="h-4 w-4 text-foreground" />
                  </button>
                  <button className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-soft">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>

                {/* Era Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {product.era}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {product.category}
                </span>
                <h3 className="font-display text-xl text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-medium text-foreground">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
