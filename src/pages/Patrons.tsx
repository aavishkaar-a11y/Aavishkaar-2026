import { Layout } from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

const patrons = [
  {
    name: "Col. Prof. Vel. Dr. R. Rangarajan",
    title: "Founder President and Chairman",
    description: "A visionary leader whose dedication and commitment have shaped the institution into a hub of excellence in education. His guidance continues to inspire the development of events like AAVISHKAAR, promoting the pursuit of talent and knowledge.",
    image: "/placeholder.svg",
  },
  {
    name: "Dr. Sakunthala Rangarajan",
    title: "Foundress President and Vice-Chairman",
    description: "A compassionate leader nurturing innovation and excellence. Her unwavering support and vision have been instrumental in fostering cultural activities and student development at the institution.",
    image: "/placeholder.svg",
  },
  {
    name: "Mrs. Rangarajan Mahalakshmi Kishore",
    title: "Chairperson and Managing Trustee",
    description: "Ensures smooth institutional functioning and student growth. Her administrative excellence and dedication to student welfare have been key to the success of major events like AAVISHKAAR.",
    image: "/placeholder.svg",
  },
  {
    name: "Prof. Dr. E. Kamalanaban",
    title: "Principal",
    description: "Driving academic excellence and cultural development. Under his dynamic leadership, the institution continues to achieve new heights in education, research, and student activities.",
    image: "/placeholder.svg",
  },
];

const organizingTeam = {
  faculty: [
    { name: "Dr. M. Gopinath", role: "Dean - Cultural Club's and Activities (CCA)", phone: "9994041130" }
  ],
  students: [
    { name: "Mr. Charan", department: "AIDS, IV year", phone: "020250252" },
    { name: "Ms. Venanshiya. P", department: "ECE, IV year", phone: "6369453279" }
  ],
};

const Patrons = () => {
  return (
    <Layout>
      {/* Hero */}
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

      {/* Faculty Coordinators */}
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
                  <h4 className="text-primary font-bold text-lg mb-2">Faculty Coordinator</h4>
                  <p className="text-foreground font-semibold">{organizingTeam.faculty[0].name}</p>
                  <p className="text-muted-foreground text-sm">{organizingTeam.faculty[0].role}</p>
                  {organizingTeam.faculty[0].phone && (
                    <p className="text-muted-foreground text-sm">{organizingTeam.faculty[0].phone}</p>
                  )}
                </div>
              </div>
            </ScrollAnimation>

            {/* Other Faculty */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {organizingTeam.faculty.slice(1).map((member, index) => (
                <ScrollAnimation key={member.name} delay={200 + index * 100}>
                  <div className="p-6 rounded-xl border-2 border-primary/30 text-center" style={{ backgroundColor: 'hsl(240 25% 15%)' }}>
                    <h4 className="text-primary font-bold text-lg mb-2">Faculty Coordinator</h4>
                    <p className="text-foreground font-semibold">{member.name}</p>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                    {member.phone && (
                      <p className="text-muted-foreground text-sm">{member.phone}</p>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Student Coordinators */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
              {organizingTeam.students.map((student, index) => (
                <ScrollAnimation key={student.name} delay={300 + index * 50}>
                  <div className="p-5 rounded-xl border-2 border-secondary/30 text-center" style={{ backgroundColor: 'hsl(240 25% 15%)' }}>
                    <h4 className="text-secondary font-bold text-sm mb-2">Student Coordinator</h4>
                    <p className="text-foreground font-semibold text-sm">{student.name}</p>
                    <p className="text-muted-foreground text-xs">{student.department}</p>
                    {student.phone && (
                      <p className="text-muted-foreground text-xs">{student.phone}</p>
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
