import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

import founderImg from "@/assets/founder.png";
import cofounderImg from "@/assets/cofounder.png";
import chairpersonImg from "@/assets/Chairperson.jpg";
import principalImg from "@/assets/principal.jpg";
import teamImg from "@/assets/group1.jpeg";
import { useRef } from "react";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { RollerCoaster } from "lucide-react";


const patrons = [
  {
    name: "Col. Prof. Vel. Shri. Dr. R. Rangarajan",
    title: "Founder President and Chairman",
    description:
      "A visionary leader whose dedication and commitment have shaped the institution into a hub of excellence in education. His guidance continues to inspire the development of events like AAVISHKAAR, promoting the pursuit of talent and knowledge.",
    image: founderImg,
  },
  {
    name: "Dr. Sakunthala Rangarajan",
    title: "Foundress President and Vice-Chairman",
    description:
      "A compassionate leader nurturing innovation and excellence. Her unwavering support and vision have been instrumental in fostering cultural activities and student development at the institution.",
    image: cofounderImg,
  },
  {
    name: "Dr. Mrs. Rangarajan Mahalakshmi Kishore",
    title: "Chairperson and Managing Trustee",
    description:
      "Ensures smooth institutional functioning and student growth. Her administrative excellence and dedication to student welfare have been key to the success of major events like AAVISHKAAR.",
    image: chairpersonImg,
  },]
  const prince =[
  {
    name: "Prof. Dr. E. Kamalanaban",
    title: "Principal",
    description:
      "Driving academic excellence and cultural development. Under his dynamic leadership, the institution continues to achieve new heights in education, research, and student activities.",
    image: principalImg,
  },

];

const organizingTeam = {
  faculty: [
    { name: "Dr. V. R. Ravi", role: "Dean - Academics"},
    { name: "Dr. M. Gopinath", role: "Dean – Clubs & Cultural Activities (CCA)" }
  ],
  convener : [
      { name : " Dr. R. Suresh ",role : "Dean - SoMC and Dean T&P"},
      { name : " Dr. P. Vijayasarathi ",role : "Dean - IQAC"},
      { name : " Dr. J. B. Veeramalini",role : "Dean - PPT And HEAD-CHEM"},
      { name : " Dr. A. Saravana Raj ",role : "Dean - R&D"},
      { name : " Dr. M. Suresh Chinnathampy ",role : "Dean - Mentoring And HEAD-ECE "},
  ],
  hod : [
    { name: "Dr. M. Malleshwari",  role : "Head - IT" },
    { name: "Prof. Pradeep Katta",  role : "Head - S&H" },
    { name: "Dr. S. Durga Devi", role : "Head - CSE" },
    { name: "Dr. R. PalaniSamy",  role : "Head - MECH" },
    { name: "Prof. M. Manoj Kumar", role : "Head - CIVIL" },
    { name: "Dr. S. Manoj Kumar", role : "Head - CSE-AIML" },
    { name: "Dr. J. Iyyappan",  role : "Head - BioTech" },
    { name: "Prof. N. Nagarajan", role : "Head - MBA" },
    { name: "Dr. S. Sathish Kumar",  role : "Head - AI&DS" },
  ],
  students: [
    { name: "Mr. B. Charan, ", department: "AI&DS, IV Year", phone: "8122334200", Role: "Secretary," },
    { name: "Ms. P. Venanshiya,", department: "ECE, IV Year", phone: "6369453279", Role: "Joint Secretary,"},
    
  ]
  
};

const Patrons = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoScroll();

  return (

    <Layout>
      {/* 🎥 BACKGROUND VIDEO */}
      <div className="relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        >
          <source src="/videos/patrons-bg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        {/* ================= HERO ================= */}
        <section className="pt-[calc(env(safe-area-inset-top)+4rem)] sm:pt-24 pb-12 sm:pb-16 relative z-10">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-secondary uppercase tracking-widest text-xs sm:text-sm mb-2">
                  Our Visionaries
                </p>
                <h1 className="font-samarkan text-3xl sm:text-7xl md:text-8xl neon-yellow mb-4">
                  CHIEF PATRONS
                </h1>
               
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* ================= PATRONS LIST ================= */}
        <section className="py-10 sm:py-16 relative z-10">
          <div className="container mx-auto px-4">
           <div
  ref={scrollRef}
  className="space-y-10 sm:space-y-14 max-w-6xl mx-auto overflow-hidden"
>
  {patrons.map((patron, index) => (


                <ScrollAnimation key={patron.name} delay={index * 100}>
                  <div className="glass-card rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                    {/* IMAGE */}
                    <div className="w-44 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 flex-shrink-0 rounded-xl overflow-hidden border-4 border-primary/40">
                      <img
                        src={patron.image}
                        alt={patron.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                        {patron.name}
                      </h3>
                      <p className="font-semibold text-foreground mb-3">
                        {patron.title}
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                        {patron.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

<h1 className="font-samarkan text-center text-4xl sm:text-7xl md:text-8xl neon-yellow mb-4">
                PATRON
                </h1>
                    {/* ================= PATRONS LIST ================= */}
        <section className="py-10 sm:py-16 relative z-10">
          <div className="container mx-auto px-4">
           <div
  ref={scrollRef}
  className="space-y-10 sm:space-y-14 max-w-6xl mx-auto overflow-hidden"
>
  {prince.map((prince, index) => (


                <ScrollAnimation key={prince.name} delay={index * 100}>
                  <div className="glass-card rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                    {/* IMAGE */}
                    <div className="w-44 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 flex-shrink-0 rounded-xl overflow-hidden border-4 border-primary/40">
                      <img
                        src={prince.image}
                        alt={prince.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                        {prince.name}
                      </h3>
                      <p className="font-semibold text-foreground mb-3">
                        {prince.title}
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                        {prince.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

       {/* ================= ORGANIZING TEAM ================= */}
<section className="py-12 sm:py-16 relative z-10">
  <div className="container mx-auto px-4 max-w-6xl">

    {/* 🔶 GOVERNOR */}
    <ScrollAnimation>
      <h2 className="font-samarkan text-2xl sm:text-4xl neon-blue text-center mb-8">
        CONVENERS
      </h2>
    </ScrollAnimation>

    {organizingTeam.faculty.map((faculty, index) => (
      <ScrollAnimation key={faculty.name} delay={index * 100}>
        <div className="glass-card rounded-xl p-6 text-2xl text-center max-w-lg mx-auto mb-6">
          <p className="text-4sm font-semibold neon-yellow">
            {faculty.name}
          </p>
          <p className="text-white text-sm">
            {faculty.role}
          </p>
        </div>
      </ScrollAnimation>
    ))}

    {/* 🔶 CONVENORS */}
    <ScrollAnimation delay={100}>
      <h2 className="font-samarkan text-4xl sm:text-4xl neon-blue text-center mt-16 mb-8">
        CO-CONVENERS
      </h2>
    </ScrollAnimation>

    <div className="grid sm:grid-cols-2 justify-center text-xl lg:grid-cols-3 gap-6 ">
      {organizingTeam.convener.map((person, index) => (
        <ScrollAnimation key={person.name} delay={150 + index * 100}>
          <div className="glass-card rounded-xl p-5 text-xl text-center">
            <p className="font-semibold neon-yellow">
              {person.name}
            </p>
            <p className="text-white text-sm">
              {person.role}
            </p>
          </div>
        </ScrollAnimation>
      ))}
    </div>

    {/* 🔶 ORGANIZING COMMITTEE (HODs) */}
    <ScrollAnimation delay={200}>
      <h2 className="font-samarkan text-4xl sm:text-4xl neon-blue text-center mt-16 mb-8">
        ORGANIZING COMMITTEE
      </h2>
    </ScrollAnimation>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {organizingTeam.hod.map((hod, index) => (
        <ScrollAnimation key={hod.name} delay={250 + index * 80}>
          <div className="glass-card text-xl rounded-xl p-5 text-center">
            <p className="font-semibold neon-yellow">
              {hod.name}
            </p>
            <p className="text-white text-sm">
              {hod.role}
            </p>
          </div>
        </ScrollAnimation>
      ))}
    </div>

    {/* 🔶 STUDENT COORDINATORS */}
    <ScrollAnimation delay={300}>
      <h2 className="font-samarkan text-2xl sm:text-4xl neon-blue text-center mt-16 mb-8">
        STUDENT COORDINATORS
      </h2>
    </ScrollAnimation>

    <div className="grid sm:grid-cols-2 gap-6">
  {organizingTeam.students.map((student, index) => (
    <ScrollAnimation key={student.name} delay={350 + index * 80}>
      <div className="glass-card rounded-xl p-5 text-center">

        {/* Single Line: Name > Role > Department */}
        <div className="flex justify-center items-baseline gap-2 flex-wrap">

          <span className="text-yellow-400 text-xl font-bold">
            {student.name}
          </span>

          <span className="text-green-300 text-base font-semibold">
            {student.Role}
          </span>

          <span className="text-white text-sm">
            {student.department}
          </span>

        </div>

        {/* Phone Line */}
        <a
          href={`tel:${student.phone}`}
          className="block mt-2 text-lg font-semibold text-blue-400 drop-shadow-[0_0_8px_#00f0ff] hover:scale-105 transition"
        >
          {student.phone}
        </a>

      </div>
    </ScrollAnimation>
  ))}
</div>


    {/* 🔶 TEAM IMAGE */}
    <ScrollAnimation delay={400}>
      <div className="rounded-xl overflow-hidden border-4 border-primary/30 mt-12">
        <img
          src={teamImg}
          alt="Organizing Team"
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>
    </ScrollAnimation>

  </div>
</section>
      </div>
    </Layout>
  );
};

export default Patrons;