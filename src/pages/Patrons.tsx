import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import founderImg from "@/assets/founder.png";
import cofounderImg from "@/assets/cofounder.png";
import chairpersonImg from "@/assets/Chairperson.jpg";
import principalImg from "@/assets/principal.jpg";
import teamImg from "@/assets/group1.jpeg";

const patrons = [
  {
    name: "Col. Prof. Vel. Dr. R. Rangarajan",
    title: "Founder President and Chairman",
    description: "A visionary leader whose dedication and commitment have shaped the institution into a hub of excellence in education. His guidance continues to inspire the development of events like AAVISHKAAR, promoting the pursuit of talent and knowledge.",
    image: founderImg,
  },
  {
    name: "Dr. Sakunthala Rangarajan",
    title: "Foundress President and Vice-Chairman",
    description: "A compassionate leader nurturing innovation and excellence. Her unwavering support and vision have been instrumental in fostering cultural activities and student development at the institution.",
    image: cofounderImg,
  },
  {
    name: "Mrs. Rangarajan Mahalakshmi Kishore",
    title: "Chairperson and Managing Trustee",
    description: "Ensures smooth institutional functioning and student growth. Her administrative excellence and dedication to student welfare have been key to the success of major events like AAVISHKAAR.",
    image: chairpersonImg,
  },
  {
    name: "Prof. Dr. E. Kamalanaban",
    title: "Principal",
    description: "Driving academic excellence and cultural development. Under his dynamic leadership, the institution continues to achieve new heights in education, research, and student activities.",
    image: principalImg,
  },
];

const organizingTeam = {
  faculty: [
    { name: "Dr. M. Gopinath", role: "Associate Dean (IIC)", phone: "9994041130" },
  ],
  students: [
    { name: "Mr. Charan", department: "AIDS, IV year", phone: "9361811963" },
    { name: "Ms. Venanshiya. P", department: "ECE, IV year", phone: "6369453279" }
  ],
};

const Patrons = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-secondary font-medium mb-2 tracking-widest uppercase text-sm">
                Our Visionaries
              </p>
              <h1 className="font-samarkan text-5xl md:text-6xl neon-yellow mb-4">
                PATRONS
              </h1>
              <p className="text-muted-foreground text-lg">
                The guiding lights behind Vel Tech High Tech Engineering College
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Patrons - Horizontal Layout */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {patrons.map((patron, index) => (
              <ScrollAnimation key={patron.name} delay={index * 100}>
                <div
                  className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl"
                  style={{ backgroundColor: 'hsl(240 25% 12%)' }}
                >
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-64 h-80 rounded-lg overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                      <img
                        src={patron.image}
                        alt={patron.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {patron.name}
                    </h3>
                    <p className="text-foreground font-semibold mb-4">
                      {patron.title}
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                      {patron.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Team */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-samarkan text-3xl md:text-4xl neon-blue mb-4">
                ORGANIZING TEAM
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Faculty Coordinator */}
            <ScrollAnimation delay={100}>
              <div className="flex justify-center">
                <div className="p-6 rounded-xl border-2 border-primary/50 text-center max-w-md w-full" style={{ backgroundColor: 'hsl(240 25% 15%)' }}>
                  <p className="text-foreground font-semibold text-lg">{organizingTeam.faculty[0].name}</p>
                  <p className="text-muted-foreground">{organizingTeam.faculty[0].role}</p>
                  {organizingTeam.faculty[0].phone && (
                    <p className="text-secondary mt-2">{organizingTeam.faculty[0].phone}</p>
                  )}
                </div>
              </div>
            </ScrollAnimation>

            {/* Group Photo Placeholder */}
            <ScrollAnimation delay={200}>
              <div className="flex justify-center">
                <div className="w-full max-w-3xl h-64 md:h-80 rounded-xl border-4 border-primary/30 overflow-hidden" style={{ backgroundColor: 'hsl(240 25% 10%)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
        src={teamImg}
        alt="Organizing Team"
        className="w-full h-full object-cover"
      />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Student Coordinators */}
            <ScrollAnimation delay={300}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-secondary">Student Coordinators</h3>
              </div>
            </ScrollAnimation>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {organizingTeam.students.map((student, index) => (
                <ScrollAnimation key={student.name} delay={350 + index * 50}>
                  <div className="p-5 rounded-xl border-2 border-secondary/30 text-center" style={{ backgroundColor: 'hsl(240 25% 15%)' }}>
                    <p className="text-foreground font-semibold text-sm">{student.name}</p>
                    <p className="text-muted-foreground text-xs">{student.department}</p>
                    {student.phone && (
                      <p className="text-muted-foreground text-xs mt-1">{student.phone}</p>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Patrons;
