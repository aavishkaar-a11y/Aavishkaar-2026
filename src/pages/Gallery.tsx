
import { Layout } from "@/components/layout/Layout";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
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
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24,
];

/* ================= TIMELINE DATA ================= */
const timelineData = [
  {
    year: "2018",
    desc: "The beginning of AAVISHKAAR with cultural pride and student energy.",
    images: [img1, img2, img3, img4],
  },
  {
    year: "2019",
    desc: "Bigger crowds, stronger performances, unforgettable memories.",
    images: [img5, img6, img7, img8],
  },
  {
    year: "2022",
    desc: "Grand comeback after the pandemic with renewed spirit.",
    images: [img9, img10, img11, img12],
  },
  {
    year: "2024",
    desc: "Production quality, lighting and performances reached next level.",
    images: [img13, img14, img15, img16],
  },
  {
    year: "2025",
    desc: "🔥 First PRO SHOW, open ground music festival & massive crowd.",
    images: [img17, img18, img19, img20, img21, img22, img23, img24],
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* TIMELINE STATES */
  const [activeYear, setActiveYear] =
    useState<null | (typeof timelineData)[0]>(null);
  const [fullImage, setFullImage] = useState<string | null>(null);

  const lineRef = useRef<HTMLDivElement>(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

 useEffect(() => {
  const handleScroll = () => {
    if (!lineRef.current) return;

    const section = document.getElementById("timeline-section");
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight * 0.2;
    const end = rect.height - windowHeight * 0.3;

    const scrolled = Math.min(
      Math.max(start - rect.top, 0),
      end
    );

    const progress = scrolled / end;

    lineRef.current.style.height = `${progress * 100}%`;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);





  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden pt-[120px] md:pt-[140px]">



        {/* BG VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/gallery-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* ================= HERO ================= */}
        <section className="pt-16 pb-14 text-center px-4">
          <ScrollAnimation>
            <p className="text-secondary uppercase tracking-widest text-sm mb-2">
              Memories
            </p>
            <h1 className="font-samarkan text-4xl sm:text-6xl neon-yellow mb-3">
              GALLERY
            </h1>
            <p className="text-muted-foreground">
              Relive the journey of AAVISHKAAR
            </p>
          </ScrollAnimation>
        </section>

       {/* ================= PRO SHOW SLIDESHOW ================= */}
<section className="py-20 relative z-10 overflow-hidden">

  {/* TITLE */}
<div className="text-center mb-14 relative z-20">
  <ScrollAnimation>
  <h2 className="font-samarkan text-3xl sm:text-4xl neon-yellow mb-2">
    PRO SHOW MOMENTS
  </h2>
</ScrollAnimation>
<ScrollAnimation>
  <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
    Spotlight performances that lit up AAVISHKAAR ✨
  </p>
</ScrollAnimation>
  {/* glow divider */}
  <div className="mt-6 h-[2px] w-24 mx-auto bg-yellow-400/60 shadow-[0_0_12px_#facc15]" />
</div>

  {/* ================= CINEMATIC SLIDESHOW ================= */}
        
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative h-[260px] sm:h-[380px] flex items-center justify-center">
              {galleryItems.map((img, i) => {
                const offset =
                  (i - current + galleryItems.length) % galleryItems.length;

                let scale = "scale-75 opacity-0";
                let translate = "translate-x-0 z-0";

                if (offset === 0) {
                  scale = "scale-100 opacity-100";
                  translate = "translate-x-0 z-20";
                } else if (offset === 1) {
                  scale = "scale-90 opacity-60";
                  translate = "translate-x-[55%] z-10";
                } else if (offset === galleryItems.length - 1) {
                  scale = "scale-90 opacity-60";
                  translate = "-translate-x-[55%] z-10";
                }

                return (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setCurrent(i)}
                    className={`
                      absolute rounded-xl shadow-2xl cursor-pointer
                      transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                      ${scale} ${translate}
                      w-[72%] sm:w-[56%] h-full object-cover
                    `}
                  />
                );
              })}

              {/* LEFT */}
              <button
                onClick={() =>
                  setCurrent(
                    (current - 1 + galleryItems.length) %
                      galleryItems.length
                  )
                }
                className="absolute left-3 sm:left-8 z-30 glass-card p-3 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setCurrent((current + 1) % galleryItems.length)
                }
                className="absolute right-3 sm:right-8 z-30 glass-card p-3 rounded-full"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 mt-6 overflow-x-auto scrollbar-hide justify-center">
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


      {/* ================= TIMELINE ================= */}
<section id="timeline-section" className="relative py-24 px-4 z-10 overflow-hidden">
 <ScrollAnimation>
  <h2 className="font-samarkan text-3xl sm:text-4xl neon-yellow text-center mb-24">
    AAVISHKAAR JOURNEY
  </h2>
</ScrollAnimation>
  {/* LINE */}
  <div className="timeline-line-wrapper">
    <div className="timeline-line-bg" />
    <div ref={lineRef} className="timeline-line-fill" />
  </div>

  {/* TIMELINE ITEMS */}
  {/* TIMELINE ITEMS */}
<div className="relative z-10 space-y-16 sm:space-y-24 max-w-4xl mx-auto">
  {timelineData.map((item, i) => (
    <ScrollAnimation key={item.year}>
      <div
        className={`flex justify-center ${
          i % 2 === 0
            ? "md:justify-start"
            : "md:justify-end"
        } px-4`}
      >
        <div
          onClick={() => setActiveYear(item)}
          className="
            w-full
            max-w-[360px]
            md:max-w-[420px]
            bg-black/60
            p-5 sm:p-6
            rounded-xl
            border border-yellow-400/30
            hover:shadow-yellow-400/40
            cursor-pointer
            transition
          "
        >
          <h3 className="text-2xl sm:text-3xl neon-yellow font-bold">
            {item.year}
          </h3>

          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {item.desc}
          </p>

          <p className="mt-4 text-secondary text-xs sm:text-sm">
            Tap to view memories →
          </p>
        </div>
      </div>
    </ScrollAnimation>
  ))}
</div>

</section>


   {/* ================= YEAR POPUP GRID ================= */}
{activeYear && (
  <div
    className="fixed inset-0 z-[9999] bg-black/95 flex flex-col"
    style={{ paddingTop: "110px" }} // ⬅ pushes below navbar
  >

    {/* ===== POPUP HEADER ===== */}
    <div
      className="sticky top-[72px] z-50
                 flex items-center justify-between
                 px-4 sm:px-6 py-4
                 bg-black/90 backdrop-blur
                 border-b border-yellow-400/30"
    >

      {/* Back Button */}
      <button
        onClick={() => setActiveYear(null)}
        className="flex items-center gap-2
                   px-4 py-2 rounded-full
                   glass-card text-secondary text-sm sm:text-base
                   shrink-0"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Title */}
      <h3 className="flex-1 text-center
                     text-lg sm:text-2xl
                     font-bold neon-yellow">
        {activeYear.year} Memories
      </h3>

      {/* Spacer */}
      <div className="w-[72px]" />
    </div>

    {/* ===== CONTENT ===== */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
      <div
        className="
          grid grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-4 max-w-6xl mx-auto
        "
      >
        {activeYear.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setFullImage(img)}
            className="
              rounded-xl cursor-pointer
              object-cover aspect-[4/3]
              hover:scale-105 transition-transform
              shadow-lg
            "
          />
        ))}
      </div>
    </div>
  </div>
)}



{/* ================= FULL IMAGE VIEW ================= */}
{fullImage && (
  <div className="fixed inset-0 z-[10000] bg-black flex flex-col">

    {/* Header */}
    <div className="flex items-center gap-3 px-4 py-4 bg-black/80">
      <button
        onClick={() => setFullImage(null)}
        className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-secondary"
      >
        <ArrowLeft size={18} />
        Back
      </button>
    </div>

    {/* Image */}
    <div
      className="flex-1 flex items-center justify-center px-4"
      onClick={() => setFullImage(null)}
    >
      <img
        src={fullImage}
        className="max-w-full max-h-full object-contain rounded-xl"
      />
    </div>
  </div>
)}



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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 left-4 glass-card px-3 py-2 rounded-full">
              <ArrowLeft size={18} /> Back
            </button>
            <img
              src={galleryItems[lightbox]}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        )}

        <style>{`
          /* TIMELINE LINE */
.timeline-line-wrapper {
  position: absolute;
  top: 220px; /* ⬅ moved down below navbar + hero */
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: calc(100% - 220px);
  z-index: 0;
}

/* BASE LINE */
.timeline-line-bg {
  position: absolute;
  inset: 0;
  background: rgba(250, 204, 21, 0.15);
  border-radius: 10px;
}
.neon-yellow {
  text-shadow:
    0 0 10px rgba(250, 204, 21, 0.6),
    0 0 25px rgba(250, 204, 21, 0.4);
}

.slide-caption {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  color: #facc15;
}

/* ANIMATED LINE */
.timeline-line-fill {
  position: absolute;
  top: 0;              /* ⬅ start from top */
  width: 100%;
  height: 0%;
  background: linear-gradient(
    to bottom,
    #facc15,
    #fde047,
    #facc15
  );
  border-radius: 10px;
  box-shadow:
    0 0 12px rgba(250, 204, 21, 0.6),
    0 0 25px rgba(250, 204, 21, 0.4);

  transition: height 1.2s ease-out; /* ⬅ slower & smoother */
}



/* MOBILE FIX */
@media (max-width: 768px) {
  .timeline-line-wrapper {
    left: 16px;
    top: 200px;
    height: calc(100% - 200px);
    transform: none;
  }
}



        `}</style>
      </div>
    </Layout>
  );
}
