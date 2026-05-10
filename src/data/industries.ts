export interface Industry {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  automationUseCases: string[];
  workflowSteps: string[];
  recommendedPackage: string;
  urgencyLabel: string;
  exampleLead: string;
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    seoTitle: "AI Automation for HVAC Companies in San Diego | Kratos Intelligence",
    seoDescription: "AI chatbots, phone agents, and lead-capture automations for HVAC companies that need to capture emergency AC repair calls, quotes, and follow-ups.",
    eyebrow: "AI Automation for HVAC Companies",
    headline: "Capture AC repair leads before they call your competitor.",
    subheadline: "Kratos Intelligence builds AI chatbots, phone agents, and CRM workflows for HVAC businesses that need faster response, cleaner intake, and better follow-up.",
    painPoints: [
      "Emergency AC calls get missed after hours",
      "Quote requests are scattered across calls, forms, and texts",
      "Customers ask the same service-area and pricing questions",
      "Follow-up depends on the owner remembering every lead"
    ],
    automationUseCases: [
      "24/7 AI website chatbot for AC repair and install inquiries",
      "AI phone receptionist for missed or after-hours calls",
      "Urgency scoring for no-cooling and emergency jobs",
      "Airtable CRM pipeline for every service request",
      "SMS alerts for high-priority leads"
    ],
    workflowSteps: [
      "Customer calls or messages",
      "AI collects service type, ZIP code, urgency, and contact info",
      "Lead is scored as emergency, quote, or follow-up",
      "Owner receives SMS notification",
      "Lead is stored in CRM for tracking"
    ],
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "High urgency",
    exampleLead: "AC stopped working and house is hot",
    ctaText: "Automate HVAC Leads"
  },
  {
    slug: "electricians",
    name: "Electricians",
    seoTitle: "AI Automation for Electricians in San Diego | Kratos Intelligence",
    seoDescription: "AI lead-capture and CRM automation for electrical contractors. Automate panel upgrade quotes, emergency repair calls, and client follow-ups.",
    eyebrow: "AI Automation for Electricians",
    headline: "Stop losing electrical leads to slow response times.",
    subheadline: "We build AI systems that qualify your electrical leads instantly, score them by urgency, and route them to your team while you're on the job.",
    painPoints: [
      "Phone rings while you're in an attic or panel",
      "Emergency power outages missed during evenings",
      "Leads don't provide address or job type details",
      "Quote follow-ups take too long and leads go cold"
    ],
    automationUseCases: [
      "AI intake for panel upgrades and EV charger installs",
      "Automated appointment booking for estimates",
      "Emergency lead scoring for power outages",
      "Instant review requests after job completion",
      "Airtable CRM to track every job from lead to paid"
    ],
    workflowSteps: [
      "Customer submits EV charger inquiry",
      "AI confirms service area and panel capacity",
      "AI requests photos of the panel",
      "Estimate appointment is booked automatically",
      "Owner is notified of the new quote opportunity"
    ],
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Medium to High",
    exampleLead: "Needs 200A panel upgrade for EV charger",
    ctaText: "Automate Electrical Leads"
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    seoTitle: "AI Automation for Plumbing Companies in San Diego | Kratos Intelligence",
    seoDescription: "AI chatbots and phone agents for plumbers. Capture slab leak emergencies, water heater quotes, and drain cleaning leads 24/7.",
    eyebrow: "AI Automation for Plumbers",
    headline: "Capture every slab leak lead, even at 3 AM.",
    subheadline: "Give your plumbing business a 24/7 AI receptionist that qualifies emergencies, captures job details, and organizes your lead pipeline.",
    painPoints: [
      "Water damage emergencies missed overnight",
      "Answering service is expensive and makes mistakes",
      "Manual intake takes time away from active jobs",
      "Hard to distinguish between price shoppers and urgent jobs"
    ],
    automationUseCases: [
      "AI phone agent to intake slab leak and flood calls",
      "Emergency lead scoring based on water damage risk",
      "AI chatbot for water heater and repipe quotes",
      "Automated follow-up for unbooked plumbing leads",
      "Review generation system to build local trust"
    ],
    workflowSteps: [
      "Homeowner calls about active leak",
      "AI confirms the leak is active and requests address",
      "AI provides shut-off instructions",
      "Owner receives immediate 'Emergency' SMS alert",
      "Lead is dispatched to the tech on call"
    ],
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Critical / High",
    exampleLead: "Active pipe burst in the kitchen",
    ctaText: "Automate Plumbing Leads"
  },
  {
    slug: "roofing",
    name: "Roofing",
    seoTitle: "AI Automation for Roofing Contractors in San Diego | Kratos Intelligence",
    seoDescription: "AI lead-capture and follow-up for roofing companies. Automate roof replacement quotes, repair inquiries, and insurance claim tracking.",
    eyebrow: "AI Automation for Roofers",
    headline: "Qualify your roofing leads before the first visit.",
    subheadline: "Automate your roofing sales pipeline. Let AI collect roof age, material type, and damage details so you show up ready to close.",
    painPoints: [
      "Walking roofs all day leaves no time for sales calls",
      "Price shoppers waste time on the phone",
      "Insurance claim leads require heavy documentation",
      "Leads go cold between the estimate and the contract"
    ],
    automationUseCases: [
      "AI chatbot to collect roof age and damage photos",
      "Automated drone inspection booking flow",
      "Lead scoring for roof replacement vs small repairs",
      "Multi-step SMS follow-up for sent quotes",
      "CRM automation to track insurance claim status"
    ],
    workflowSteps: [
      "Lead visits site after storm",
      "AI collects address and roof material type",
      "AI requests photos of internal ceiling damage",
      "Lead is categorized as 'Full Replacement Opportunity'",
      "Sales rep is notified to schedule an inspection"
    ],
    recommendedPackage: "Lead Gen + Outreach Machine",
    urgencyLabel: "Medium / High",
    exampleLead: "Roof leak after recent rain, 20 year old roof",
    ctaText: "Automate Roofing Leads"
  },
  {
    slug: "garage-door",
    name: "Garage Door Companies",
    seoTitle: "AI Automation for Garage Door Repair Companies | Kratos Intelligence",
    seoDescription: "AI chatbots and phone intake for garage door repair businesses. Capture broken spring and opener repair leads 24/7.",
    eyebrow: "AI Automation for Garage Door Businesses",
    headline: "Don't let a broken spring lead go to voicemail.",
    subheadline: "Garage door repair is a speed game. Our AI intake ensures your customers get an instant response the moment their door won't open.",
    painPoints: [
      "Customers call the first person who answers",
      "Broken springs happen at night and on weekends",
      "Scattered lead info makes dispatching difficult",
      "High competition makes lead response speed critical"
    ],
    automationUseCases: [
      "AI intake for broken spring and cable emergencies",
      "Automated booking for garage door maintenance",
      "AI chatbot to qualify new door installation leads",
      "Review requests sent 1 hour after job completion",
      "Instant SMS alerts for service requests"
    ],
    workflowSteps: [
      "Customer calls: 'Car is stuck in the garage'",
      "AI identifies 'Broken Spring' as the issue",
      "AI collects address and confirms service area",
      "Lead is routed to the nearest tech",
      "Customer receives 'Tech is on the way' SMS"
    ],
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "High urgency",
    exampleLead: "Broken spring, car trapped in garage",
    ctaText: "Automate Garage Door Leads"
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    seoTitle: "AI Automation for Pest Control Companies | Kratos Intelligence",
    seoDescription: "AI lead-capture and appointment booking for pest control. Automate termite, rodent, and general pest service inquiries.",
    eyebrow: "AI Automation for Pest Control",
    headline: "Respond to pest emergencies while you're in the field.",
    subheadline: "Automate your pest control intake. Let AI handle the common questions about pricing and service areas while you focus on treatments.",
    painPoints: [
      "Missed calls mean missed recurring revenue",
      "Hard to qualify termite vs general pest leads on the fly",
      "Customers want pricing before you see the property",
      "Following up on quarterly service reminders is manual"
    ],
    automationUseCases: [
      "AI chatbot to identify pest type and service area",
      "Automated booking for initial inspections",
      "AI follow-up for quarterly service renewals",
      "SMS alerts for active termite or rodent sightings",
      "CRM integration to track customer service history"
    ],
    workflowSteps: [
      "Lead finds you on Google Maps",
      "AI asks: 'Are you seeing ants, rodents, or termites?'",
      "AI explains your initial inspection process",
      "Inspection is booked in your calendar",
      "Lead info is pushed to your pest software or CRM"
    ],
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Medium",
    exampleLead: "Rodent activity in the attic",
    ctaText: "Automate Pest Leads"
  },
  {
    slug: "pool-service",
    name: "Pool Service / Pool Repair",
    seoTitle: "AI Automation for Pool Service & Repair Companies | Kratos Intelligence",
    seoDescription: "AI lead-capture and CRM automation for pool service businesses. Automate repair quotes, equipment installs, and service inquiries.",
    eyebrow: "AI Automation for Pool Businesses",
    headline: "Automate your pool repair and service intake.",
    subheadline: "Stop spending your evenings on the phone. Our AI handles lead capture and qualifies repairs so you can stay in the backyard.",
    painPoints: [
      "Pump failures happen when you're already booked",
      "Price shoppers call for 'just a quick question'",
      "Managing service routes and repair quotes is manual",
      "Hard to track which leads actually converted to recurring"
    ],
    automationUseCases: [
      "AI chatbot for pump, heater, and filter repair leads",
      "Automated intake for new recurring service routes",
      "AI follow-up for equipment upgrade quotes",
      "Review generation system for local credibility",
      "Lead scoring for high-value heater and salt-cell jobs"
    ],
    workflowSteps: [
      "Customer messages about a green pool",
      "AI identifies the issue and requests pool type (Salt/Chlorine)",
      "AI explains your repair or cleaning process",
      "Owner receives a 'Repair Request' alert",
      "Lead is saved to Airtable for route planning"
    ],
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Medium / High",
    exampleLead: "Pool pump is making loud noise and not priming",
    ctaText: "Automate Pool Leads"
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    seoTitle: "AI Automation for Junk Removal Businesses | Kratos Intelligence",
    seoDescription: "AI lead-capture and quote automation for junk removal. Automate photo-based quotes, booking, and schedule follow-up.",
    eyebrow: "AI Automation for Junk Removal",
    headline: "Give instant junk removal quotes with AI.",
    subheadline: "Junk removal is a volume game. Use AI to collect photos, estimate loads, and book your truck before the customer calls the next guy.",
    painPoints: [
      "Pricing requests require seeing the 'junk' first",
      "Manually texting for photos takes all day",
      "Leads ghost after getting a price estimate",
      "Dispatching trucks efficiently is hard with scattered data"
    ],
    automationUseCases: [
      "AI chatbot that requests load photos and job location",
      "Automated follow-up for leads who didn't book",
      "AI phone agent for bulk pickup and estate cleanouts",
      "Instant SMS notifications for multi-truck jobs",
      "Review requests sent automatically after haul-away"
    ],
    workflowSteps: [
      "Lead visits site for a couch removal",
      "AI asks for a photo of the items",
      "AI provides your base pricing range",
      "Pickup time is scheduled via AI",
      "Lead is sent to the driver's phone"
    ],
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "High",
    exampleLead: "Garage cleanout needed before moving",
    ctaText: "Automate Junk Removal"
  },
  {
    slug: "restoration",
    name: "Restoration / Water Damage",
    seoTitle: "AI Automation for Restoration & Water Damage Companies | Kratos Intelligence",
    seoDescription: "AI emergency intake for restoration companies. Capture water, fire, and mold damage leads 24/7 with instant owner alerts.",
    eyebrow: "AI Automation for Restoration",
    headline: "Every minute counts in water damage restoration.",
    subheadline: "When a house is flooding, speed is everything. Our AI intake ensures emergency leads are qualified and routed to you in seconds.",
    painPoints: [
      "Missing an insurance job can cost $10k+",
      "Answering services are too slow for active floods",
      "Qualifying water vs mold vs fire on the fly is hard",
      "Communication between the field and the office is messy"
    ],
    automationUseCases: [
      "AI phone agent for 24/7 water and fire emergencies",
      "Urgency scoring for active leaks and standing water",
      "AI chatbot to collect insurance info and damage details",
      "Airtable CRM for tracking multi-week restoration jobs",
      "Instant SMS alerts to the entire emergency team"
    ],
    workflowSteps: [
      "Customer calls at 2 AM about a flooded basement",
      "AI identifies the high-value emergency",
      "AI instructs customer on safety and shut-offs",
      "Owner and team receive 'CRITICAL' SMS alert",
      "Lead is tracked in the CRM for insurance paperwork"
    ],
    recommendedPackage: "AI-Powered Business System",
    urgencyLabel: "Critical",
    exampleLead: "Sewer backup in finished basement",
    ctaText: "Automate Restoration Leads"
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    seoTitle: "AI Automation for Cleaning Companies in San Diego | Kratos Intelligence",
    seoDescription: "AI lead-capture and quote automation for cleaning services. Automate house cleaning, move-in/out, and commercial cleaning inquiries.",
    eyebrow: "AI Automation for Cleaning Businesses",
    headline: "Automate your cleaning quotes and booking.",
    subheadline: "Stop answering 'How much for 3 bedrooms?' Let our AI qualify your cleaning leads, provide estimates, and manage your schedule.",
    painPoints: [
      "Constant pricing questions for different home sizes",
      "Hard to qualify residential vs commercial on the phone",
      "Managing recurring schedules manually is a nightmare",
      "Reviewing move-in/out requirements is repetitive"
    ],
    automationUseCases: [
      "AI chatbot for house cleaning and move-out quotes",
      "Automated booking for first-time deep cleans",
      "AI follow-up for recurring service reminders",
      "Review generation to boost your local ranking",
      "Lead scoring for high-value commercial contracts"
    ],
    workflowSteps: [
      "Lead asks for a 'move-out' clean quote",
      "AI collects SQFT, bedroom count, and status",
      "AI provides a preliminary price estimate",
      "Lead chooses a date and time",
      "Lead info is saved to your CRM for the cleaners"
    ],
    recommendedPackage: "Trades Starter Pack",
    urgencyLabel: "Medium",
    exampleLead: "Deep clean needed for 4BR home before sale",
    ctaText: "Automate Cleaning Leads"
  }
];
