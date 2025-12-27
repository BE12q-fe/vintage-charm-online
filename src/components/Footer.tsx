import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="font-display text-2xl font-semibold text-foreground block mb-4">
              Patina & Co.
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Curating timeless vintage pieces for modern homes since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Furniture</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Decor</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lighting</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Textiles</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Antique Row<br />Brooklyn, NY 11201</span>
              </li>
              <li>
                <a href="tel:+12125551234" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  (212) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@patinaandco.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  hello@patinaandco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Patina & Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
