export interface EventData {
  id: string;
  title: string;
  category: "solo" | "duo" | "group";
  description: string;
  rules: string[];
  prizes: { position: string; amount: string }[];
  fee: string;
  coordinators: {
    name: string;
    regNo?: string;
    department: string;
    year: string;
    phone?: string;
  }[];
}

export const day1Events: EventData[] = [
  {
    id: "solo-dance",
    title: "Solo Dance",
    category: "solo",
    description: "Showcase your dancing prowess in any style you prefer. From classical to contemporary, hip-hop to freestyle – let your body tell your story.",
    rules: [
      "Solo participant only",
      "Maximum time: 6 minutes",
      "2 rounds: Common Round & Adaptive Tune Round",
      "Song in MP3 format, submit via pen drive + email (2 days prior)",
      "Props allowed (self-arranged)",
      "No obscene content",
      "Judges' decision is final"
    ],
    prizes: [
      { position: "1st", amount: "₹2,500" },
      { position: "2nd", amount: "₹1,500" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹236 (inclusive 18% GST)",
    coordinators: [
      { name: "Loganathan M", department: "IT", year: "IV Year", phone: "9025643513" },
      { name: "Darthi Dhanasekar", department: "AI&DS", year: "III Year", phone: "8248832605" },
      { name : "kopika Balaji", department: "ECE", year : "II Year" , phone : "9043051964"},
      { name: "Tharunya Devaraj", department: "CSE-AIML", year: "I Year", phone: "9940654212" }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    category: "solo",
    description: "Capture the essence of 'Lights and Shadows, Silence and Story'. Show us your unique perspective through the lens.",
    rules: [
      "Submit 4 photos (9:16, 3:4, 1:1 aspect ratios)",
      "Formats: JPG / JPEG / HEIC",
      "Watermark with date & time mandatory",
      "No editing / filters / AI enhancement",
      "Original photos only",
      "Judges' decision is final"
    ],
    prizes: [
      { position: "1st", amount: "₹2,500" },
      { position: "2nd", amount: "₹1,500" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹236 (inclusive 18% GST)",
    coordinators: [
      { name: "S Santhosh Kumar", department: "ECE", year: "IV Year", phone: "9384441615" },
      { name: "Sivaarthi gunasekaran", department: "IT", year: "III Year", phone: "7339025562" },
      { name: "D Varun", department: "Chemical", year: "II Year", phone: "9363010410" },
      { name: "Nishu Kumari S", department: "Biotech", year: "I Year", phone: "9940872516" }
    ]
  },
  {
    id: "haunt-hunt",
    title: "Haunt & Hunt",
    category: "solo",
    description: "Brave the spooky challenges! Navigate through darkness, solve mysterious clues, and complete tasks to win.",
    rules: [
      "Solo event",
      "No mobile phones allowed",
      "No damaging props",
      "Fastest participant wins"
    ],
    prizes: [
      { position: "1st", amount: "₹2,500" },
      { position: "2nd", amount: "₹1,500" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹236 (inclusive 18% GST)",
    coordinators: [
      { name: "Venanshiya P", department: "ECE", year: "IV Year", phone: "6369453279" },
      { name: "Krishna K", department: "Civil", year: "III Year", phone: "8124835538" },
      { name: "Deekshita K R", department: "ECE", year: "II Year", phone: "9080566376" },
      { name: "Magishwari M", department: "Biotech", year: "I Year", phone: "9344430810" }
    ]
  },
  {
    id: "connexions",
    title: "Connexions",
    category: "duo",
    description: "A logic-based puzzle event combining fun, movies, science, and pop culture. Test your knowledge and teamwork!",
    rules: [
      "Team of 2 members only",
      "Physical task → unlock buzzer",
      "10 seconds to answer after buzzing",
      "Hint reduces points",
      "Wrong answer → point deduction",
      "No mobile phones",
      "Audience can steal if no team answers"
    ],
    prizes: [
      { position: "1st", amount: "₹3,000" },
      { position: "2nd", amount: "₹2,000" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹472 (inclusive 18% GST)",
    coordinators: [
      { name: "Masthan M K", regNo: "VH12613", department: "Mechanical", year: "IV Year", phone: "9840553232"},
      { name: "Samira M", regNo: "VH13354", department: "Bio Tech", year: "III Year", phone: "9940463951" },
      { name: "Deepadharshan J", regNo: "VH14414", department: "Chemical", year: "II Year", phone: "7548842151" },
      { name: "Abhinaya Shri", regNo: "VH14829", department: "AI&DS", year: "I Year", phone: "9150965396" }
    ]
  },
  {
    id: "ipl-auction",
    title: "IPL Auction",
    category: "duo",
    description: "Build your dream cricket team! Strategize, bid, and create the ultimate IPL squad within your budget.",
    rules: [
      "Team of 2 members",
      "Fixed budget allocation",
      "Strategic bidding required",
      "Minimum squad requirements apply",
      "Judges' decision is final"
    ],
    prizes: [
      { position: "1st", amount: "₹3,000" },
      { position: "2nd", amount: "₹2,000" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹472 (inclusive 18% GST)",
    coordinators: [
      { name: "Sanjay M", department: "ECE", year: "IV", phone: "9884802322" },
      { name: "Pradeep Balaji", department: "Chem", year: "III", phone: "9176067315" },
      { name: "Kirthika V M", department: "AI&DS", year: "II", phone: "7395834352" },
      {name : "Mokshitha G", department : "CSE", year : "I", phone : "9080719418"}
    ]
  },
  {
    id: "group-dance",
    title: "Group Dance",
    category: "group",
    description: "Unite, synchronize, and mesmerize! Bring your crew and set the stage on fire with your choreography.",
    rules: [
      "Team of 6-12 members",
      "Maximum time: 8 minutes",
      "Props allowed (self-arranged)",
      "Song submission 2 days prior",
      "No obscene content",
      "Judges' decision is final"
    ],
    prizes: [
      { position: "1st", amount: "₹5,000" },
      { position: "2nd", amount: "₹3,000" },
      { position: "3rd", amount: "₹2,000" }
    ],
    fee: "₹845 (inclusive 18% GST)",
    coordinators: [
      { name: "Dhanush M", department: "AI&DS", year: "IV", phone: "7395951642" },
      { name: "vasanthan M", department: "ECE", year: "III", phone: "6379236504" },
      { name: "Dharshan S", department: "IT", year: "II", phone: "9080700592" },
      { name: "Kousalya  B", department: "MBA", year: "I", phone: "9042041684" }
    ]
  },
  {
    id: "short-film",
    title: "Short Film",
    category: "group",
    description: "Tell your story through the silver screen. Create a masterpiece that captivates, entertains, and inspires.",
    rules: [
      "Team size: Max 5 members",
      "Duration: 10–15 minutes",
      "Language: Tamil / English",
      "Format: MP4 / MOV (Min 720p)",
      "Original content only",
      "Submit via mail + pen drive"
    ],
    prizes: [
      { position: "Cinematic Excellence", amount: "₹5,000" },
      { position: "Visionary Director", amount: "₹3,000" },
      { position: "Creative Story", amount: "₹2,000" }
    ],
    fee: "₹885 (inclusive 18% GST)",
    coordinators: [
      { name: "Yogasree S", department: "IT", year: "IV Year", phone: "8778668919" },
      { name: "Bala Saminathan M", department: "AI&DS", year: "III Year", phone: "6380335438" },
      { name: "Srilekha S", department: "AI&DS", year: "II Year", phone: "9345301594" },
      { name: "Anish Adhithyan K B", department: "ECE", year: "I Year", phone: "6374277356" }
    ]
  },
  {
    id: "esports",
    title: "E-Sports (Free Fire)",
    category: "group",
    description: "Battle royale awaits! Assemble your squad and fight for glory in Esports Legacy – Free Fire tournament.",
    rules: [
      "Squad only (3–4 members)",
      "No hacks / bugs / exploits",
      "No solo or duo entries",
      "Qualifier + Final Clash Squad format",
      "Host decision is final"
    ],
    prizes: [
      { position: "1st", amount: "₹5,000" },
      { position: "2nd", amount: "₹3,000" },
      { position: "3rd", amount: "₹2,000" },
     
    ],
    fee: "₹885 (inclusive 18% GST)",
    coordinators: [
      { name: "Thanigai Raj S", department: "ECE", year: "IV Year", phone: "7604973726" },
      { name: "Lakshanika T G K ", department: "CSE", year: "III Year", phone: "7305872675" },
      { name: "Surendhar M", department: "AI&DS", year: "II Year", phone: "7305167354" },
      { name: "Navatheep sing K N", department: "CSE-AIML", year: "I Year", phone: "6381687767" }
    ]
  }
];

export const day2Events: EventData[] = [
  {
    id: "stall",
    title: "Creative Stalls",
    category: "group",
    description: "Showcase your entrepreneurial spirit! Set up a stall and engage the crowd with your creative offerings.",
    rules: [
      "Stall space allocation based on registration",
      "Own materials and setup required",
      "No harmful or illegal items",
      "Maintain cleanliness",
      "Follow safety guidelines"
    ],
    prizes: [
          { position: "1st", amount: "₹5,000" },
      { position: "2nd", amount: "₹3,000" },
      { position: "3rd", amount: "₹2,000" },
     
    ],
    fee: "₹885 (inclusive 18% GST)",
    coordinators: [
      { name: "charan B", department: "AI&DS", year: "IV", phone: "8122334200" },
      { name: "Hethesh P", department: "IT", year: "III", phone: "7904376748" },
      { name: "Kaviya sri M", department: "Chem", year: "II", phone: "9003759421" },
      { name: "Kesavan S", department: "MBA", year: "I", phone: "7358481330" }
    ]
  },
  {
    id: "ramp-walk",
    title: "CO-Rporate Walk",
    category: "group",
    description: "Walk the runway with confidence! Showcase your style in Cosplay or Corporate Walk categories.",
    rules: [
      "Cosplay: 1–2 min performance + explanation",
      "Corporate walk: 3–4 min (team)",
      "Decency mandatory",
      "Props allowed for Cosplay",
      "Judges' decision is final"
    ],
    prizes: [
     { position: "1st", amount: "₹5,000" },
      { position: "2nd", amount: "₹3,000" },
      { position: "3rd", amount: "₹2,000" },
     
    ],
    fee: "₹885 (inclusive 18% GST)",
    coordinators: [
      { name: "Arjun Hari G", department: "AI&DS", year: "IV Year", phone: "7358767625" },
      { name: "Reshmi V", department: "CSE-AIML", year: "III Year", phone: "7904750287" },
      { name: "Sathvika Shree S", department: "IT", year: "II Year", phone: "7010877900" },
      { name: "Bhavatharini A", department: "ECE", year: "I Year", phone: "9319545530" }
    ]
  }
];
