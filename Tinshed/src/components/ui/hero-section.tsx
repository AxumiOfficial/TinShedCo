import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import heroImage from "@/assets/tin-shed-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Tin Shed Co.
        </h1>
        <p className="font-serif text-xl md:text-2xl mb-4 italic text-rustic-cream">
          Upscale Resale & Antiques
        </p>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-rustic-cream">
            Tracy's dream come true. You'll find a wide selection of decorator items and furniture for your home or cabin. 
            Tracy got the 'bug' at a young age going to auctions with her parents and is now addicted to the hunt for awesome inventory.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            asChild
          >
            <a href="#gallery">Explore Our Collection</a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <a 
              href="https://www.facebook.com/profile.php?id=100084327849862" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" />
              Visit Our Facebook
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}