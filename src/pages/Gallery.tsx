import { Layout } from "@/components/layout/Layout";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

// Placeholder gallery items (to be replaced with actual images)
const galleryItems = [
  { id: 1, category: "Dance", year: "2025" },
  { id: 2, category: "Concert", year: "2025" },
  { id: 3, category: "Cultural", year: "2025" },
  { id: 4, category: "Sports", year: "2024" },
  { id: 5, category: "Dance", year: "2024" },
  { id: 6, category: "Concert", year: "2024" },
  { id: 7, category: "Cultural", year: "2024" },
  { id: 8, category: "Sports", year: "2023" },
  { id: 9, category: "Dance", year: "2023" },
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8 relative overflow-hidden thunder-bg">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
                Memories
              </p>
              <h1 className="font-samarkan text-5xl md:text-6xl neon-yellow mb-4">
                GALLERY
              </h1>
              <p className="text-muted-foreground text-lg">
                Relive the moments from previous editions of AAVISHKAR
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Slideshow */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="relative max-w-5xl mx-auto">
              {/* Main Slide */}
              <div className="relative aspect-video rounded-2xl overflow-hidden neon-border-yellow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="text-primary/50 mx-auto mb-4" size={80} />
                    <p className="text-foreground text-xl font-semibold">{galleryItems[currentSlide].category}</p>
                    <p className="text-muted-foreground">{galleryItems[currentSlide].year}</p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-card text-sm text-foreground">
                  {currentSlide + 1} / {galleryItems.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentSlide 
                        ? 'ring-2 ring-primary scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                      <Camera className="text-primary/30" size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-samarkan text-3xl neon-blue text-center mb-8">All Memories</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <ScrollAnimation key={item.id} delay={index * 50}>
                <div
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                    <Camera className="text-primary/30" size={32} />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-foreground font-medium">{item.category}</p>
                      <p className="text-muted-foreground text-sm">{item.year}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <ScrollAnimation>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card neon-border-yellow">
                <Camera className="text-primary" size={20} />
                <span className="text-foreground">
                  More photos coming soon after AAVISHKAR 2026!
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center neon-border-blue">
            <div className="text-center">
              <Camera className="text-primary/50 mx-auto mb-4" size={64} />
              <p className="text-muted-foreground">Image placeholder</p>
              <p className="text-sm text-muted-foreground/60 mt-2">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
