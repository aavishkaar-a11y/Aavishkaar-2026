import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

import founderImg from "@/assets/founder.png";
import cofounderImg from "@/assets/cofounder.png";
import chairpersonImg from "@/assets/Chairperson.jpg";
import principalImg from "@/assets/principal.jpg";
import deanImg from "@/assets/dean-academices.jpg";
import teamImg from "@/assets/group1.jpeg";
import { useRef } from "react";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { RollerCoaster } from "lucide-react";


const patrons = [
  {
    name: "Col. Prof. Vel. Dr. R. Rangarajan",
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
    name: "Mrs. Rangarajan Mahalakshmi Kishore",
    title: "Chairperson and Managing Trustee",
    description:
      "Ensures smooth institutional functioning and student growth. Her administrative excellence and dedication to student welfare have been key to the success of major events like AAVISHKAAR.",
    image: chairpersonImg,
  },
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
    { name: "Dr. M. Gopinath", role: "Associate Dean (IIC)", phone: "9994041130" },
  ],
  students: [
    { name: "Mr. Charan. B", department: "AIDS, IV Year", phone: "8122334200", Role: "Secretory" },
    { name: "Ms. Venanshiya. P", department: "ECE, IV Year", phone: "6369453279", Role: "Joint Secretory"},
    
  ],
  ITsupport:[
    { name: "Ms. Sathvika Shree S", department: "IT, II Year", phone: "7010877900"},
    { name: "Mr. Aditiya p s", department: "CSE, II Year", phone: "9363972364"}
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
                <h1 className="font-samarkan text-3xl sm:text-5xl md:text-6xl neon-yellow mb-4">
                  PATRONS
                </h1>
                <p className="text-muted-foreground text-sm sm:text-lg">
                  The guiding lights behind Vel Tech High Tech Engineering College
                </p>
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

        {/* ================= ORGANIZING TEAM ================= */}
        <section className="py-12 sm:py-16 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollAnimation>
              <h2 className="font-samarkan text-2xl sm:text-3xl md:text-4xl neon-blue text-center mb-10">
                ORGANIZING TEAM
              </h2>
            </ScrollAnimation>

            {/* FACULTY */}
            <ScrollAnimation delay={100}>
              <div className="glass-card rounded-xl p-6 text-center max-w-md mx-auto mb-10">
                <p className="font-semibold text-lg">{organizingTeam.faculty[0].name}</p>
                <p className="text-muted-foreground">{organizingTeam.faculty[0].role}</p>
                <a
                  href={`tel:${organizingTeam.faculty[0].phone}`}
                  className="text-secondary mt-2 inline-block hover:underline"
                >
                  {organizingTeam.faculty[0].phone}
                </a>
              </div>
            </ScrollAnimation>

            {/* TEAM IMAGE */}
            <ScrollAnimation delay={200}>
              <div className="rounded-xl overflow-hidden border-4 border-primary/30 mb-10">
                <img
                  src={teamImg}
                  alt="Organizing Team"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* STUDENT LEADS */}
            <ScrollAnimation delay={300}>
              <h3 className="text-center text-secondary font-semibold mb-6">
                Club Members
              </h3>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-2 gap-6">
              {organizingTeam.students.map((student, index) => (
                <ScrollAnimation key={student.name} delay={350 + index * 50}>
                  <div className="glass-card rounded-xl p-5 text-center">
                    <p className="font-semibold">{student.name}</p>
                      <p className="neon-yellow text-xs font-medium">
          {student.Role}
        </p>
                    <p className="text-muted-foreground text-sm">
                      {student.department}
                    </p>
                    <a
                      href={`tel:${student.phone}`}
                      className="text-secondary text-sm mt-1 inline-block hover:underline"
                    >
                      {student.phone}
                    </a>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            {/* IT SUPPORT */}
<ScrollAnimation delay={400}>
  <h3 className="text-center text-secondary font-semibold mt-12 mb-6">
    IT SUPPORT TEAM
  </h3>
</ScrollAnimation>

<div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
  {organizingTeam.ITsupport.map((member, index) => (
    <ScrollAnimation key={member.name} delay={450 + index * 50}>
      <div className="glass-card rounded-xl p-5 text-center">
        <p className="font-semibold text-lg">{member.name}</p>
         <p className="text-muted-foreground text-sm">
                      {member.department}
                    </p>
        <a
          href={`tel:${member.phone}`}
          className="text-secondary text-sm mt-1 inline-block hover:underline"
        >
          {member.phone}
        </a>
      </div>
    </ScrollAnimation>
  ))}
</div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Patrons;