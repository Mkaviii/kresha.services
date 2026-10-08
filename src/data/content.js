import { Search, Bot, Share2, Megaphone, Globe, PenTool, Shirt, Stethoscope, Building2, BedDouble, Store, GraduationCap, Factory, Rocket, MapPin, IndianRupee, Languages, BarChart3, Star, BadgeCheck } from "lucide-react";

export const SITE = {
  name: "Kresha Services",
  tagline: "Grow Your Business, Digitally.",
  taglineTa: "உங்கள் வணிகம் டிஜிட்டலாக வளரட்டும்",
  phoneDisplay: "93631 00998",
  tel: "tel:+919363100998",
  email: "kreshaservices@gmail.com",
  youtube: "https://youtube.com/@KreshaServices",
  instagram: "https://instagram.com/kreshaservices",
  facebook: "https://facebook.com/kreshaservices",
  linkedin: "https://linkedin.com/company/kreshaservices",
  wa: "https://wa.me/919363100998?text=Hi%20Kresha%20Services!%20I%20want%20to%20grow%20my%20business%20online.",
  domain: "https://kreshaservices.com",
};

export const IMG = {
  hero: "/hero.jpg",
  founder: "/founder.jpg",
  chennai: "/city-chennai.jpg",
  erode: "/city-erode.jpg",
  textile: "/ind-textile.jpg",
  hotels: "/ind-hotels.jpg",
  healthcare: "/ind-health.jpg",
  realestate: "/ind-realestate.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/#services" },
  { label: "Industries", to: "/#industries" },
  { label: "Free Tools", to: "/campaign-calculator" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const FOUNDER = {
  name: "Kavitha M",
  role: "Founder & Digital Marketing Strategist",
  bio: "I'm Kavitha M, an M.Sc. Mathematics graduate and the founder of Kresha Services. With a passion for digital marketing, creativity, and continuous learning, I focus on helping businesses build a strong and impactful online presence. I believe in combining analytical thinking with creative strategies to create meaningful digital growth.",
};

export const MARQUEE_ITEMS = ["SEO", "AEO + GEO (AI Search)", "Social Media Marketing", "Google Ads", "Website Development", "Graphic Designing", "Chennai", "Erode", "Tamil Nadu", "Grow Your Business, Digitally."];

export const SERVICES = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "SEO",
    icon: Search,
    image: "/service-seo.svg",
    blurb: "Rank on Google when local customers search for what you sell. Steady, compounding leads without ad spend.",
    hero: "Be the first business your customers find on Google — in Chennai, Erode and across Tamil Nadu.",
    includes: [
      "Local keyword research in Tamil & English",
      "Google Business Profile setup & optimisation",
      "On-page SEO for every important page",
      "Local citations & directory listings",
      "Monthly content plan for your website",
      "Plain-language monthly ranking report",
    ],
    outcomes: [
      { title: "Steady free leads", desc: "Customers find you on search every day without paying per click." },
      { title: "Google Maps visibility", desc: "Show up in the local pack when someone searches near your shop or clinic." },
      { title: "Compounding growth", desc: "Rankings you build keep working for you long after the work is done." },
    ],
    meta: "SEO services in Chennai & Erode — local SEO, Google Business Profile optimisation and rankings that bring steady enquiries. Tamil + English.",
  },
  {
    slug: "aeo-geo",
    title: "AEO + GEO (AI Search)",
    short: "AEO + GEO",
    icon: Bot,
    image: "/service-aeo-geo.svg",
    blurb: "Get recommended by ChatGPT, Gemini and AI search — the new way customers discover businesses.",
    hero: "AI assistants are the new 'first page of Google'. We make sure they recommend your business.",
    includes: [
      "AI-answer optimisation for your key services",
      "Schema & structured data implementation",
      "Content structured for AI answers & citations",
      "Entity building for your brand",
      "Visibility tracking across AI assistants",
      "Quarterly AI-search visibility report",
    ],
    outcomes: [
      { title: "AI-ready presence", desc: "Be the business AI assistants suggest when customers ask." },
      { title: "Future-proof visibility", desc: "Win the next wave of search, not just today's." },
      { title: "Structured for machines", desc: "Your services, prices and areas become machine-readable." },
    ],
    meta: "AEO & GEO services — get your Chennai or Erode business recommended by ChatGPT, Gemini and AI search engines.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Social Media",
    icon: Share2,
    image: "/service-social-media.svg",
    blurb: "Scroll-stopping Tamil + English content that turns followers into walk-ins and WhatsApp enquiries.",
    hero: "Content your customers actually enjoy — and that brings them to your door.",
    includes: [
      "Channel strategy & content calendar",
      "Reels, posts & festival creatives",
      "Tamil + English copywriting",
      "Community management & DM handling",
      "WhatsApp enquiry funnel setup",
      "Monthly growth insights",
    ],
    outcomes: [
      { title: "Brand people remember", desc: "Consistent, quality content that builds trust locally." },
      { title: "Walk-ins & enquiries", desc: "Posts designed to move people to WhatsApp or your door." },
      { title: "Festival-ready", desc: "Never miss a Tamil festival or season again." },
    ],
    meta: "Social media marketing for Tamil Nadu businesses — content in Tamil & English that brings WhatsApp enquiries and walk-ins.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    short: "Google Ads",
    icon: Megaphone,
    image: "/service-google-ads.svg",
    blurb: "Leads in days, not months. Laser-targeted campaigns with full spend transparency.",
    hero: "Show up at the exact moment someone searches for what you sell — and pay only for results.",
    includes: [
      "Search, Display & Performance Max campaigns",
      "Tamil & English keyword targeting",
      "High-converting landing pages",
      "Call & WhatsApp conversion tracking",
      "Weekly bid & budget optimisation",
      "Full spend transparency, every rupee",
    ],
    outcomes: [
      { title: "Enquiries in days", desc: "The fastest way to put your business in front of buyers." },
      { title: "No wasted spend", desc: "Tight targeting and weekly optimisation of every rupee." },
      { title: "Trackable ROI", desc: "Know exactly which ad brought which lead." },
    ],
    meta: "Google Ads management in Chennai & Erode — targeted campaigns with full spend transparency and trackable leads.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Websites",
    icon: Globe,
    image: "/service-web-development.svg",
    blurb: "Fast, mobile-first websites that load in a blink and convert visitors into enquiries.",
    hero: "A website that works as hard as you do — fast, mobile-first and built to convert.",
    includes: [
      "Mobile-first design & development",
      "SEO-ready structure from day one",
      "WhatsApp & call buttons built in",
      "Google Analytics & Search Console setup",
      "Domain, hosting & email setup help",
      "Ongoing care & content updates",
    ],
    outcomes: [
      { title: "Built to convert", desc: "Every page designed to turn visitors into enquiries." },
      { title: "Loads in a blink", desc: "Fast, lightweight pages your customers on mobile data can open." },
      { title: "Yours, fully", desc: "We set up the domain, hosting and analytics in your name." },
    ],
    meta: "Website development for Chennai & Erode businesses — fast, mobile-first, SEO-ready websites with WhatsApp integration.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Designing",
    short: "Design",
    icon: PenTool,
    image: "/service-graphic-design.svg",
    blurb: "Logos, festival creatives and catalogues that make your brand look premium everywhere.",
    hero: "Design that makes a local business look world-class — online and in print.",
    includes: [
      "Logo & brand identity kits",
      "Social media creatives & templates",
      "Festival & seasonal campaigns",
      "Catalogues, brochures & flyers",
      "Packaging & label design",
      "Print-ready and web-ready files",
    ],
    outcomes: [
      { title: "Premium look", desc: "A brand that looks trustworthy at first glance." },
      { title: "Consistent everywhere", desc: "One identity across WhatsApp, Instagram, print and site." },
      { title: "Fast turnaround", desc: "Creatives delivered in days, in both languages." },
    ],
    meta: "Graphic design services — logos, festival creatives, catalogues and brand kits for businesses in Tamil Nadu.",
  },
];

export const INDUSTRIES = [
  { name: "Textile & Clothing", slug: "textile", icon: Shirt, blurb: "Saree shops, showrooms & handloom brands" },
  { name: "Retail Shops", slug: "retail", icon: Store, blurb: "Supermarkets, stores & local retail" },
  { name: "Healthcare", slug: "healthcare", icon: Stethoscope, blurb: "Clinics, hospitals & wellness" },
  { name: "Real Estate", slug: "real-estate", icon: Building2, blurb: "Builders, agents & projects" },
  { name: "Hotels & Hospitality", slug: "hotels", icon: BedDouble, blurb: "Hotels, resorts & restaurants" },
  { name: "Education", slug: "education", icon: GraduationCap, blurb: "Schools, colleges & coaching" },
  { name: "Manufacturing", slug: "manufacturing", icon: Factory, blurb: "MSME units & industrial brands" },
  { name: "Startups", slug: "startups", icon: Rocket, blurb: "New ventures & D2C brands" },
];

export const INDUSTRY_PAGES = {
  textile: {
    name: "Textile & Clothing",
    image: "/ind-textile.jpg",
    hero: "Digital marketing for textile shops, saree showrooms and handloom brands in Tamil Nadu.",
    painPoints: [
      "Walk-in customers are shrinking, but your competitors seem to be everywhere online",
      "Beautiful stock — but no photos or catalogues doing it justice",
      "Festival seasons come and go without a proper digital campaign",
      "Out-of-town buyers can't find your shop when they search",
    ],
    help: [
      "Google Business Profile & local SEO so nearby buyers find you first",
      "WhatsApp catalogue & festival creatives that drive bulk enquiries",
      "Instagram reels in Tamil that showcase your latest collections",
      "Google Ads during wedding & festival season for ready-to-buy searches",
    ],
    meta: "Digital marketing for textile shops & saree showrooms in Chennai & Erode — local SEO, WhatsApp catalogues and festival campaigns.",
  },
  healthcare: {
    name: "Healthcare",
    image: "/ind-health.jpg",
    hero: "Ethical digital marketing for clinics, hospitals and wellness centres in Tamil Nadu.",
    painPoints: [
      "Patients choose the clinic that shows up first on Google Maps — not necessarily the best one",
      "Appointment calls are unpredictable from one week to the next",
      "No time to manage reviews, listings or social pages",
      "Worried about staying compliant while marketing",
    ],
    help: [
      "Local SEO & Google Business Profile for 'near me' searches",
      "Online appointment flow with WhatsApp reminders",
      "Patient education content in Tamil & English",
      "Review management that builds genuine trust",
    ],
    meta: "Digital marketing for clinics & hospitals in Chennai & Erode — local SEO, appointment flows and patient education content.",
  },
  "real-estate": {
    name: "Real Estate",
    image: "/ind-realestate.jpg",
    hero: "Digital marketing for builders, agents and property projects across Tamil Nadu.",
    painPoints: [
      "Site visits depend too heavily on brokers and word of mouth",
      "Leads from portals are expensive and often tyre-kickers",
      "Projects lack a professional digital presence buyers can verify",
      "No follow-up system once an enquiry comes in",
    ],
    help: [
      "Project landing pages with WhatsApp lead capture",
      "Google Ads targeting ready-to-buy locations & budgets",
      "Walkthrough reels & aerial content for social media",
      "Lead tracking so no enquiry goes cold",
    ],
    meta: "Digital marketing for real estate builders & agents in Chennai & Erode — project landing pages, Google Ads and lead tracking.",
  },
  hotels: {
    name: "Hotels & Hospitality",
    image: "/ind-hotels.jpg",
    hero: "Direct bookings for hotels, resorts and restaurants — less dependence on OTAs.",
    painPoints: [
      "OTA commissions eating into every booking",
      "Photos on Google don't match what you actually offer",
      "Weekday and off-season rooms stay empty",
      "Guests can't tell you apart from the hotel next door",
    ],
    help: [
      "Google Business Profile & local SEO for direct discovery",
      "A website that takes booking enquiries directly",
      "Instagram & reels that sell the experience, not just rooms",
      "Seasonal ad campaigns to fill off-season dates",
    ],
    meta: "Digital marketing for hotels & restaurants in Tamil Nadu — direct bookings, local SEO and social content that fills rooms.",
  },
  education: {
    name: "Education",
    image: "/ind-education.jpg",
    hero: "Digital marketing for schools, colleges and coaching institutes across Tamil Nadu.",
    painPoints: [
      "Admissions depend on word of mouth while other institutions fill seats through digital campaigns",
      "Parents research online first — an outdated website or weak Google presence loses trust instantly",
      "Enquiries come in during admission season, but there is no system to follow up",
      "Great programmes, faculty and campus — but not enough people know about them",
    ],
    help: [
      "Local SEO & Google Business Profile so parents find you for 'schools near me'",
      "Admission landing pages with WhatsApp enquiry follow-up",
      "Content that showcases campus life, faculty and results — in Tamil & English",
      "Admission-season Google & social ad campaigns that fill seats",
    ],
    meta: "Digital marketing for schools, colleges & coaching institutes in Tamil Nadu — admission campaigns, local SEO and enquiry systems that fill seats.",
  },
  retail: {
    name: "Retail Shops",
    image: "/ind-retail.jpg",
    hero: "Digital marketing for supermarkets, stores and local retail brands across Tamil Nadu.",
    painPoints: [
      "Big chains and quick-commerce apps are winning the customers who search online",
      "Your store looks great inside, but Google shows an old photo and barely any information",
      "Offers and new stock change weekly, but nothing reaches your customers directly",
      "No idea how many walk-ins actually came from the internet",
    ],
    help: [
      "Google Business Profile that shows correct timings, photos and offers",
      "WhatsApp broadcasts & festival offers that bring repeat walk-ins",
      "Instagram catalogues of fresh stock — in Tamil & English",
      "Local Google Ads for 'near me' searches with tracked calls",
    ],
    meta: "Digital marketing for retail shops & supermarkets in Tamil Nadu — Google Business Profile, WhatsApp offers and local ads that bring walk-ins.",
  },
  manufacturing: {
    name: "Manufacturing",
    image: "/ind-manufacturing.jpg",
    hero: "B2B digital marketing for MSME units, mills and industrial brands in Tamil Nadu.",
    painPoints: [
      "Buyers search for suppliers online — if you're invisible, the enquiry goes to a competitor",
      "No professional digital presence for bulk and export enquiries",
      "Trade fair leads go cold with no follow-up system",
      "An outdated or missing website makes bigger buyers look past you",
    ],
    help: [
      "Professional B2B website with product catalogue & enquiry forms",
      "Google Ads & SEO for the industrial keywords buyers actually search",
      "LinkedIn & YouTube presence that builds buyer trust",
      "Bulk-enquiry WhatsApp & email follow-up systems",
    ],
    meta: "B2B digital marketing for manufacturing & MSME units in Tamil Nadu — B2B websites, industrial SEO and Google Ads for bulk enquiries.",
  },
  startups: {
    name: "Startups",
    image: "/ind-startups.jpg",
    hero: "Launch faster with brand, website and growth marketing built for Indian startups.",
    painPoints: [
      "A great product — but not enough people know it exists",
      "Burn rate is real: every rupee of marketing must show returns",
      "Freelancers juggling logo, website and ads with no connected strategy",
      "Investors and customers check you online before they trust you",
    ],
    help: [
      "Brand identity + conversion-ready website in weeks, not months",
      "Launch campaigns across Google, Instagram and WhatsApp",
      "Analytics-first: every rupee tracked, every channel measured",
      "Monthly growth sprints sized to startup budgets",
    ],
    meta: "Digital marketing for startups in Tamil Nadu & India — brand, website, launch campaigns and analytics-first growth marketing.",
  },
};

export const CITIES = {
  chennai: {
    name: "Chennai",
    path: "/digital-marketing-agency-chennai",
    image: IMG.chennai,
    title: "Digital Marketing Agency in Chennai",
    intro: [
      "Chennai is India's fastest-growing digital market — and also its most competitive. From T. Nagar showrooms to OMR startups, the businesses winning customers are the ones that show up first on Google, look premium on Instagram and reply on WhatsApp within minutes.",
      "Kresha Services is a Chennai-based digital marketing agency built for local businesses. We handle SEO, AI search optimisation, social media, Google Ads, websites and design — with transparent pricing, weekly reports and support in Tamil and English.",
    ],
    localPoints: [
      "We understand Chennai's market — from T. Nagar retail to OMR SaaS",
      "On-call or in-person strategy sessions across the city",
      "Tamil-first creatives that connect with local customers",
      "Transparent, itemised pricing with GST invoice",
    ],
    meta: "Looking for a digital marketing agency in Chennai? Kresha Services delivers SEO, Google Ads, social media & websites for local businesses. Tamil + English support.",
  },
  erode: {
    name: "Erode",
    path: "/digital-marketing-agency-erode",
    image: IMG.erode,
    title: "Digital Marketing Agency in Erode",
    intro: [
      "Erode runs on enterprise and trust — textiles, turmeric, MSMEs and family businesses built over decades. Today your customers search online before they buy, whether they're in Erode town or the surrounding taluks.",
      "Kresha Services brings big-city digital marketing to Erode at small-town honesty: affordable packages, clear weekly reports and a team that speaks your language. We help local businesses win on Google, WhatsApp and social media.",
    ],
    localPoints: [
      "Deep experience with Erode's textile & MSME businesses",
      "Local strategy sessions in Erode — we come to you",
      "Tamil-first creatives your customers relate to",
      "Affordable plans sized for local businesses",
    ],
    meta: "Digital marketing agency in Erode for textile, MSME & local businesses — SEO, Google Ads, social media and websites with Tamil support.",
  },
};

export const PROCESS = [
  { n: "01", title: "Discover", desc: "A free strategy call in Tamil or English, plus a free website & SEO audit. We understand your business, goals and budget — no pitch, no pressure." },
  { n: "02", title: "Plan", desc: "A clear 30-day roadmap: channels, budgets and targets — written down and agreed before we start." },
  { n: "03", title: "Execute", desc: "We launch your campaigns, content and tracking. You keep running your business; we run the digital side." },
  { n: "04", title: "Improve", desc: "Weekly reports on leads and spend. We double down on what works and cut what doesn't." },
];

export const WHY = [
  { icon: MapPin, title: "Local expertise", desc: "We know what sells in Chennai & Erode — the seasons, the festivals, the buying habits." },
  { icon: IndianRupee, title: "Transparent pricing", desc: "Itemised quotes, GST invoices, and full visibility on ad spend. No surprise bills, ever." },
  { icon: Languages, title: "Tamil + English", desc: "Strategy, creatives and support in the language your team and customers speak." },
  { icon: BarChart3, title: "Weekly reports", desc: "Simple weekly summaries: leads in, money out, what's next. No jargon." },
];

export const PRICING = [
  {
    name: "Starter",
    tagline: "Get visible",
    features: [
      "Google Business Profile setup & optimisation",
      "Local SEO foundations",
      "1 social channel managed (8 posts/month)",
      "WhatsApp enquiry setup",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Get leads",
    features: [
      "Everything in Starter",
      "Google Ads or Meta Ads management",
      "Landing page / website care",
      "AEO + GEO (AI search) basics",
      "WhatsApp lead tracking",
      "Weekly performance reports",
    ],
    featured: true,
  },
  {
    name: "Pro",
    tagline: "Own your market",
    features: [
      "Everything in Growth",
      "Full SEO + AEO/GEO program",
      "Google + social ads together",
      "Website development included",
      "Graphic design support",
      "Weekly strategy call",
    ],
    featured: false,
  },
];

export const FAQS = [
  { q: "How much does digital marketing cost in Chennai or Erode?", a: "It depends on your goals and channels. We size every package to your budget — from a starter local-SEO plan to full-funnel growth. Every quote is itemised, with a GST invoice, and there are no hidden charges." },
  { q: "How soon will I see results?", a: "Google Ads can start bringing enquiries within days of launch. SEO and AI-search visibility typically build over 3–6 months. We tell you honestly what each channel can and cannot do before you spend." },
  { q: "Do you work in Tamil?", a: "Yes. Our team works in both Tamil and English — strategy calls, ad creatives, social content and reports can all be in the language your customers speak." },
  { q: "What do your reports look like?", a: "Simple weekly summaries: leads received, spend used, what worked and what we will do next. No confusing dashboards — you always know what your money did." },
  { q: "Is there a lock-in period?", a: "No long lock-ins. We start with a clear 30-day roadmap and continue month to month. You stay because it works, not because of a contract." },
  { q: "Will I get a GST invoice?", a: "Yes. Kresha Services is GST-registered and provides a proper GST invoice every month — easy for your accounting and tax filing." },
  { q: "What is the minimum budget for Google Ads?", a: "For local businesses in Tamil Nadu we recommend a realistic starting ad spend based on your market and competition. On the free strategy call we will tell you the honest number — even if it means starting smaller." },
  { q: "Which areas do you serve?", a: "We are based in Chennai and Erode and serve businesses across Tamil Nadu and India. As a service-area business, our team can meet you online or in person at your shop, office or site." },
];

export const REVIEWS_FALLBACK = [
  { name: "Ramesh Kumar", business: "Saree shop, Erode", stars: 5, text: "Our shop never showed up on Google Maps. Kresha set up everything and now new customers find us every week. They explain everything in Tamil." },
  { name: "Dr. Priya Sundaram", business: "Dental clinic, Chennai", stars: 5, text: "Very transparent team. Weekly reports, clear pricing, and our appointment calls have clearly increased since the Google Ads started." },
  { name: "Aravind M.", business: "Jewellery showroom, Chennai", stars: 5, text: "They rebuilt our website and handle our Instagram. Professional creatives and quick WhatsApp replies. Worth every rupee." },
  { name: "Lakshmi Priya", business: "Boutique, Erode", stars: 4, text: "Good support and honest advice. SEO results took a few months as they warned, but the enquiries are now steady." },
  { name: "Suresh Babu", business: "Hotel, Erode", stars: 5, text: "From Google Business Profile to festival creatives, they manage everything. Our weekend bookings improved noticeably." },
];

export const BUSINESS_TYPES = ["Retail Shop", "Textile / Clothing", "Clinic / Hospital", "Real Estate", "Hotel / Restaurant", "Education", "Manufacturing", "Startup", "Other"];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kresha Services",
  slogan: "Grow Your Business, Digitally.",
  description: "Digital marketing agency for Chennai & Erode — SEO, AEO/GEO, social media marketing, Google Ads, website development and graphic design.",
  url: "https://kreshaservices.com",
  telephone: "+919363100998",
  email: "kreshaservices@gmail.com",
  sameAs: [
    "https://youtube.com/@KreshaServices",
    "https://instagram.com/kreshaservices",
    "https://facebook.com/kreshaservices",
    "https://linkedin.com/company/kreshaservices",
  ],
  areaServed: [
    { "@type": "City", name: "Chennai, Tamil Nadu" },
    { "@type": "City", name: "Erode, Tamil Nadu" },
  ],
  address: { "@type": "PostalAddress", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  priceRange: "₹₹",
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.meta,
  provider: { "@type": "ProfessionalService", name: "Kresha Services", url: "https://kreshaservices.com", telephone: "+919363100998" },
  areaServed: ["Chennai", "Erode", "Tamil Nadu"],
});
