// Site Configuration - Updated for Red Bridge Construction
// All variables defined here are used across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "Red Bridge Construction",
    tagline: "Building Excellence",
    fullName: "Red Bridge Construction LLC",
    description: "Serving New Hope and Bucks County with excellence and integrity. We are the trusted partner for homeowners and business owners who demand excellence in every detail.",
    foundedYear: 1997,
    yearsExperience: 28,
    projectsCompleted: 500, // Placeholder
    awardsWon: 5, // Placeholder based on "Award Winning" claim
  },

  // Contact Information
  contact: {
    phone: "(215) 534-1008",
    email: "rob@redbridgeconstruction.com",
    address: {
      street: "231 Red Bridge Rd",
      city: "Kintnersville",
      state: "PA",
      zip: "18930",
      full: "231 Red Bridge Rd, Kintnersville, PA 18930",
    },
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/redbridgeconstruction", // Placeholder
    facebook: "https://facebook.com/redbridgeconstruction", // Placeholder
    googleBusiness: "https://www.redbridgeconstructionllc.com",
  },

  // Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],

  // Services Offered
  services: [
    {
      title: "Residential Construction",
      slug: "residential-construction",
      description: "Custom homes and renovations that bring your vision to life.",
      longDescription: "We deliver exceptional residential construction services across Bucks County, working closely with you from initial vision to final walkthrough to ensure a painless process.",
      icon: "home",
      features: [
        "Custom Home Design",
        "Kitchen & Bath Remodels",
        "Home Additions",
        "Outdoor Living Spaces",
      ],
    },
    {
      title: "Commercial Construction",
      slug: "commercial-construction",
      description: "Professional spaces designed for business success.",
      longDescription: "We provide comprehensive construction solutions for commercial clients, delivering rock-solid project delivery and finishing on time and on budget.",
      icon: "business",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Healthcare Facilities",
      ],
    },
    {
      title: "Historic Restoration",
      slug: "historic-restoration",
      description: "Preserving Bucks County's architectural heritage.",
      longDescription: "Our team expertly balances heritage preservation with modern integration, ensuring period-accurate restorations that protect historic integrity.",
      icon: "architecture",
      features: [
        "Period-Accurate Restoration",
        "Structural Reinforcement",
        "Heritage Preservation",
        "Modern Integration",
      ],
    },
  ],

  portfolio: [
    {
      title: "Shed Remodeling",
      category: "Outdoor Spaces",
      image: "/portfolio/shed-remodel.jpg", // Placeholder image path
      description: "Modernized outdoor shed with complete structural renovation, modern insulation, electrical upgrades, and custom storage solutions in New Hope, PA.",
    },
    {
      title: "Bathroom Remodel #1",
      category: "Bathroom",
      image: "/portfolio/bathroom-1.jpg", // Placeholder image path
      description: "Complete master bathroom renovation featuring new frameless glass enclosure, brushed brass fixtures, and custom niche shelving.",
    },
    {
      title: "Bathroom Remodel #2",
      category: "Bathroom",
      image: "/portfolio/bathroom-2.jpg", // Placeholder image path
      description: "Secondary bathroom upgrade featuring full wall patterned marble mosaic, recessed ceiling lighting, and a floating vanity with under‑cabinet LED accents.",
    },
  ],

  // Testimonials
  testimonials: [
    // Note: Specific testimonials were not immediately visible on the homepage,
    // so you may want to update these with real client quotes.
    {
      name: "Bucks County Homeowner",
      role: "Residential Construction",
      quote: "Rob and his team delivered rock-solid project delivery and superior results. They worked closely with us from initial vision to final walkthrough.",
      rating: 5,
    },
    {
      name: "New Hope Resident",
      role: "Bathroom Remodel",
      quote: "We've earned a reputation for craftsmanship, transparent communication, and finishing on time and on budget. Red Bridge Construction made the process painless.",
      rating: 5,
    },
  ],

  // CTA Section
  cta: {
    headline: "Your Trusted Builder in Bucks County",
    subheadline: "Experience matters. Our 28 years on the leading edge of building and renovation mean rock-solid project delivery and superior results.",
    buttonText: "Get a Free Quote",
    buttonLink: "#contact",
  },

  // Footer
  footer: {
    tagline: "Quality craftsmanship, integrity, and exceptional results.",
    copyright: `© ${new Date().getFullYear()} Red Bridge Construction LLC. All rights reserved.`,
    certifications: ["Licensed & Insured", "Licensed & Bonded", "Quality Materials", "100% Satisfaction"],
  },
} as const;

export type SiteConfig = typeof siteConfig;