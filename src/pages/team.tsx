import { Layout } from "@/components/layout/Layout";

const coordinators = {
  IV: [
    { name: "LOGANATHAN M", dept: "IT" },
    { name: "VENANSHIYA P", dept: "ECE" },
    { name: "SANJAY M", dept: "ECE" },
    { name: "MASTHAN M K", dept: "MECHANICAL" },
    { name: "SANTHOSH KUMAR S", dept: "ECE" },
    { name: "DHANUSH M", dept: "AI&DS" },
    { name: "YOGASREE S", dept: "IT" },
    { name: "THANIGAI RAJ S", dept: "ECE" },
    { name: "ARJUN HARI G", dept: "AI&DS" },
    { name: "CHARAN B", dept: "AI&DS" },
  ],
  III: [
    { name: "DARTHI DHANASEKAR", dept: "AI&DS" },
    { name: "SIVAARTHI GUNASEKARAN", dept: "IT" },
    { name: "KRISHNA K", dept: "CIVIL" },
    { name: "SAMIRA M", dept: "BIOTECH" },
    { name: "VASANTHAN M", dept: "ECE" },
    { name: "BALA SAMINATHAN M", dept: "AI&DS" },
    { name: "LAKSHANIKA T G K", dept: "CSE" },
    { name: "RESHMI V", dept: "CSE(AIML)" },
    { name: "HETHESH P", dept: "IT" },
  ],
  II: [
    { name: "KOPIKA BALAJI", dept: "ECE" },
    { name: "VARUN D", dept: "CHEMICAL" },
    { name: "DEEKSHITA K R", dept: "ECE" },
    { name: "DARSHAN S", dept: "IT" },
    { name: "SRILEKHA S", dept: "AI&DS" },
    { name: "SURENDHAR M", dept: "AI&DS" },
    { name: "SATHVIKA SHREE S", dept: "IT" },
    { name: "KAVIYA SRI M", dept: "CHEMICAL" },
  ],
  I: [
    { name: "THARUNYA DEVARAJ", dept: "CSE(AIML)" },
    { name: "NISHU KUMARI S", dept: "BIOTECH" },
    { name: "ABHINAIYA SHRI M P", dept: "AI&DS" },
    { name: "MOKSHITHA G", dept: "CSE" },
    { name: "KOUSALYA B", dept: "MBA" },
    { name: "ANISH ADHITHYAN K B", dept: "ECE" },
    { name: "NAVATHEEP SING K N", dept: "CSE(AIML)" },
    { name: "BHAVATHARINI A", dept: "ECE" },
    { name: "KESAVAN S", dept: "MBA" },
  ],
};

const YearSection = ({ title, members }: any) => {
  return (
    <section className="mb-14 sm:mb-18 md:mb-20 overflow-hidden">

      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold neon-yellow mb-8 tracking-widest">
        {title} YEAR COORDINATORS
      </h2>

      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-4 sm:gap-6"
          style={{
            width: "max-content",
            animation: "scrollLeft 18s linear infinite",
          }}
        >
          {[...members, ...members].map((person, index) => (
            <div
              key={index}
              className="
                min-w-[180px]
                sm:min-w-[220px]
                md:min-w-[260px]
                p-4 sm:p-5
                rounded-xl
                text-center
                transition-all duration-300
                shadow-lg
              "
              style={{
                background: "linear-gradient(145deg, #0a0a1f, #050510)",
                border: "1px solid rgba(0,255,255,0.2)",
                boxShadow: "0 0 20px rgba(0,255,255,0.1)",
              }}
            >
              <p className="font-semibold neon-blue text-sm sm:text-base md:text-lg">
                {person.name}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                {person.dept}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Local CSS Animation */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            div[style*="scrollLeft"] {
              animation: scrollLeft 12s linear infinite !important;
            }
          }
        `}
      </style>

    </section>
  );
};

const Team = () => {
  return (
    <Layout>
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">

        <h1 className="text-center text-2xl sm:text-4xl md:text-6xl font-samarkan neon-yellow mb-12 sm:mb-14 md:mb-16 tracking-wider">
          STUDENT COORDINATORS
        </h1>

        <YearSection title="IV" members={coordinators.IV} />
        <YearSection title="III" members={coordinators.III} />
        <YearSection title="II" members={coordinators.II} />
        <YearSection title="I" members={coordinators.I} />

      </div>
    </Layout>
  );
};

export default Team;
