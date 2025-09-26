import { Card, CardContent } from "@/components/ui/card";
import storeInterior1 from "@/assets/store-interior-1.jpg";
import storeInterior2 from "@/assets/store-interior-2.jpg";
import storeExterior from "@/assets/store-exterior.jpg";

export default function GallerySection() {
  const images = [
    {
      src: storeInterior1,
      alt: "Beautiful antique furniture collection inside Tin Shed Co.",
      title: "Curated Collection"
    },
    {
      src: storeInterior2,
      alt: "Vintage home decor and furniture at Tin Shed Co.",
      title: "Unique Finds"
    },
    {
      src: storeExterior,
      alt: "Tin Shed Co. storefront in Mesick, Michigan",
      title: "Our Store"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Come and see what we have
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover unique pieces that tell a story. From rustic furniture to decorative treasures, 
            every item has been carefully selected for quality and character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 border-0"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}