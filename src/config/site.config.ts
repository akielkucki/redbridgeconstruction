// Site Configuration - Red Bridge Construction
// All variables defined here are used across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "Red Bridge Construction",
    tagline: "Premier construction services for New Hope and Bucks County.",
    fullName: "Red Bridge Construction LLC",
    description: "Rob Kielkucki founded Red Bridge Construction with a simple yet powerful mission: to deliver exceptional construction services across New Hope and Bucks County. For over 28 years we've been the trusted partner for homeowners and business owners who demand excellence in every detail.",
    foundedYear: 1997,
    yearsExperience: 28,
    projectsCompleted: 500, // Placeholder
    awardsWon: 5, // Placeholder
  },

  // Contact Information
  contact: {
    phone: "(215) 534-1008",
    email: "redbridgeconstructionllc@gmail.com",
    address: {
      street: "231 Red Bridge Rd",
      city: "Kintnersville",
      state: "PA",
      zip: "18930",
      full: "231 Red Bridge Rd, Kintnersville, PA 18930",
    },
    hours: "Mon–Fri · 8 AM–5 PM"
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/redbridgeconstruction", // Placeholder - adjust if needed
    facebook: "https://facebook.com/redbridgeconstruction", // Placeholder - adjust if needed
    googleBusiness: "https://www.redbridgeconstructionllc.com/",
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ],

  // Services Offered
  services: [
    {
      title: "Home Remodeling",
      slug: "home-remodeling",
      description: "Expert home remodeling services in Bucks County, from custom kitchen renovations to complete home makeovers.",
      longDescription: "Transform your existing space with our premier home remodeling services. As trusted local contractors, we specialize in high-end kitchen and bath renovations, seamless home additions, and whole-house makeovers designed to increase your property's value and enhance your everyday lifestyle.",
      icon: "home_repair_service",
      features: [
        "Kitchen & Bathroom Remodeling",
        "Seamless Home Additions",
        "Whole-House Renovations",
        "Finished Basements & Interiors",
      ],
    },
    {
      title: "Custom Home Building",
      slug: "custom-home-building",
      description: "Award-winning custom home builders bringing your dream property to life with unparalleled craftsmanship.",
      longDescription: "Build the house of your dreams with our comprehensive custom home building services. From the initial architectural design to the final walkthrough, we manage every phase of new construction. We prioritize energy efficiency, luxury materials, and flawless execution to deliver a move-in-ready masterpiece.",
      icon: "home",
      features: [
        "New Construction Homes",
        "Comprehensive Design-Build Services",
        "Luxury Custom Estates",
        "Energy-Efficient Building Practices",
      ],
    },
    {
      title: "Historic & Property Restoration",
      slug: "historic-property-restoration",
      description: "Specialized historic home restoration preserving Bucks County's unique architectural heritage.",
      longDescription: "Protect and revive your historic property with our expert restoration services. We specialize in period-accurate historic preservation and structural repairs, seamlessly integrating modern amenities while strictly maintaining your home's original architectural integrity and timeless charm.",
      icon: "architecture",
      features: [
        "Period-Accurate Restorations",
        "Structural Repairs & Stabilization",
        "Masonry & Woodwork Preservation",
        "Modern Systems Integration",
      ],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: "Bathroom Remodel #1",
      category: "Bathroom",
      image: "https://images.pexels.com/photos/7166635/pexels-photo-7166635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete master bathroom renovation in New Hope, PA: replaced tilework, installed new frameless glass enclosure, updated plumbing fixtures in brushed brass, and added custom niche shelving for modern storage.",
    },
    {
      title: "Bathroom Remodel #2",
      category: "Bathroom",
      image: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Secondary bathroom upgrade featuring full wall tile installation with patterned marble mosaic, recessed ceiling lighting, new rainfall showerhead, and a floating vanity with under-cabinet LED accents.",
    },
    {
      title: "Shed Remodeling",
      category: "Outdoor",
      image: "https://images.pexels.com/photos/16249146/pexels-photo-16249146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Modernized outdoor shed with enhanced functionality and aesthetic appeal. This project involved complete structural renovation, modern insulation, electrical upgrades, and custom storage solutions.",
    },
    {
      title: "Modern Residence",
      category: "Residential",
      image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom-built contemporary home featuring panoramic glass facades, open-concept living, and seamless indoor-outdoor transitions.",
    },
    {
      title: "Heritage Façade Restoration",
      category: "Historic",
      image: "https://images.pexels.com/photos/8472257/pexels-photo-8472257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Meticulous restoration of a 19th-century brick façade, preserving architectural details while reinforcing structural integrity.",
    },
    {
      title: "Gourmet Kitchen Build",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Chef-grade kitchen build featuring marble waterfall island, custom range hood, and handcrafted open shelving.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "James L.",
      role: "Homeowner",
      quote: "The team at Red Bridge Construction completely transformed our master bathroom. From the custom niche shelving to the flawless tile work, their attention to detail is unmatched. They kept the workspace clean and finished right on schedule.",
      rating: 5,
    },
    {
      name: "Rebecca T.",
      role: "Residential Client",
      quote: "We hired Red Bridge to renovate our outdoor shed and add electrical and insulation. They took a dilapidated structure and turned it into a beautiful, functional workspace. Excellent communication throughout the entire project.",
      rating: 5,
    },
    {
      name: "Daniel M.",
      role: "Commercial Client",
      quote: "Finding a reliable contractor can be tough, but Red Bridge Construction made the process completely painless. They provided transparent pricing, top-notch craftsmanship, and true to their word, they finished on time and on budget. Experience really does matter.",
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

  footer: {
    tagline: "Quality craftsmanship, integrity, and exceptional results.",
    copyright: `© ${new Date().getFullYear()} Red Bridge Construction LLC. All rights reserved.`,
    certifications: [
      "Licensed & Insured",
      "Expert Craftsmen",
      "Quality Materials",
      "On-Time Completion"
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;