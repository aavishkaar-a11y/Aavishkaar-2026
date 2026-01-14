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
      { position: "1st", amount: "₹3,000" },
      { position: "2nd", amount: "₹2,000" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹400",
    coordinators: [
      { name: "Loganathan M", department: "IT", year: "IV Year", phone: "" },
      { name: "Darthi Dhanasekar", department: "AI&DS", year: "III Year", phone: "" },
      { name: "Tharunya Devaraj", department: "AIML", year: "I Year", phone: "" }
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
    fee: "₹300",
    coordinators: [
      { name: "S Santhosh Kumar", department: "ECE", year: "IV Year", phone: "" },
      { name: "Sivaarthigunasekaran", department: "IT", year: "III Year", phone: "" },
      { name: "D Varun", department: "Chemical", year: "II Year", phone: "" },
      { name: "Nishu Kumari S", department: "Biotech", year: "I Year", phone: "" }
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
      { position: "1st", amount: "₹2,000" },
      { position: "2nd", amount: "₹1,500" },
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹300",
    coordinators: [
      { name: "Addepalli Vijay Sai", department: "AI&DS", year: "IV Year", phone: "" },
      { name: "Krishna", department: "Civil", year: "III Year", phone: "" },
      { name: "Deekshita", department: "ECE", year: "II Year", phone: "" },
      { name: "Mageshwari", department: "Biotech", year: "I Year", phone: "" }
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
    fee: "₹300 per team",
    coordinators: [
      { name: "M Samira", regNo: "VH13354", department: "Bio Tech", year: "III Year", phone: "9940463951" },
      { name: "Deepadharshan J", regNo: "VH14414", department: "Chemical", year: "II Year", phone: "7548842151" },
      { name: "Abhinaya Shri", regNo: "VH14829", department: "AI&DS", year: "I Year", phone: "9150965396" },
      { name: "M K Masthan", regNo: "VH12613", department: "Mechanical", year: "IV Year", phone: "9840553232" }
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
    fee: "₹300 per team",
    coordinators: [
      { name: "TBA", department: "TBA", year: "TBA", phone: "" }
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
    fee: "₹1,000 per team",
    coordinators: [
      { name: "TBA", department: "TBA", year: "TBA", phone: "" }
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
      { position: "Cinematic Excellence", amount: "₹7,000" },
      { position: "Visionary Director", amount: "₹5,000" },
      { position: "Creative Story", amount: "₹3,000" }
    ],
    fee: "₹1,000 per team",
    coordinators: [
      { name: "Yogasree S", department: "IT", year: "IV Year", phone: "" },
      { name: "Pradeep Balaji S", department: "Chemical", year: "III Year", phone: "" },
      { name: "Srilekha S", department: "AI&DS", year: "II Year", phone: "" },
      { name: "Anish Adhithyan K B", department: "ECE", year: "I Year", phone: "" }
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
      { position: "3rd", amount: "₹1,000" }
    ],
    fee: "₹800 per squad",
    coordinators: [
      { name: "Thanigai Raj", department: "TBA", year: "IV Year", phone: "7604973726" },
      { name: "Lakshanika", department: "TBA", year: "III Year", phone: "7305872675" },
      { name: "Surendhar", department: "TBA", year: "II Year", phone: "7305167354" },
      { name: "Navatheepsing", department: "TBA", year: "I Year", phone: "6381687767" }
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
      { position: "Best Stall", amount: "₹3,000" },
      { position: "Most Creative", amount: "₹2,000" }
    ],
    fee: "₹500 per stall",
    coordinators: [
      { name: "TBA", department: "TBA", year: "TBA", phone: "" }
    ]
  },
  {
    id: "ramp-walk",
    title: "Ramp Walk",
    category: "solo",
    description: "Walk the runway with confidence! Showcase your style in Cosplay or Corporate Walk categories.",
    rules: [
      "Cosplay: 1–2 min performance + explanation",
      "Corporate walk: 3–4 min (team)",
      "Decency mandatory",
      "Props allowed for Cosplay",
      "Judges' decision is final"
    ],
    prizes: [
      { position: "Best Cosplay", amount: "₹2,000" },
      { position: "Runner-up Cosplay", amount: "₹1,500" },
      { position: "Best Corporate Walk", amount: "₹2,000" },
      { position: "Runner-up Corporate", amount: "₹1,500" }
    ],
    fee: "₹300",
    coordinators: [
      { name: "Arjun Hari G", department: "AI&DS", year: "IV Year", phone: "" },
      { name: "Reshmi V", department: "AIML", year: "III Year", phone: "" },
      { name: "Sathvika", department: "IT", year: "II Year", phone: "" },
      { name: "Bhavatharini", department: "ECE", year: "I Year", phone: "" }
    ]
  }
];
