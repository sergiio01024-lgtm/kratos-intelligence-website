export interface Industry {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryPain: string;
  revenueLeaks: string[];
  recommendedSystems: string[];
  workflowSteps: string[];
  intakeQuestions: string[];
  sprintRecommendation: string;
  recommendedPackage: string;
  urgencyLabel: string;
  exampleLead: string;
  ctaText: string;
  localSeoKeywords: string[];
  commonQuestions: { question: string; answer: string }[];
  relatedIndustries: string[];
  proofAngle: string;
  bestFirstAutomation: string;
  highValueLeadTypes: string[];
  painPoints: string[]; // Keep for compatibility if needed, but we will use revenueLeaks
  automationUseCases: string[]; // Keep for compatibility
}

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    seoTitle: "HVAC AI Intake Systems | Kratos Intelligence",
    seoDescription: "Capture every HVAC repair lead, emergency AC call, and maintenance inquiry 24/7 with Kratos AI systems built for HVAC service companies.",
    eyebrow: "AI Automation for HVAC",
    headline: "AI Intake Systems for HVAC Companies",
    subheadline: "Stop losing emergency calls to voicemail. Our AI qualifies leads and routes them while you're in the field.",
    primaryPain: "Emergency repair calls missed after hours",
    revenueLeaks: [
      "Calls missed after hours",
      "Leads not followed up within minutes",
      "No structured intake questions",
      "No urgency scoring"
    ],
    recommendedSystems: [
      "AI Phone Agent",
      "AI Chatbot System",
      "CRM / Automation Backend",
      "AI Outreach Engine"
    ],
    workflowSteps: [
      "Visitor reports AC/heating issue",
      "AI qualifies urgency, location, and unit type",
      "CRM record created instantly",
      "Booking or callback routed to dispatch",
      "Follow-up sequence starts automatically"
    ],
    intakeQuestions: [
      "What issue are you having?",
      "Is this heating, cooling, maintenance, or install?",
      "Is the system currently working?",
      "What city or ZIP code are you in?",
      "Is this urgent today?",
      "What time works best for a callback?"
    ],
    sprintRecommendation: "Start with an AI Phone Agent to capture missed emergency calls during your busiest hours.",
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "High Urgency",
    exampleLead: "AC stopped working in 90 degree weather",
    ctaText: "Automate HVAC Leads",
    localSeoKeywords: ["HVAC AI", "San Diego HVAC automation", "AI phone agent for HVAC"],
    commonQuestions: [
      {
        question: "Can the AI qualify emergency service requests?",
        answer: "Yes. It can identify 'no cooling' or 'no heat' calls and alert your team immediately."
      },
      {
        question: "Can it route leads into my CRM?",
        answer: "Yes. We connect leads directly to Airtable, GoHighLevel, or your preferred trade CRM."
      }
    ],
    relatedIndustries: ["plumbers", "electricians", "roofing", "restoration"],
    proofAngle: "Capture every emergency AC job even when your phones are off.",
    bestFirstAutomation: "AI Phone Agent & Emergency Intake",
    highValueLeadTypes: ["AC Replacement", "Emergency Repair", "Maintenance Plans"],
    painPoints: [
      "Emergency AC calls get missed after hours",
      "Quote requests are scattered and slow to respond",
      "No system to score leads by urgency"
    ],
    automationUseCases: [
      "AI Phone Agent for missed calls",
      "Website Chatbot for instant qualification",
      "CRM Lead Routing"
    ]
  },
  {
    slug: "plumbers",
    name: "Plumbing",
    seoTitle: "Plumbing AI Intake Systems | Kratos Intelligence",
    seoDescription: "Capture every leak emergency, slab leak call, and water heater quote 24/7 with Kratos AI systems built for plumbing businesses.",
    eyebrow: "AI Automation for Plumbers",
    headline: "AI Intake Systems for Plumbing Companies",
    subheadline: "Every slab leak call is a race. Win more jobs with an AI system that answers, qualifies, and alerts you in seconds.",
    primaryPain: "Leak emergencies missed overnight",
    revenueLeaks: [
      "Water damage calls missed after hours",
      "No urgency scoring for active floods",
      "Price shoppers wasting tech time",
      "No automated quote follow-up"
    ],
    recommendedSystems: [
      "AI Phone Agent",
      "AI Chatbot System",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer reports leak or water heater issue",
      "AI scores urgency and captures location",
      "Data routes to CRM and lead pipeline",
      "Emergency callback triggered for active leaks",
      "Maintenance follow-up sent for quote requests"
    ],
    intakeQuestions: [
      "What plumbing issue are you having?",
      "Is there active leaking or flooding?",
      "What fixture or area is affected?",
      "Is this residential or commercial?",
      "What city or ZIP code are you in?",
      "Do you have photos of the issue?"
    ],
    sprintRecommendation: "Build an AI Chatbot first to qualify water heater and repipe quotes while you're on site.",
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Critical",
    exampleLead: "Kitchen flooded from burst pipe",
    ctaText: "Automate Plumbing Leads",
    localSeoKeywords: ["Plumbing AI", "San Diego plumbing automation", "AI phone agent for plumbers"],
    commonQuestions: [
      {
        question: "Can the AI qualify emergency leaks?",
        answer: "Yes. It identifies active water damage and ensures those leads get prioritized over routine maintenance."
      },
      {
        question: "Can it collect photos before a quote?",
        answer: "Yes. The AI Chatbot can prompt users to upload photos of the issue for faster estimation."
      }
    ],
    relatedIndustries: ["hvac", "restoration", "electricians", "roofing"],
    proofAngle: "Prioritize high-ticket leak and replacement jobs over routine drain cleaning.",
    bestFirstAutomation: "AI Emergency Intake & Lead Scoring",
    highValueLeadTypes: ["Slab Leaks", "Water Heater Replacement", "Main Line Repipe"],
    painPoints: [
      "Active floods missed after hours",
      "Hard to distinguish emergency from routine",
      "Manual intake slows down dispatching"
    ],
    automationUseCases: [
      "AI Phone Agent for slab leaks",
      "Chatbot for water heater quotes",
      "Emergency SMS broadcasting"
    ]
  },
  {
    slug: "electricians",
    name: "Electrical",
    seoTitle: "Electrical AI Intake Systems | Kratos Intelligence",
    seoDescription: "Automate electrical panel upgrades, EV charger inquiries, and emergency power outage calls with Kratos AI systems for electricians.",
    eyebrow: "AI Automation for Electricians",
    headline: "AI Intake Systems for Electrical Contractors",
    subheadline: "Qualify panel upgrades and EV charger installs automatically. Let AI handle the intake so you can focus on the work.",
    primaryPain: "Quotes for panel upgrades take too long to process",
    revenueLeaks: [
      "High-value panel quotes go cold",
      "Emergency power outages missed after hours",
      "No safety triage for electrical issues",
      "Leads not providing property type or power details"
    ],
    recommendedSystems: [
      "AI Website System",
      "AI Chatbot System",
      "CRM / Automation Backend",
      "AI Outreach Engine"
    ],
    workflowSteps: [
      "Customer requests electrical project help",
      "AI identifies job type, property, and safety risk",
      "CRM updated with load and panel details",
      "Quote or site visit workflow updated",
      "Safety instructions sent for hazard calls"
    ],
    intakeQuestions: [
      "What electrical issue or project do you need help with?",
      "Is this an emergency or safety concern?",
      "Is power out in part or all of the property?",
      "Are you requesting repair, install, upgrade, or inspection?",
      "Is this residential or commercial?",
      "When would you like service?"
    ],
    sprintRecommendation: "Deploy an AI Website System to capture detailed panel upgrade and EV charger install leads.",
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Safety Warning",
    exampleLead: "Needs 200A panel upgrade for new EV charger",
    ctaText: "Automate Electrical Leads",
    localSeoKeywords: ["Electrical AI", "San Diego electrician automation", "AI for panel upgrades"],
    commonQuestions: [
      {
        question: "Can it qualify EV charger leads?",
        answer: "Yes. It can ask about panel capacity, charger type, and location to ensure the lead is qualified."
      },
      {
        question: "Can it handle after-hours safety calls?",
        answer: "Yes. It can identify hazards and route them to your emergency on-call team."
      }
    ],
    relatedIndustries: ["hvac", "plumbers", "garage-door", "roofing"],
    proofAngle: "Qualify high-ticket panel and rewiring projects while you're on a job site.",
    bestFirstAutomation: "AI Website & Project Intake",
    highValueLeadTypes: ["Panel Upgrades", "EV Charger Installs", "Commercial Lighting"],
    painPoints: [
      "Missed calls while in attics or panels",
      "Hard to qualify job scope over the phone",
      "No automated safety screening"
    ],
    automationUseCases: [
      "Project Intake Chatbot",
      "Safety triage phone agent",
      "Automated follow-up for quotes"
    ]
  },
  {
    slug: "roofing",
    name: "Roofing",
    seoTitle: "Roofing AI Lead Systems | Kratos Intelligence",
    seoDescription: "Capture storm damage leads, roof replacement quotes, and inspection requests 24/7 with Kratos AI systems built for roofers.",
    eyebrow: "AI Automation for Roofers",
    headline: "AI Lead Systems for Roofing Companies",
    subheadline: "Capture every storm damage inquiry. Let AI collect the details and photos so you can show up ready to close the replacement.",
    primaryPain: "Storm damage leads missed during peak volume",
    revenueLeaks: [
      "Leads missed after storms",
      "No photo capture before the site visit",
      "No automated follow-up for estimates",
      "Insurance claim details not tracked"
    ],
    recommendedSystems: [
      "AI Website System",
      "AI Chatbot System",
      "AI Outreach Engine",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Homeowner reports roof issue or storm damage",
      "AI captures damage type, roof material, and photos",
      "Insurance context and location captured",
      "Inspection lead routed to sales team",
      "Follow-up sequence starts for no-shows"
    ],
    intakeQuestions: [
      "What roofing issue are you dealing with?",
      "Is this storm damage, leak, or replacement?",
      "Do you have photos of the damage?",
      "Is insurance involved in this claim?",
      "What type of roof material do you have?",
      "What city or ZIP code are you in?"
    ],
    sprintRecommendation: "Use an AI Chatbot to capture damage photos and insurance info immediately after a storm.",
    recommendedPackage: "Lead Gen + Outreach Machine",
    urgencyLabel: "Storm Priority",
    exampleLead: "Roof leak after heavy rain, need inspection",
    ctaText: "Automate Roofing Leads",
    localSeoKeywords: ["Roofing AI", "San Diego roofing automation", "AI for roofing leads"],
    commonQuestions: [
      {
        question: "Can it collect photos before a quote?",
        answer: "Yes. The AI Chatbot allows users to upload photos of their roof or interior leaks directly."
      },
      {
        question: "Does it help with insurance claims?",
        answer: "Yes. It can ask if a claim has been filed and collect initial adjuster information."
      }
    ],
    relatedIndustries: ["restoration", "garage-door", "cleaning-companies", "junk-removal"],
    proofAngle: "Respond instantly to storm damage leads before your competition can answer their phone.",
    bestFirstAutomation: "AI Storm Intake & Photo Capture",
    highValueLeadTypes: ["Full Roof Replacement", "Commercial Flat Roof", "Insurance Claims"],
    painPoints: [
      "Peak storm volume is impossible to handle manually",
      "Hard to qualify replacement vs repair over the phone",
      "Estimates go cold without follow-up"
    ],
    automationUseCases: [
      "Storm intake engine",
      "Photo upload chatbot",
      "Quote follow-up automation"
    ]
  },
  {
    slug: "garage-door",
    name: "Garage Door",
    seoTitle: "Garage Door AI Intake Systems | Kratos Intelligence",
    seoDescription: "Capture every broken spring, opener repair, and garage door install lead 24/7 with Kratos AI systems for garage door companies.",
    eyebrow: "AI Automation for Garage Door",
    headline: "AI Intake Systems for Garage Door Companies",
    subheadline: "Garage door repair is a speed game. Answer, qualify, and book broken spring calls in seconds with AI.",
    primaryPain: "Broken spring calls missed during evenings and weekends",
    revenueLeaks: [
      "Emergency calls missed after hours",
      "No urgency scoring for trapped cars",
      "No automated same-day routing",
      "No system to capture door style preferences for installs"
    ],
    recommendedSystems: [
      "AI Phone Agent",
      "AI Chatbot System",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer reports garage door issue",
      "AI identifies spring, opener, or track problem",
      "Urgency and location captured instantly",
      "Booking or callback routed to technician",
      "Status updates sent to customer"
    ],
    intakeQuestions: [
      "What garage door issue are you having?",
      "Is the door stuck open or closed?",
      "Do you think it is a spring, opener, or track issue?",
      "Is this repair or a new installation?",
      "What city or ZIP code are you in?",
      "Is same-day service needed?"
    ],
    sprintRecommendation: "Deploy an AI Phone Agent to handle 'car trapped' emergencies when your staff is unavailable.",
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Car Trapped",
    exampleLead: "Garage door spring broke, car is inside",
    ctaText: "Automate Garage Door Leads",
    localSeoKeywords: ["Garage Door AI", "San Diego garage door automation", "AI for broken springs"],
    commonQuestions: [
      {
        question: "Can it handle after-hours missed calls?",
        answer: "Yes. It answers 24/7, qualifies the emergency, and can alert you to 'car trapped' situations immediately."
      },
      {
        question: "Can it book install estimates?",
        answer: "Yes. It can capture door size and style preferences and book a measurement appointment."
      }
    ],
    relatedIndustries: ["hvac", "electricians", "roofing", "plumbers"],
    proofAngle: "Capture the customer the moment their door breaks, before they call the next company.",
    bestFirstAutomation: "AI Emergency Repair Intake",
    highValueLeadTypes: ["Broken Spring", "New Door Installation", "Commercial Repair"],
    painPoints: [
      "Speed is the only thing that matters for springs",
      "Hard to qualify residential vs commercial on the fly",
      "Missing weekend calls is missing easy revenue"
    ],
    automationUseCases: [
      "AI Receptionist for springs",
      "Install inquiry chatbot",
      "Review generation automation"
    ]
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    seoTitle: "Pest Control AI Lead Systems | Kratos Intelligence",
    seoDescription: "Automate pest control inspections, termite quotes, and recurring service inquiries with Kratos AI systems built for pest control companies.",
    eyebrow: "AI Automation for Pest Control",
    headline: "AI Lead Systems for Pest Control Companies",
    subheadline: "Stop answering pricing questions manually. Let AI qualify the pest type and book the inspection while you're in the yard.",
    primaryPain: "Pricing and service area inquiries wasting time",
    revenueLeaks: [
      "Leads missed during service hours",
      "No automated booking for inspections",
      "No recurring service follow-up",
      "Hard to qualify termite vs general pest on the fly"
    ],
    recommendedSystems: [
      "AI Chatbot System",
      "AI Outreach Engine",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer reports pest issue on website",
      "AI identifies pest type and property details",
      "Severity and recurring need captured",
      "Inspection or treatment lead routed to CRM",
      "Appointment reminder sent to customer"
    ],
    intakeQuestions: [
      "What pest issue are you dealing with?",
      "Where are you seeing the problem?",
      "Is this residential or commercial?",
      "How long has it been happening?",
      "Are you looking for one-time or recurring service?",
      "When would you like an inspection?"
    ],
    sprintRecommendation: "Build an AI Chatbot for your website to handle recurring service inquiries and inspection bookings.",
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Active Infestation",
    exampleLead: "Seeing rodents in the kitchen at night",
    ctaText: "Automate Pest Leads",
    localSeoKeywords: ["Pest Control AI", "San Diego pest automation", "AI for termite leads"],
    commonQuestions: [
      {
        question: "Can it collect photos before a quote?",
        answer: "Yes. The AI can prompt the customer to upload a photo of the pest or damage for identification."
      },
      {
        question: "Can it route leads into my CRM?",
        answer: "Yes. All leads are organized and pushed into your CRM or Airtable for easy management."
      }
    ],
    relatedIndustries: ["pool-service", "cleaning-companies", "roofing", "junk-removal"],
    proofAngle: "Turn every website visitor into a booked inspection without picking up the phone.",
    bestFirstAutomation: "AI Inspection Booking Chatbot",
    highValueLeadTypes: ["Termite Treatment", "Rodent Exclusion", "Annual Service Plans"],
    painPoints: [
      "Customers want instant answers on pest types",
      "Missed calls mean they call the next bug guy",
      "Following up on quarterly renewals is manual"
    ],
    automationUseCases: [
      "Pest ID & Booking Chatbot",
      "Renewal reminder engine",
      "Review capture automation"
    ]
  },
  {
    slug: "pool-service",
    name: "Pool Service",
    seoTitle: "Pool Service AI Intake Systems | Kratos Intelligence",
    seoDescription: "Automate pool repair quotes, equipment installs, and recurring service intake with Kratos AI systems for pool service businesses.",
    eyebrow: "AI Automation for Pool Service",
    headline: "AI Intake Systems for Pool Service Companies",
    subheadline: "Qualify pool repairs and service routes automatically. Let AI handle the intake so you can focus on the water.",
    primaryPain: "Repair inquiries and equipment quotes are manual and slow",
    revenueLeaks: [
      "Equipment repair calls missed after hours",
      "No photo capture for green pools",
      "No automated follow-up for heater/pump quotes",
      "No system to qualify service route density"
    ],
    recommendedSystems: [
      "AI Chatbot System",
      "AI Outreach Engine",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer requests pool help or repair",
      "AI identifies cleaning, repair, or equipment need",
      "Pool type and urgency captured",
      "Lead and photos routed to service team",
      "Quote follow-up starts for high-ticket repairs"
    ],
    intakeQuestions: [
      "What pool service do you need?",
      "Is this cleaning, repair, maintenance, or equipment?",
      "Is the pool green or unusable?",
      "What type of pool do you have?",
      "Are you looking for one-time or recurring service?",
      "What city or ZIP code are you in?"
    ],
    sprintRecommendation: "Use an AI Chatbot to capture equipment photos for faster pump and heater repair quotes.",
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Green Pool",
    exampleLead: "Pool pump making noise, water is turning green",
    ctaText: "Automate Pool Leads",
    localSeoKeywords: ["Pool Service AI", "San Diego pool automation", "AI for pool repairs"],
    commonQuestions: [
      {
        question: "Can it qualify emergency repair calls?",
        answer: "Yes. It can identify pump failures or heater issues and prioritize them over cleaning requests."
      },
      {
        question: "Can it route leads into my CRM?",
        answer: "Yes. We connect leads to your CRM and can even check for route density based on ZIP code."
      }
    ],
    relatedIndustries: ["pest-control", "cleaning-companies", "hvac", "restoration"],
    proofAngle: "Stop manually texting for photos of green pools and broken pumps.",
    bestFirstAutomation: "AI Repair & Quote Intake",
    highValueLeadTypes: ["Heater Replacement", "Variable Speed Pumps", "Recurring Service"],
    painPoints: [
      "Repair quotes take too much phone time",
      "Hard to qualify route density on the fly",
      "Green pool emergencies need fast response"
    ],
    automationUseCases: [
      "Equipment Quote Chatbot",
      "Route qualification engine",
      "Recurring service reminders"
    ]
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    seoTitle: "Junk Removal AI Lead Systems | Kratos Intelligence",
    seoDescription: "Automate junk removal quotes, photo-based load estimates, and booking with Kratos AI systems for junk removal companies.",
    eyebrow: "AI Automation for Junk Removal",
    headline: "AI Lead Systems for Junk Removal Companies",
    subheadline: "Get load details and photos automatically. Use AI to provide instant estimates and book your trucks.",
    primaryPain: "Manual texting for photos to provide estimates",
    revenueLeaks: [
      "Quotes delayed while waiting for photos",
      "No automated same-day booking",
      "No follow-up for abandoned estimates",
      "No urgency scoring for estate cleanouts"
    ],
    recommendedSystems: [
      "AI Chatbot System",
      "AI Website System",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer requests junk removal on website",
      "AI captures item type, volume, and photos",
      "Location and access details (stairs/curbside) captured",
      "Job estimate or booking routed to dispatch",
      "Review request sent after haul-away"
    ],
    intakeQuestions: [
      "What items need to be removed?",
      "Roughly how much junk is there?",
      "Do you have photos of the items?",
      "Is the junk inside, outside, or curbside?",
      "What city or ZIP code are you in?",
      "Do you need same-day pickup?"
    ],
    sprintRecommendation: "Build an AI Photo Chatbot to automate your estimation process and get jobs on the schedule faster.",
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Same-Day Request",
    exampleLead: "Need garage cleaned out by tomorrow morning",
    ctaText: "Automate Junk Removal",
    localSeoKeywords: ["Junk Removal AI", "San Diego junk automation", "AI for junk removal quotes"],
    commonQuestions: [
      {
        question: "Can it collect photos before a quote?",
        answer: "Yes. The AI specifically asks for photos so you can see the volume before sending a truck."
      },
      {
        question: "Can the AI handle appointment booking?",
        answer: "Yes. It can check your availability and book a arrival window for the customer."
      }
    ],
    relatedIndustries: ["cleaning-companies", "restoration", "pest-control", "roofing"],
    proofAngle: "Book more trucks by providing instant estimates based on AI-captured photos.",
    bestFirstAutomation: "AI Photo-Quote & Booking Engine",
    highValueLeadTypes: ["Full Estate Cleanout", "Commercial Site Debris", "Hoarder Cleanup"],
    painPoints: [
      "Estimating volume over the phone is a nightmare",
      "Customers ghost after the first price mention",
      "Same-day jobs are missed without instant response"
    ],
    automationUseCases: [
      "Photo-based quote chatbot",
      "Same-day booking engine",
      "Unbooked lead follow-up"
    ]
  },
  {
    slug: "restoration",
    name: "Restoration",
    seoTitle: "Restoration AI Intake Systems | Kratos Intelligence",
    seoDescription: "Capture every water damage emergency, fire restoration lead, and insurance job 24/7 with Kratos AI systems for restoration companies.",
    eyebrow: "AI Automation for Restoration",
    headline: "AI Intake Systems for Restoration Companies",
    subheadline: "When a house is flooding, every second counts. Our AI intake ensures emergency jobs are qualified and dispatched in seconds.",
    primaryPain: "Missing high-value insurance jobs after hours",
    revenueLeaks: [
      "Water damage calls missed overnight",
      "No urgency scoring for active flooding",
      "Insurance context not captured initially",
      "Slow response times losing jobs to competitors"
    ],
    recommendedSystems: [
      "AI Phone Agent",
      "AI Chatbot System",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer reports damage (water, fire, mold)",
      "AI captures severity, insurance, and photos",
      "Urgency scored and emergency alerts sent",
      "Response workflow routed to on-call team",
      "Documentation flow started for insurance"
    ],
    intakeQuestions: [
      "What type of damage occurred?",
      "Is this water, fire, smoke, or mold?",
      "Is the damage active or contained?",
      "Is insurance involved in this claim?",
      "Do you have photos of the damage?",
      "Is emergency service needed now?"
    ],
    sprintRecommendation: "Deploy an AI Phone Agent to capture 24/7 water damage emergencies with instant SMS broadcasting to your team.",
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Active Flood",
    exampleLead: "Burst pipe in attic, water coming through ceiling",
    ctaText: "Automate Restoration Leads",
    localSeoKeywords: ["Restoration AI", "San Diego restoration automation", "AI for water damage"],
    commonQuestions: [
      {
        question: "Can the AI handle emergency triage?",
        answer: "Yes. It can identify active flooding and give the customer immediate shut-off instructions while alerting you."
      },
      {
        question: "Can it collect insurance info?",
        answer: "Yes. It can capture carrier details and policy numbers to speed up the intake process."
      }
    ],
    relatedIndustries: ["plumbers", "roofing", "hvac", "junk-removal"],
    proofAngle: "Capture $10k+ insurance jobs instead of letting them go to voicemail.",
    bestFirstAutomation: "24/7 Critical Emergency Intake",
    highValueLeadTypes: ["Whole-Home Flood", "Kitchen Fire", "Commercial Water Damage"],
    painPoints: [
      "Emergency response is the only way to win insurance jobs",
      "Manual intake slows down mitigation efforts",
      "Hard to qualify water vs mold on a voicemail"
    ],
    automationUseCases: [
      "Emergency Phone Dispatcher",
      "Insurance intake chatbot",
      "Critical lead SMS broadcast"
    ]
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    seoTitle: "Cleaning Company AI Intake Systems | Kratos Intelligence",
    seoDescription: "Automate your cleaning business intake. Use Kratos AI to qualify square footage, provide instant quotes, and lock in recurring service appointments 24/7.",
    eyebrow: "AI Automation for Cleaning",
    headline: "AI Booking Systems for Cleaning Companies",
    subheadline: "Stop answering pricing questions manually. Let AI qualify property size and book cleans while you focus on the details.",
    primaryPain: "Constant repetitive pricing inquiries for different home sizes",
    revenueLeaks: [
      "Quotes missed during cleaning hours",
      "No automated same-day booking",
      "No system for recurring service follow-up",
      "Manual qualification of move-in/out requirements"
    ],
    recommendedSystems: [
      "AI Website System",
      "AI Chatbot System",
      "AI Outreach Engine",
      "CRM / Automation Backend"
    ],
    workflowSteps: [
      "Customer requests cleaning quote",
      "AI captures property type, size, and frequency",
      "Estimate or booking choosing choice provided",
      "Lead routes to CRM and scheduling workflow",
      "Recurring service reminders start automatically"
    ],
    intakeQuestions: [
      "What type of cleaning do you need?",
      "Is this residential or commercial?",
      "Is this standard, deep, or move-out cleaning?",
      "How many rooms or approximate square footage?",
      "What city or ZIP code are you in?",
      "How often do you need service?"
    ],
    sprintRecommendation: "Build a Pricing & Booking Chatbot to handle your most common 'How much for 3 bedrooms?' questions.",
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Move-Out Deadline",
    exampleLead: "Need 2000 sq ft home cleaned for sale by Friday",
    ctaText: "Automate Cleaning Leads",
    localSeoKeywords: ["Cleaning AI", "San Diego cleaning automation", "AI for cleaning quotes"],
    commonQuestions: [
      {
        question: "Can it provide instant quotes?",
        answer: "Yes. By collecting room counts and square footage, it can provide an estimated price range instantly."
      },
      {
        question: "Can it support appointment booking?",
        answer: "Yes. It can integrate with your calendar to show available slots for deep cleans or move-outs."
      }
    ],
    relatedIndustries: ["pest-control", "pool-service", "junk-removal", "hvac"],
    proofAngle: "Free up your admin time by automating routine pricing and scheduling calls.",
    bestFirstAutomation: "AI Quote & Booking Chatbot",
    highValueLeadTypes: ["Commercial Contracts", "Move-Out Deep Cleans", "Recurring Service"],
    painPoints: [
      "Pricing calls take up hours of admin time",
      "Missed inquiries mean no growth",
      "Hard to manage recurring schedules manually"
    ],
    automationUseCases: [
      "Cleaning Quote Engine",
      "Recurring service reminders",
      "Review generation automation"
    ]
  }
];
