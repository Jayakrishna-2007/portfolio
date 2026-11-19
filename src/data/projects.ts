import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "airlink",
    number: "01",
    title: "AirLink",
    subtitle: "Flight Booking Management System",
    tagline: "End-to-end flight discovery, real-time seat reservation, and intelligent customer assistance.",
    category: "Full-Stack",
    status: "In Active Development",
    statusColor: "blue",
    description: "A flight booking management application designed to streamline the flight reservation experience through a modern frontend and backend architecture.",
    overview: "AirLink is a comprehensive flight management and reservation platform engineered with high emphasis on transaction safety, seamless booking flows, and an intuitive user interface. It combines a reactive Vite + React client with a secure Node.js / Express backend.",
    problem: "Traditional flight booking systems often suffer from cluttered user interfaces, sluggish search-to-checkout flows, and rigid support channels that leave travelers frustrated during sudden rescheduling or baggage queries.",
    solution: "Engineered a streamlined search and selection pipeline with modular state architecture, test-mode payment gateway integration, and an integrated Google Gemini assistant to answer passenger queries on schedules and travel policies in real time.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Vite",
      "Tailwind CSS",
      "JWT",
      "bcryptjs",
      "Razorpay Test Mode",
      "Google Gemini API"
    ],
    contribution: [
      "Architected responsive React user interface using Tailwind CSS and Vite for lightning-fast state transitions.",
      "Developed secure RESTful backend routes in Express with JWT authentication and bcryptjs password hashing.",
      "Integrated Razorpay test sandbox to model end-to-end checkout, verification tokens, and transaction receipts.",
      "Implemented contextual travel assistance powered by Google Gemini API integration for automated schedule lookup."
    ],
    highlights: [
      "Multi-stage flight filtering by departure, pricing & cabin class",
      "State-secured JWT authentication & token refresh logic",
      "Interactive seat map with real-time selection state",
      "AI-driven assistant for instant itinerary Q&A"
    ],
    accentColor: "blue",
    mockupType: "flight"
  },
  {
    id: "vision-one-ai",
    number: "02",
    title: "Vision One AI",
    subtitle: "AI-Powered Multi-Disease Eye Screening Platform",
    tagline: "Portable diagnostic assistance focusing on early diabetic retinopathy detection & ocular health.",
    category: "Healthcare AI",
    status: "Research Prototype",
    statusColor: "coral",
    description: "A portable AI-powered eye screening concept designed to support early detection of diabetic retinopathy and explore additional eye disease screening capabilities.",
    overview: "Vision One AI addresses the critical global shortage of ophthalmologists by exploring how computer vision models can provide initial triage and early detection indicators for retinal ailments from standard fundus and optical images.",
    problem: "Diabetic retinopathy is a leading cause of preventable blindness worldwide, yet rural and underserved communities lack regular access to specialized ophthalmologists and expensive diagnostic machinery.",
    solution: "Prototyped a vision analysis workflow that pre-processes retinal fundus images, enhances microvascular contrasts, and runs feature classification to highlight lesion markers, distinguishing verified prototype capabilities from proposed multi-disease expansions.",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Convolutional Networks",
      "Healthcare AI Diagnostics",
      "Image Normalization"
    ],
    contribution: [
      "Researched ocular diagnostic indicators and curated fundus image normalization pipelines using OpenCV.",
      "Implemented contrast enhancement algorithms (CLAHE) to reveal microaneurysms and hard exudates.",
      "Designed the screening triage workflow interface to present diagnostic probability indicators clearly to clinicians.",
      "Defined validation roadmaps to differentiate initial implemented screening models from proposed multi-disease clinical trials."
    ],
    highlights: [
      "Automated CLAHE contrast enhancement for fundus scans",
      "Lesion and microaneurysm visualization overlays",
      "Clear delineation between active prototype and roadmap vision",
      "Optimized for low-bandwidth rural clinical workstations"
    ],
    accentColor: "coral",
    mockupType: "retina"
  },
  {
    id: "urbanflow-ai",
    number: "03",
    title: "UrbanFlow AI",
    subtitle: "AI-Driven Urban Mobility Platform",
    tagline: "Intelligent traffic analysis, route telemetry, and dynamic municipal transportation orchestration.",
    category: "Smart Mobility",
    status: "In Active Development",
    statusColor: "lavender",
    description: "An urban mobility solution designed to explore traffic, navigation and intelligent transportation experiences.",
    overview: "UrbanFlow AI is an intelligent transportation hub built to optimize traffic density, predict bottle-necks, and provide commuter-first telemetry using geospatial mapping tools and predictive algorithms.",
    problem: "Urban transit corridors frequently choke due to static traffic signaling, delayed incident reporting, and lack of real-time coordinate-level congestion feedback for municipal operators.",
    solution: "Developed a reactive Next.js dashboard integrated with FastAPI services, rendering dynamic map layers through Leaflet and streaming real-time transit telemetry using TomTom traffic APIs.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Leaflet",
      "TomTom APIs",
      "Machine Learning",
      "RESTful Services"
    ],
    contribution: [
      "Built responsive map layers and incident monitoring panels using Next.js and Leaflet.",
      "Constructed FastAPI data pipelines for high-throughput ingestion of coordinate updates and speed matrices.",
      "Collaborated with team members to integrate machine-learning traffic prediction models into API response payloads.",
      "Integrated TomTom traffic APIs for real-time congestion heatmaps and dynamic alternate routing."
    ],
    highlights: [
      "Interactive Leaflet tile engine with real-time congestion vector overlays",
      "Microservice architecture with asynchronous FastAPI handlers",
      "Predictive density scoring based on historical corridor time series",
      "Modular routing selector with multi-modal transport switching"
    ],
    accentColor: "lavender",
    mockupType: "traffic"
  },
  {
    id: "aureprint",
    number: "04",
    title: "AurePrint",
    subtitle: "Contactless Fingerprint Authentication Concept",
    tagline: "Touchless biometric verification utilizing standard optical cameras & image processing.",
    category: "AI & Computer Vision",
    status: "Research Prototype",
    statusColor: "blue",
    description: "An innovative authentication concept exploring computer vision and contactless fingerprint recognition for applications in workplaces, airports, banks and institutions.",
    overview: "AurePrint investigates touch-free biometric security, capturing papillary ridge patterns through standard high-resolution camera sensors to eliminate the hygiene, wear, and hardware costs of physical capacitive scanners.",
    problem: "Contact-based fingerprint readers suffer from surface wear, latent smudge contamination, hygiene concerns in high-traffic public facilities, and degraded accuracy on dry or elderly skin.",
    solution: "Designed a computer vision pipeline with Flask and OpenCV that captures finger images in unconstrained environments, segments the foreground digit, flattens perspective distortions, and extracts minutiae points.",
    technologies: [
      "Python",
      "Flask",
      "OpenCV",
      "Computer Vision",
      "Minutiae Extraction",
      "Image Binarization"
    ],
    contribution: [
      "Constructed custom image thresholding and Gabor filter kernels to highlight ridge bifurcations touch-free.",
      "Developed a lightweight Flask API endpoint to receive camera frames and return processed ridge quality scores.",
      "Implemented hand-detection region-of-interest (ROI) bounding boxes to assist users with finger alignment.",
      "Evaluated verification reliability across varying illumination angles and optical sensor resolutions."
    ],
    highlights: [
      "Zero-contact hygienic biometric capture via standard camera lens",
      "Adaptive Gabor filtering for papillary ridge contrast refinement",
      "Real-time ROI visual feedback ring for user finger guidance",
      "Fast minutiae mapping algorithm with sub-second response times"
    ],
    accentColor: "blue",
    mockupType: "biometric"
  },
  {
    id: "bytemeal",
    number: "05",
    title: "ByteMeal",
    subtitle: "AI-Powered Vegetarian Meal Planner",
    tagline: "Personalized nutrition planning and automated ingredient aggregation through intelligent workflows.",
    category: "Automation",
    status: "Ideation Stage",
    statusColor: "coral",
    description: "An AI-assisted meal planning concept that explores personalized vegetarian meal plans and automated grocery list generation.",
    overview: "ByteMeal is an early-stage ideation project examining how no-code application interfaces combined with automated webhook workflows (Make.com) and AI prompt engineering can simplify healthy vegetarian dietary choices.",
    problem: "Vegetarians and flexitarians often struggle to achieve balanced macronutrient targets while juggling hectic schedules and avoiding food waste from disorganized weekly grocery purchases.",
    solution: "Conceptualized an automated pipeline that takes personal caloric goals and culinary preferences to generate tailored 7-day plant-based menus and consolidated smart grocery shopping lists.",
    technologies: [
      "Glide",
      "Make.com",
      "AI Workflow Automation",
      "Webhook Architecture",
      "Prompt Engineering"
    ],
    contribution: [
      "Designed mobile-first UI wireframes and interactive data sheets within Glide.",
      "Mapped automation logic across Make.com webhooks to parse nutritional inputs and trigger generative models.",
      "Drafted vegetarian nutrition prompt chains to balance protein, fiber, and regional ingredient availability.",
      "Conducted feasibility studies on automated grocery vendor cart dispatch."
    ],
    highlights: [
      "Ideation-stage conceptual architecture for automated dietary workflows",
      "Caloric & macronutrient goal-matching workflow pipelines",
      "Automated consolidation of pantry staples into categorized grocery lists",
      "Rapid no-code prototyping utilizing Glide and Make.com orchestrations"
    ],
    accentColor: "coral",
    mockupType: "meal"
  }
];

