import { Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Tin Shed Co.</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your destination for unique upscale resale and antique treasures in Mesick, Michigan.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Visit Us</h4>
            <address className="text-primary-foreground/80 not-italic leading-relaxed">
              119 E 16 Rd<br />
              Mesick, MI 49668<br />
            </address>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <a 
              href="https://www.facebook.com/profile.php?id=100084327849862" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
              Follow us on Facebook
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> for antique lovers
          </p>
        </div>
      </div>
    </footer>
  );
}