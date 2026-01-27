import { Layout } from "@/components/layout/Layout";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

/* 🔥 IMAGES */
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";
import img8 from "@/assets/gallery/img8.jpg";
import img9 from "@/assets/gallery/img9.jpg";
import img10 from "@/assets/gallery/img10.jpg";
import img11 from "@/assets/gallery/img11.jpg";
import img12 from "@/assets/gallery/img12.jpg";
import img13 from "@/assets/gallery/img13.jpg";
import img14 from "@/assets/gallery/img14.jpg";
import img15 from "@/assets/gallery/img15.jpg";
import img16 from "@/assets/gallery/img16.jpg";
import img17 from "@/assets/gallery/img17.jpg";
import img18 from "@/assets/gallery/img18.jpg";
import img19 from "@/assets/gallery/img19.jpg";
import img20 from "@/assets/gallery/img20.jpg";
import img21 from "@/assets/gallery/img21.jpg";
import img22 from "@/assets/gallery/img22.jpg";
import img23 from "@/assets/gallery/img23.jpg";
import img24 from "@/assets/gallery/img24.jpg";
const galleryItems = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19,
  img20, img21, img22, img23, img24
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % galleryItems.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* 🎥 BG VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/gallery-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/65 -z-10" />

        {/* ================= HERO ================= */}
        <section className="pt-28 pb-14 text-center relative z-10 px-4">
          <ScrollAnimation>
            <p className="text-secondary uppercase tracking-widest text-sm mb-2">
              Memories
            </p>
            <h1 className="font-samarkan text-4xl sm:text-5xl md:text-6xl neon-yellow mb-3">
              GALLERY
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Relive the moments of AAVISHKAR
            </p>
          </ScrollAnimation>
        </section>

        {/* ================= SLIDESHOW ================= */}
        <section className="py-10 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden neon-border-yellow">
              <img
                src={galleryItems[current]}
                className="w-full h-full object-cover"
              />

              {/* LEFT */}
              <button
                onClick={() =>
                  setCurrent(
                    (current - 1 + galleryItems.length) % galleryItems.length
                  )
                }
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 glass-card p-2 sm:p-3 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setCurrent((current + 1) % galleryItems.length)
                }
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 glass-card p-2 sm:p-3 rounded-full"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide justify-center">
              {galleryItems.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setCurrent(i)}
                  className={`h-14 w-20 sm:h-16 sm:w-24 object-cover rounded-md cursor-pointer transition ${
                    i === current
                      ? "ring-2 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= GRID ================= */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="font-samarkan text-2xl sm:text-3xl neon-blue text-center mb-8">
                All Memories
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.map((img, i) => (
                <ScrollAnimation key={i} delay={i * 30}>
                  <div
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(i)}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LIGHTBOX ================= */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4">
              <X size={28} />
            </button>
            <img
              src={galleryItems[lightbox]}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;