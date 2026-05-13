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
    serviceArea: "Bucks County",
    serviceAreaSlug: "bucks-county",
    hours: "Mon–Fri · 8 AM–5 PM"
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/redbridgeconstruction",
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
      tagline: "Renovations that pay off — every day.",
      description: "Expert home remodeling services in Bucks County, from custom kitchen renovations to complete home makeovers.",
      longDescription: "Transform your existing space with our premier home remodeling services. As trusted local contractors, we specialize in high-end kitchen and bath renovations, seamless home additions, and whole-house makeovers designed to increase your property's value and enhance your everyday lifestyle.",
      icon: "home_repair_service",
      heroImage: "/portfolio/kitchen_remodel.png",
      accentImage: "/portfolio/bathroom_remodel.png",
      features: [
        "Kitchen & Bathroom Remodeling",
        "Seamless Home Additions",
        "Whole-House Renovations",
        "Finished Basements & Interiors",
      ],
      processSteps: [
        { title: "Discovery", description: "Walk the space together, capture priorities, set a realistic budget and timeline." },
        { title: "Design", description: "Detailed drawings, finish selections, and a fixed-scope proposal — no surprises." },
        { title: "Permitting", description: "We pull the permits and coordinate inspections across every Bucks County township." },
        { title: "Build", description: "Daily site cleanliness, weekly progress updates, and a dedicated project lead on every job." },
        { title: "Walkthrough", description: "Final punch list cleared before sign-off. One-year workmanship warranty included." },
      ],
      faqs: [
        { q: "How long does a typical kitchen or bath remodel take?", a: "Most kitchens run 8–12 weeks from demo to final walkthrough; a full bath averages 4–6 weeks. We give you a written schedule at proposal and update it weekly." },
        { q: "Do you handle design or do I need an architect?", a: "For most remodels we handle design in-house. For structural changes, additions, or whole-house projects we coordinate directly with a licensed architect." },
        { q: "Can we stay in the home during the remodel?", a: "For single-room projects, yes. For whole-house renovations we'll talk you through dust isolation, water shut-offs, and whether a short stay elsewhere makes sense." },
        { q: "Are you licensed and insured in Pennsylvania?", a: "Fully licensed PA Home Improvement Contractor, with general liability and workers' comp coverage. Certificates available on request." },
      ],
      relatedProjectSlugs: ["gourmet-kitchen-remodel-new-hope", "master-bathroom-remodel-new-hope", "marble-mosaic-bathroom-doylestown"],
    },
    {
      title: "Custom Home Building",
      slug: "custom-home-building",
      tagline: "Ground-up homes, end-to-end accountability.",
      description: "Award-winning custom home builders bringing your dream property to life with unparalleled craftsmanship.",
      longDescription: "Build the house of your dreams with our comprehensive custom home building services. From the initial architectural design to the final walkthrough, we manage every phase of new construction. We prioritize energy efficiency, luxury materials, and flawless execution to deliver a move-in-ready masterpiece.",
      icon: "home",
      heroImage: "/portfolio/bob_house.jpg",
      accentImage: "/portfolio/bob_house_2.jpg",
      features: [
        "New Construction Homes",
        "Comprehensive Design-Build Services",
        "Luxury Custom Estates",
        "Energy-Efficient Building Practices",
      ],
      processSteps: [
        { title: "Lot & feasibility", description: "Site evaluation, zoning review, and budget framing before a single line is drawn." },
        { title: "Architecture", description: "Schematic design through construction documents, paired with engineering and energy modeling." },
        { title: "Pre-construction", description: "Fixed pricing, subcontractor bids, and a master schedule locked in before we break ground." },
        { title: "Construction", description: "Single point of contact, on-site supervision, and weekly owner walkthroughs from foundation to finish." },
        { title: "Move-in", description: "Punch list, systems orientation, and a one-year workmanship warranty with documented service intervals." },
      ],
      faqs: [
        { q: "How long does a custom home take to build?", a: "From signed agreement to move-in, most projects run 12–18 months. Permitting in Bucks County townships typically accounts for 60–90 days of that." },
        { q: "What does a custom build cost per square foot?", a: "Quality-tier builds in our region land between $350–$550/sf finished, depending on lot conditions, finishes, and mechanical systems. We provide a fixed-scope proposal before contract." },
        { q: "Can we make changes during construction?", a: "Yes — change orders are handled in writing with cost and schedule impact captured up front. No verbal-only changes." },
        { q: "Do you build to high-performance standards?", a: "Every home is built tighter than code: continuous insulation, blower-door tested envelopes, and ENERGY STAR–grade mechanicals as standard." },
      ],
      relatedProjectSlugs: ["modern-custom-home-new-hope"],
    },
    {
      title: "Historic & Property Restoration",
      slug: "historic-property-restoration",
      tagline: "Period craftsmanship, modern reliability.",
      description: "Specialized historic home restoration preserving Bucks County's unique architectural heritage.",
      longDescription: "Protect and revive your historic property with our expert restoration services. We specialize in period-accurate historic preservation and structural repairs, seamlessly integrating modern amenities while strictly maintaining your home's original architectural integrity and timeless charm.",
      icon: "architecture",
      heroImage: "/portfolio/client_project.jpg",
      accentImage: "/portfolio/client_project_5.jpg",
      features: [
        "Period-Accurate Restorations",
        "Structural Repairs & Stabilization",
        "Masonry & Woodwork Preservation",
        "Modern Systems Integration",
      ],
      processSteps: [
        { title: "Condition assessment", description: "Building inspection by trade — framing, masonry, roofing, mechanicals — with a documented findings report." },
        { title: "Preservation plan", description: "Period-accurate scope of work, material specifications, and review against local historic district requirements." },
        { title: "Structural stabilization", description: "Address settlement, rot, and load paths before any finish work begins." },
        { title: "Restoration", description: "Replicate trim and millwork, conserve original masonry, and integrate modern mechanicals discreetly." },
        { title: "Sign-off", description: "Final walkthrough, photographic record of hidden work, and one-year workmanship warranty." },
      ],
      faqs: [
        { q: "Do you work on properties in historic districts?", a: "Yes — including review and submittal coordination with local Historic Architectural Review Boards across Bucks County." },
        { q: "Can you replicate original trim and millwork?", a: "We profile and replicate period trim in primed cellular PVC or wood, and conserve original woodwork where it can be saved." },
        { q: "How do you handle modern systems in a historic home?", a: "Mechanicals, electrical, and plumbing are run on routes that protect original framing and finishes. We document every concealed change." },
        { q: "Is restoration more expensive than new construction?", a: "Per square foot, often yes — structural surprises are common. We carry a contingency line item and report against it monthly." },
      ],
      relatedProjectSlugs: ["historic-exterior-restoration-doylestown", "detached-garage-remodel-kintnersville"],
    },
  ],

  // Portfolio
  portfolio: [
    {
      title: "Bathroom Remodel #1",
      slug: "master-bathroom-remodel-new-hope",
      category: "Bathroom",
      image: "/portfolio/bathroom_remodel.png",
      description: "Complete master bathroom renovation in New Hope, PA: replaced tilework, installed new frameless glass enclosure, updated plumbing fixtures in brushed brass, and added custom niche shelving for modern storage.",
      caseStudy: {
        h1: "A Spa-Grade Master Bathroom Remodel in New Hope, PA",
        location: "New Hope, Bucks County, PA",
        projectType: "Master Bathroom Renovation",
        clientGoal: "Transform a dated master bath into a spa-grade daily retreat with modern fixtures, generous niche storage, and a frameless walk-in shower — without disrupting the family's daily routine.",
        challenges: [
          "Original subfloor showed early moisture damage from decades of use.",
          "Supply lines were undersized and waste line ran below modern slope minimums.",
          "Existing tile layout had multiple leak points around the previous shower caddies.",
        ],
        solution: "Full demolition to studs, moisture-rated substrate replacement, plumbing re-run to current Bucks County code, fully bonded waterproofing membrane at pan and curb, solid-brass fixtures, custom mitered-edge niche shelving, and a frameless 3/8\" glass enclosure.",
        results: [
          "Passed inspection on the first walkthrough.",
          "Delivered on the original signing-day schedule.",
          "Spa-grade retreat built to perform over a 20+ year service life.",
        ],
        narrative: [
          "A New Hope homeowner came to Red Bridge Construction with a tired master bath — failing tile, undersized plumbing, and a glass enclosure that had outlived its seal. The brief was direct: deliver a spa-grade retreat without compromising the daily rhythm of family life. From day one, safety, reliability, and lasting craftsmanship shaped every decision.",
          "The completed shower image in the gallery shows the result. A full-height tile field wraps a frameless 3/8\" glass enclosure, brushed-brass trim catches the morning light, and a mitered-edge niche replaces the leak-prone caddies the previous build relied on. Each visual detail traces back to a deliberate choice — slip-resistant porcelain underfoot, niche placement set to the homeowner's reach, and solid-brass fixtures specified over plated alternatives for two-decade durability.",
          "The real work happened behind the tile. The original subfloor carried early moisture damage; the supply lines were undersized; the waste line ran below modern slope minimums. We took the room to the studs, installed a moisture-rated substrate, re-ran the plumbing to current Bucks County code, and waterproofed the pan and curb with a fully bonded membrane. Safety wasn't a finishing touch — it was every layer underneath the one you can see.",
          "The project passed inspection first walkthrough, finished on the original schedule, and gave the homeowner a daily-use retreat built to perform — not just photograph well. That's the standard of craftsmanship Red Bridge Construction has carried for 28 years.",
        ],
        metaDescription: "See how Red Bridge Construction crafted a spa-grade master bathroom remodel in New Hope, PA with frameless glass, brushed brass, and meticulous tile craftsmanship.",
        images: [
          {
            src: "/portfolio/bathroom_remodel.png",
            alt: "Completed master bathroom with full-height tile, frameless glass enclosure, brushed-brass fixtures, and custom mitered niche shelving.",
            caption: "Final walkthrough — full-height tile field, frameless glass, brushed-brass trim, and the custom mitered niche.",
          },
        ],
      },
    },
    {
      title: "Bathroom Remodel #2",
      slug: "marble-mosaic-bathroom-doylestown",
      category: "Bathroom",
      image: "/portfolio/bathroom_remodel_2.jpg",
      description: "Secondary bathroom upgrade featuring full wall tile installation with patterned marble mosaic, recessed ceiling lighting, new rainfall showerhead, and a floating vanity with under-cabinet LED accents.",
      caseStudy: {
        h1: "A Designer-Level Marble Mosaic Bathroom Remodel in Doylestown, PA",
        location: "Doylestown, Bucks County, PA",
        projectType: "Secondary Bathroom Upgrade",
        clientGoal: "Elevate a builder-grade secondary bath into a designer-level space with a patterned marble feature wall, a floating vanity, and refined recessed lighting.",
        challenges: [
          "Floating vanity required reinforced concealed blocking inside the wet wall.",
          "Patterned marble mosaic demanded substrate flatness within tight tolerances.",
          "Existing ceiling lacked structure to host the recessed LED layout the design called for.",
        ],
        solution: "Reframed wet-wall blocking sized to vanity load specs, full-wall patterned marble mosaic with mitered edges, dimmable recessed LEDs on GFCI-protected circuits, thermostatic mixing valve at the rainfall head for scald protection, and warm-LED under-cabinet accent strips.",
        results: [
          "Passed inspection without revisions.",
          "Earned a written client referral within weeks of completion.",
          "Transformed a utility bath into the home's design centerpiece.",
        ],
        narrative: [
          "A Doylestown family asked Red Bridge Construction to elevate a builder-grade secondary bath into a designer-level space — patterned marble, refined lighting, and a floating vanity that would feel weightless without compromising on durability. The challenge: deliver a high-design result with the same safety and reliability standards we'd apply to a primary suite.",
          "The completed gallery image captures the finished room from the doorway. A floor-to-ceiling patterned marble mosaic anchors the back wall, dimmable recessed LEDs wash the stone in even light, a rainfall showerhead emerges from a precisely furred ceiling plane, and the floating vanity hovers with a soft under-cabinet glow. Every visible detail — the mitered marble edges, the flush LED trim, the cantilevered cabinet — reflects a level of craftsmanship rare in secondary baths.",
          "To carry the floating vanity and the patterned feature wall, we reframed the wet wall with engineered blocking sized to spec, added structural backing for the cabinet's concealed cleats, and installed a thermostatic mixing valve at the rainfall head for scald protection. Safety details — anti-tip cabinet anchors, slip-rated floor tile, GFCI circuits behind the LEDs — are invisible in the photo and load-bearing for daily reliability.",
          "The room passed inspection without revisions and earned the client a written referral within weeks of completion. What started as a utility bath now functions as the home's design centerpiece — and performs as one, too.",
        ],
        metaDescription: "Red Bridge Construction transformed a Doylestown secondary bath into a marble-mosaic showpiece with floating vanity, LED lighting, and durable craftsmanship.",
        images: [
          {
            src: "/portfolio/bathroom_remodel_2.jpg",
            alt: "Completed secondary bathroom with patterned marble mosaic feature wall, recessed LED lighting, rainfall showerhead, and floating vanity with under-cabinet accent lighting.",
            caption: "Finished room from the doorway — patterned marble feature wall, floating vanity, and recessed LED layout.",
          },
        ],
      },
    },
    {
      title: "Detached Garage",
      slug: "detached-garage-remodel-kintnersville",
      category: "Outdoor",
      image: "/portfolio/shed_remodel.jpg",
      description: "Modernized outdoor shed with enhanced functionality and aesthetic appeal. This project involved complete structural renovation, modern insulation, electrical upgrades, and custom storage solutions.",
      caseStudy: {
        h1: "A Detached Garage Remodel in Kintnersville, PA — From Failing Shed to Four-Season Workshop",
        location: "Kintnersville, Bucks County, PA",
        projectType: "Detached Outbuilding Renovation",
        clientGoal: "Convert a deteriorating detached structure into a fully insulated, electrified, four-season workshop — on the original footprint, to comply with local zoning.",
        challenges: [
          "Original framing was compromised and the roof assembly was failing.",
          "No existing electrical service to the structure.",
          "Zoning required the rebuild stay on the original footprint with no expansion.",
        ],
        solution: "Stripped to studs, sistered and replaced compromised framing, new sheathing and architectural shingle roof with ice-and-water shield, closed-cell spray-foam insulation, new sub-panel and 240V feed from the main residence, dedicated 20A bench circuits, LED task lighting, and durable Hardie-style siding.",
        results: [
          "Passed electrical and structural inspections on the first pass.",
          "Stayed inside the zoning footprint with no variance required.",
          "A structure once written off as a teardown is now a weekly-use workshop.",
        ],
        narrative: [
          "The original structure was a liability — sagging framing, a failing roof, and no service connection. A Kintnersville homeowner asked Red Bridge Construction to convert it into a fully insulated, electrified workshop that would hold up against Bucks County winters. The brief required total renovation while staying on the original footprint per local zoning, which made structural precision and code-compliant safety non-negotiable.",
          "The four-image gallery walks the project through every stage. The early-phase shot shows the stripped frame after we sistered and replaced compromised studs, exposing the bones the original build had buried. The second angle captures the new sheathing and architectural roof going on — straight lines, properly flashed valleys, ice-and-water shield carried into the eaves. The third image documents the interior post-insulation, with closed-cell spray foam tight in the cavities and vapor-tight detailing at every penetration. The final exterior view shows the finished workshop — durable Hardie-style siding, new entry, and clean fascia and trim lines.",
          "Reliability lived in the systems. We pulled a new 240V circuit from the main residence on a sub-panel sized for future expansion, ran dedicated 20A circuits to the bench locations, installed LED task lighting with safety-rated junction boxes, and grounded the structure to current code. Every electrical run was inspected before the walls closed up. The roofing assembly carries a manufacturer's wind warranty, and the foundation was corrected with engineered piers where settlement had crept in.",
          "Final result: the building passed electrical and structural inspections on the first pass, and a structure that had been written off as a teardown is now a four-season workshop the homeowner uses every week. Craftsmanship turned a problem into an asset.",
        ],
        metaDescription: "Red Bridge Construction rebuilt a failing Kintnersville outbuilding into an insulated, electrified four-season workshop — code-compliant craftsmanship in Bucks County.",
        images: [
          {
            src: "/portfolio/shed_remodel.jpg",
            alt: "Detached garage early renovation stage showing structural framing repair and stripped sheathing.",
            caption: "Phase one — sistered framing exposed after demo, structural corrections complete.",
          },
          {
            src: "/portfolio/shed_remodel-2.jpg",
            alt: "Detached garage with new sheathing and architectural shingle roof installed.",
            caption: "Phase two — new sheathing and architectural roof with properly flashed valleys.",
          },
          {
            src: "/portfolio/shed_remodel_3.jpg",
            alt: "Interior of detached garage after closed-cell spray foam insulation install.",
            caption: "Phase three — closed-cell spray-foam insulation and vapor-tight penetrations.",
          },
          {
            src: "/portfolio/shed_remodel_4.jpg",
            alt: "Completed detached garage exterior with durable siding, new entry, and clean trim.",
            caption: "Final exterior — durable siding, new entry, and clean fascia and trim lines.",
          },
        ],
      },
    },
    {
      title: "Modern Residence",
      slug: "modern-custom-home-new-hope",
      category: "Residential",
      image: "/portfolio/bob_house.jpg",
      description: "Custom-built contemporary home featuring panoramic glass facades, open-concept living, and seamless indoor-outdoor transitions.",
      caseStudy: {
        h1: "A Modern Custom Home in New Hope, PA — Panoramic Glass, Open-Plan Living, Built to Last",
        location: "New Hope, Bucks County, PA",
        projectType: "Custom New Construction",
        clientGoal: "Build a contemporary, light-filled custom home with floor-to-ceiling glass, open-plan living, and a seamless indoor-outdoor connection on a sloped, wooded lot.",
        challenges: [
          "Sloped lot required an engineered foundation system.",
          "Large glass spans demanded structural steel concealed inside the wall assemblies.",
          "Bucks County permitting for a non-traditional contemporary facade.",
        ],
        solution: "Helical-pier foundation engineered for slope, steel-moment-frame system sized for the floor-to-ceiling glazing, high-performance triple-pane windows, standing-seam metal roof installed to manufacturer wind-uplift spec, site-finished white oak floors, full smart-home pre-wire, and zoned HVAC.",
        results: [
          "Delivered on a 14-month construction schedule.",
          "Passed every engineered structural inspection without rework.",
          "Flagship reference build for our custom-home program.",
        ],
        narrative: [
          "A New Hope client approached Red Bridge Construction with an ambitious brief: a contemporary, light-filled custom home with floor-to-ceiling glass, open-plan living, and a seamless connection to the property's wooded lot. Delivering on that vision on a sloped site meant the foundation, the structural openings, and the envelope all had to be engineered with the same care as the architectural details.",
          "The first gallery image captures the home's signature elevation — a wall of triple-pane glazing framed by clean cementitious panels, the standing-seam metal roof line drawn tight against the sky. The second angle pulls in closer, showing the depth of the entry, the precision of the trim returns, and the way the structural steel hides inside the wall assemblies so the glass spans appear to hold themselves up. Every visible plane reflects the engineering underneath.",
          "To carry the openings, we engineered a steel-moment-frame system sized for the design loads, set on a helical-pier foundation specified for the slope. The envelope uses a fully detailed rainscreen with high-performance triple-pane glazing, and the standing-seam roof was installed to the manufacturer's wind-uplift spec. Inside, site-finished white oak floors, a full smart-home pre-wire, and engineered HVAC zones complete a build that performs as quietly as it looks. Safety walked every floor with us — fall protection on the framing crew, daily site reviews, and inspection sign-offs at each structural milestone.",
          "The project delivered on a 14-month schedule, passed every engineered structural inspection without rework, and now serves as a flagship reference for our custom-home program. Reliability of process — not just product — is what carries an ambitious design from rendering to occupancy, and craftsmanship is what makes the finished home feel inevitable.",
        ],
        metaDescription: "See how Red Bridge Construction delivered a modern New Hope custom home with panoramic glass, steel-frame engineering, and on-schedule craftsmanship.",
        images: [
          {
            src: "/portfolio/bob_house.jpg",
            alt: "Signature elevation of modern custom home with floor-to-ceiling glass, cementitious panels, and standing-seam metal roof.",
            caption: "Signature elevation — triple-pane glazing, clean panel detailing, standing-seam roof line.",
          },
          {
            src: "/portfolio/bob_house_2.jpg",
            alt: "Closer angle of modern custom home showing entry depth, trim returns, and concealed structural steel behind glass spans.",
            caption: "Entry detail — precision trim returns and concealed steel-moment-frame openings.",
          },
        ],
      },
    },
    {
      title: "Exterior Remodel",
      slug: "historic-exterior-restoration-doylestown",
      category: "Exterior",
      image: "/portfolio/client_project.jpg",
      description: "Meticulous restoration of the exterior facade, preserving architectural details while reinforcing structural integrity and modernizing the curb appeal.",
      caseStudy: {
        h1: "A Historic Exterior Restoration in Doylestown, PA — Curb Appeal Backed by Structural Craftsmanship",
        location: "Doylestown, Bucks County, PA",
        projectType: "Historic Exterior Restoration",
        clientGoal: "Restore an aging facade to period-accurate character while correcting structural settlement and dramatically improving curb appeal.",
        challenges: [
          "Advanced rot in original siding and trim.",
          "Settlement at the front porch piers required structural correction before re-skinning.",
          "Period-accurate trim profiles were no longer stocked and had to be replicated.",
        ],
        solution: "Sistered and replaced rotted rim joists, corrected porch settlement, installed new house wrap with a rainscreen detail and properly lapped flashings, replicated original trim profiles in primed cellular PVC, applied a period-correct paint scheme, and installed new copper flashings and seamless aluminum gutters.",
        results: [
          "Final inspection cleared without comment.",
          "Structural settlement permanently corrected before any finish material touched the wall.",
          "Client describes the home as an anchor of the street.",
        ],
        narrative: [
          "A Doylestown homeowner asked Red Bridge Construction to restore an aging facade that had quietly slipped past the point of routine maintenance — soft trim, settled framing, weeping flashings. The goal was a curb-appeal transformation that preserved the home's period character. Doing that responsibly meant correcting the structure underneath before re-skinning anything visible.",
          "The gallery tells the full arc of the project. The before image shows the original elevation — peeling paint, dated trim profiles, and a roofline shedding water where it shouldn't. The mid-project angles document the work that's normally hidden: sistered rim joists, corrected settlement at the front porch, fresh house wrap with a rainscreen detail, and properly lapped flashings at every penetration. The closing images capture the finished facade — replicated period trim in primed cellular PVC, a period-accurate paint scheme, new copper flashings, and seamless gutters that finally carry water where it belongs.",
          "The structural corrections were where the safety and reliability of the project lived. We removed compromised cladding to inspect the framing, sistered and replaced rotted rim joists, addressed settlement at the porch piers, and re-flashed the wall-to-roof transitions to current code before any new siding touched the wall. The finish materials — cellular PVC, copper, and seamless aluminum gutters — were specified for craftsmanship that holds up to Bucks County weather decades after the paint is dry.",
          "Final inspection cleared without comment, and the client now describes the home as an anchor of the street. The transformation reads as cosmetic in the gallery, but the foundation of the result is the work no photograph can see.",
        ],
        metaDescription: "Red Bridge Construction restored a Doylestown home's exterior with period-accurate trim, corrected structural framing, and copper-clad craftsmanship in Bucks County.",
        images: [
          {
            src: "/portfolio/client_project_4-before.PNG",
            alt: "Before image of historic Doylestown home exterior showing peeling paint, dated trim, and failing flashings.",
            caption: "Before — peeling paint, dated trim profiles, and failing wall-to-roof flashings.",
          },
          {
            src: "/portfolio/client_project.jpg",
            alt: "Mid-project view of historic home exterior with new house wrap, rainscreen detail, and structural corrections in progress.",
            caption: "Mid-project — new house wrap, rainscreen detail, and structural corrections in progress.",
          },
          {
            src: "/portfolio/client_project_2/IMG_7285.jpg",
            alt: "Detail view of replicated period trim profiles in primed cellular PVC and new copper flashing.",
            caption: "Detail — replicated period trim profiles in cellular PVC and new copper flashing.",
          },
          {
            src: "/portfolio/client_project_3/IMG_7286.jpg",
            alt: "Restored facade angle showing period-accurate paint scheme and seamless aluminum gutters.",
            caption: "Restored facade — period-accurate paint scheme and seamless aluminum gutters.",
          },
          {
            src: "/portfolio/client_project_5.jpg",
            alt: "Final completed elevation of restored historic Doylestown home.",
            caption: "Final elevation — the finished restoration in full view.",
          },
        ],
      },
    },
    {
      title: "Gourmet Kitchen Build",
      slug: "gourmet-kitchen-remodel-new-hope",
      category: "Kitchen",
      image: "/portfolio/kitchen_remodel.png",
      description: "Chef-grade kitchen build featuring marble waterfall island, custom range hood, and handcrafted open shelving.",
      caseStudy: {
        h1: "A Gourmet Kitchen Remodel in New Hope, PA — Chef-Grade Build with Waterfall Marble and Custom Plaster",
        location: "New Hope, Bucks County, PA",
        projectType: "Chef-Grade Kitchen Renovation",
        clientGoal: "Build a kitchen worthy of a serious home cook — a marble waterfall island, custom plaster range hood, handcrafted open shelving, and an open-plan layout that hosts without losing prep space.",
        challenges: [
          "A load-bearing wall stood between the original kitchen and the planned open-plan layout.",
          "Gas, water, and electrical lines all had to be rerouted to a new range location.",
          "The waterfall island required a single bookmatched slab and reinforced substrate to carry it.",
        ],
        solution: "Engineered LVL header to replace the load-bearing wall, rerouted gas with pressure-tested lines, ran dedicated 240V appliance circuits, replumbed supply and waste for the new island layout, reinforced substrate framing under the waterfall, custom plaster range hood with integrated lighting, and handcrafted white-oak open shelving.",
        results: [
          "Passed structural and mechanical inspections without rework.",
          "Delivered on the agreed schedule.",
          "Open-plan layout now anchors the home's daily living and entertaining.",
        ],
        narrative: [
          "A New Hope homeowner asked Red Bridge Construction to build a kitchen worthy of a serious home cook — a marble waterfall island, a custom range hood, handcrafted open shelving, and the open-plan layout to host friends without losing the prep work. Delivering that meant taking down a load-bearing wall, relocating utilities, and matching the design's precision with structural and code-level safety.",
          "The gallery image captures the finished space from the dining side of the room. The Calacatta-style waterfall island reads as a single, bookmatched slab — mitered at the seams to the point where the veining travels uninterrupted from countertop to fall. Above the relocated range, a custom plaster hood rises in a clean trapezoid, integrated lighting tucked beneath its lip. Handcrafted white-oak open shelving brackets the wall behind, and pro-grade fixtures finish the composition. Each angle of the room reflects deliberate craftsmanship — every reveal sized, every shadow line considered.",
          "The structural and mechanical work made the rest possible. We engineered an LVL header to replace the load-bearing wall, rerouted gas to the new range location, ran dedicated 240V circuits for the appliance package, and replumbed the supply and waste lines for the new island layout. The marble waterfall required reinforced substrate framing under the cabinetry to carry the load without deflection. Safety reviews — gas-line pressure testing, GFCI verification, and structural inspection of the new header — were completed before any finish material went in.",
          "The kitchen passed structural and mechanical inspections without rework, finished on the agreed schedule, and now serves as the home's daily anchor. Reliability and craftsmanship aren't features of the build — they're the build.",
        ],
        metaDescription: "Red Bridge Construction built a chef-grade New Hope kitchen with a Calacatta-style waterfall island, custom plaster hood, and load-bearing wall craftsmanship.",
        images: [
          {
            src: "/portfolio/kitchen_remodel.png",
            alt: "Completed gourmet kitchen featuring Calacatta-style marble waterfall island, custom plaster range hood, and handcrafted white-oak open shelving.",
            caption: "Finished kitchen from the dining side — waterfall island, custom plaster hood, white-oak shelving.",
          },
        ],
      },
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
