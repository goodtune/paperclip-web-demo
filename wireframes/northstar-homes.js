/* NorthStar Homes — Website Redesign Wireframes
   Prepared by Paperclip Web, April 2026
   Fictional client for demonstration purposes */

window.WF_PROJECT = {
  id: "northstar-homes",
  client: "NorthStar Homes",
  project: "Website Redesign",
  preparedBy: "Paperclip Web",
  date: "April 2026",
  status: "For Review",
  description: "Full redesign of northstarhomes.com.au — 4 key screens covering the core user journey from discovery through to agent contact.",

  frames: [

    /* ── FRAME 1: HOMEPAGE ─────────────────────────────── */
    {
      id: "homepage",
      title: "Homepage",
      components: [
        {
          type: "navbar",
          props: { logo: "NorthStar Homes", links: ["Buy", "Rent", "Sell", "Agents", "Blog"], cta: "List with us" }
        },
        {
          type: "hero-search",
          annotation: 1,
          props: { heading: "Find your perfect home", sub: "Search 12,400+ properties across Australia", tabs: ["Buy", "Rent"] }
        },
        {
          type: "stats-bar",
          annotation: 2,
          props: { stats: ["12,400+ Properties", "3,200+ Agents", "$2.4B Sold", "Est. 2008"] }
        },
        {
          type: "section-title",
          props: { title: "Featured Properties", sub: "Handpicked by our top agents this week" }
        },
        {
          type: "card-grid",
          annotation: 3,
          props: { cols: 3, count: 6, variant: "property" }
        },
        {
          type: "promo-split",
          annotation: 4,
          props: {
            heading: "Why choose NorthStar?",
            items: [
              { icon: "◈", title: "Market-leading agents", body: "Over 3,200 accredited agents Australia-wide" },
              { icon: "◉", title: "Free property valuation", body: "Instant AI estimate + expert agent appraisal" },
              { icon: "◎", title: "Award-winning app", body: "Property alerts, saved searches, open home tracking" }
            ]
          }
        },
        {
          type: "cta-banner",
          annotation: 5,
          props: { heading: "Ready to sell?", sub: "Get a free property appraisal from a local expert", cta: "Book an appraisal" }
        },
        {
          type: "footer",
          props: { cols: ["Company", "Properties", "Agents", "Resources"] }
        }
      ],
      annotations: [
        { id: 1, text: "Hero search: full-bleed background image. Tab toggles Buy / Rent. Search by suburb, postcode or address — autocomplete suggestions from the property database." },
        { id: 2, text: "Social proof strip: 4 stats auto-populated from live data. Updates monthly. Light background to break the visual flow before listings." },
        { id: 3, text: "Featured property cards: 6 cards in 3-col grid. Each shows photo, suburb, price, bed/bath/car icons, and agent name. Heart icon saves to shortlist. Cards link to Property Detail." },
        { id: 4, text: "Three-column value proposition. Icon box, heading, and 2-line description per column. Icons use the brand mark set." },
        { id: 5, text: "Seller CTA banner: contrasting background. Primary CTA routes to agent contact form pre-filled with 'Book appraisal' intent." }
      ]
    },

    /* ── FRAME 2: PROPERTY LISTINGS ────────────────────── */
    {
      id: "listings",
      title: "Property Listings",
      components: [
        {
          type: "navbar",
          props: { logo: "NorthStar Homes", links: ["Buy", "Rent", "Sell", "Agents", "Blog"], cta: "List with us" }
        },
        {
          type: "breadcrumb",
          props: { crumbs: ["Home", "Buy", "Sydney NSW"] }
        },
        {
          type: "listings-layout",
          annotation: 1,
          props: {
            resultCount: "348 properties in Sydney NSW",
            filters: [
              { label: "Price Range", type: "range", hint: "$400k – $2.5M" },
              { label: "Bedrooms", type: "pills", opts: ["Any", "1+", "2+", "3+", "4+"] },
              { label: "Property Type", type: "checks", opts: ["House", "Unit / Apt", "Townhouse", "Land"] },
              { label: "Bathrooms", type: "pills", opts: ["Any", "1+", "2+", "3+"] },
              { label: "Car Spaces", type: "pills", opts: ["Any", "1+", "2+"] },
              { label: "Land Size", type: "range", hint: "0 m² – 2,000 m²" }
            ],
            sortOpts: ["Newest First", "Price: Low – High", "Price: High – Low", "Most Relevant"],
            cardCount: 9,
            annotation: { filters: 2, sort: 3, cards: 4 }
          }
        },
        {
          type: "pagination",
          annotation: 5,
          props: { current: 1, total: 18 }
        },
        {
          type: "footer",
          props: { cols: ["Company", "Properties", "Agents", "Resources"] }
        }
      ],
      annotations: [
        { id: 1, text: "Listings page: 2-col layout — 280px sticky filter sidebar left, results main area right. URL updates on every filter change so results are shareable." },
        { id: 2, text: "Filter sidebar: price as dual-handle range slider. Bedrooms/bathrooms/cars as pill toggles. Property type as checkboxes. 'Clear filters' resets all. Filter count badge on mobile drawer toggle." },
        { id: 3, text: "Sort + view toggle row: result count on left, sort dropdown and list/map view icons on right. Map view renders results on an interactive map with list overlay." },
        { id: 4, text: "Property cards: 3-col grid, 9 per page visible (20 in data). Each card: photo, suburb + address, price, bed/bath/car stats, agent name. Heart saves to shortlist. Hover shows subtle elevation." },
        { id: 5, text: "Pagination: numbered with prev/next arrows. Shows up to 7 page numbers with ellipsis for large ranges. 20 results per page." }
      ]
    },

    /* ── FRAME 3: PROPERTY DETAIL ───────────────────────── */
    {
      id: "property-detail",
      title: "Property Detail",
      components: [
        {
          type: "navbar",
          props: { logo: "NorthStar Homes", links: ["Buy", "Rent", "Sell", "Agents", "Blog"], cta: "List with us" }
        },
        {
          type: "breadcrumb",
          props: { crumbs: ["Home", "Buy", "Sydney NSW", "Surry Hills", "12 Cooper St"] }
        },
        {
          type: "photo-gallery",
          annotation: 1,
          props: { mainHeight: 420, thumbCount: 5 }
        },
        {
          type: "detail-layout",
          props: {
            main: [
              {
                type: "property-title",
                annotation: 2,
                props: { address: "12 Cooper Street, Surry Hills NSW 2010", price: "$1,850,000", stats: ["3 bed", "2 bath", "1 car", "210 m²"] }
              },
              {
                type: "text-section",
                annotation: 3,
                props: { heading: "About this property", lines: 7 }
              },
              {
                type: "feature-list",
                props: { heading: "Features & Inclusions", count: 10 }
              },
              {
                type: "map-block",
                annotation: 4,
                props: { height: 300, toggles: ["Schools", "Transport", "Shops", "Cafés"] }
              }
            ],
            sidebar: [
              {
                type: "enquiry-form",
                annotation: 5,
                props: { fields: ["Full Name", "Email", "Phone", "Message"], cta: "Send Enquiry" }
              },
              {
                type: "agent-card",
                annotation: 6,
                props: { name: "Sarah Mitchell", title: "Senior Sales Agent", agency: "NorthStar Surry Hills", initials: "SM" }
              }
            ]
          }
        },
        {
          type: "section-title",
          props: { title: "Similar Properties", sub: "You might also like" }
        },
        {
          type: "card-grid",
          props: { cols: 3, count: 3, variant: "property" }
        },
        {
          type: "footer",
          props: { cols: ["Company", "Properties", "Agents", "Resources"] }
        }
      ],
      annotations: [
        { id: 1, text: "Photo gallery: 1 large hero image + row of 5 thumbnails. '+12 more' badge on the last thumb. Clicking any image opens a full-screen lightbox. Swipe-enabled on mobile." },
        { id: 2, text: "Property header: address, price, and 4 key stat pills (bed/bath/car/land). Share and save icons right-aligned. 'For Sale' status badge top-left." },
        { id: 3, text: "Description (~300 words) followed by 2-col feature list with check icons. 'Show more' expands if over 150 words." },
        { id: 4, text: "Embedded interactive map. Toggle buttons surface nearby amenities by category. Uses OpenStreetMap to avoid Google Maps billing." },
        { id: 5, text: "Enquiry form: sticky on desktop (scrolls with page to viewport edge). Collapses to a floating 'Enquire' FAB on mobile. Form posts to agent CRM." },
        { id: 6, text: "Agent card below the form: avatar, name, title, agency. Click-to-call and click-to-email links. 'View profile' routes to Agent Profile page." }
      ]
    },

    /* ── FRAME 4: AGENT PROFILE ─────────────────────────── */
    {
      id: "agent-profile",
      title: "Agent Profile",
      components: [
        {
          type: "navbar",
          props: { logo: "NorthStar Homes", links: ["Buy", "Rent", "Sell", "Agents", "Blog"], cta: "List with us" }
        },
        {
          type: "agent-hero",
          annotation: 1,
          props: {
            name: "Sarah Mitchell",
            title: "Senior Sales Agent",
            agency: "NorthStar Surry Hills",
            tags: ["Inner West", "Eastern Suburbs", "Off-Market Sales"],
            initials: "SM"
          }
        },
        {
          type: "stats-bar",
          annotation: 2,
          props: { stats: ["47 Sales this year", "Avg 18 days on market", "$62M total volume", "★ 4.9 / 83 reviews"] }
        },
        {
          type: "section-title",
          props: { title: "Current Listings", sub: "12 active properties" }
        },
        {
          type: "card-grid",
          annotation: 3,
          props: { cols: 3, count: 3, variant: "property" }
        },
        {
          type: "section-title",
          props: { title: "Recent Sales", sub: "Sold in the last 12 months" }
        },
        {
          type: "card-grid",
          annotation: 4,
          props: { cols: 4, count: 4, variant: "sold" }
        },
        {
          type: "testimonials",
          annotation: 5,
          props: { count: 3 }
        },
        {
          type: "contact-form",
          annotation: 6,
          props: {
            heading: "Get in touch with Sarah",
            fields: ["Full Name", "Email Address", "Phone Number", "I'm looking to…", "Message"],
            cta: "Send Message"
          }
        },
        {
          type: "footer",
          props: { cols: ["Company", "Properties", "Agents", "Resources"] }
        }
      ],
      annotations: [
        { id: 1, text: "Agent hero: large photo left, bio and contact right. Name, title, agency name with logo. Specialty tags. Call and email CTAs. Social links (LinkedIn, Instagram)." },
        { id: 2, text: "Performance stats strip: pulled from CRM, updated monthly. Clicking '83 reviews' anchors to the testimonials section below." },
        { id: 3, text: "Active listings in 3-col grid. 'View all 12 listings' link routes to search results filtered to this agent." },
        { id: 4, text: "Recent sold properties: 4-col grid, sold price and date shown, 'SOLD' banner overlay on photo." },
        { id: 5, text: "3 featured testimonials: star rating, quote, client name, and sold property address. 'Read all 83 reviews' link below." },
        { id: 6, text: "Contact form: routes directly to agent's CRM record. 'I'm looking to…' dropdown pre-filters the CRM lead type (Buy / Sell / Appraisal / Other)." }
      ]
    }

  ] /* end frames */
};
