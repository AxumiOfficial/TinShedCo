import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Facebook } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Store
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Mesick, Michigan
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Our Address
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      119 E 16 Rd<br />
                      Mesick, MI 49668
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary/20 text-primary hover:bg-primary/5"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=119+E+16+Rd+Mesick+MI+49668" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Store Hours
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Visit our Facebook page for current hours and updates
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-secondary/20 text-secondary hover:bg-secondary/5"
                      asChild
                    >
                      <a 
                        href="https://www.facebook.com/profile.php?id=100084327849862" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Facebook className="w-4 h-4" />
                        Check Facebook
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="shadow-medium border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-subtle relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8!2d-85.7!3d44.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI0JzAwLjAiTiA4NcKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tin Shed Co. Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}