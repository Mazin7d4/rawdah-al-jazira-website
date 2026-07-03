export interface Service {
  slug: string;
  /** Full title used on the detail page */
  title: string;
  /** Short title for cards, nav and the contact form dropdown */
  shortTitle: string;
  /** Lucide icon key — resolved in ServiceIcon.tsx */
  icon: string;
  /** One-line summary for cards and metadata */
  excerpt: string;
  /** Detail-page introduction, one string per paragraph */
  intro: string[];
  /** "What's included" checklist */
  included: string[];
  /** Facility types this service suits */
  idealFor: string[];
}

export const services: Service[] = [
  {
    slug: "school-college-university-cleaning",
    title: "School, College & University Cleaning",
    shortTitle: "Schools & Universities",
    icon: "graduation-cap",
    excerpt:
      "Hygienic, distraction-free campuses — classrooms, labs, libraries and halls cleaned around your academic calendar.",
    intro: [
      "Educational institutions carry a duty of care that ordinary cleaning contracts rarely understand. Thousands of students move through classrooms, laboratories, cafeterias and sports facilities every day, and every surface they touch reflects on your institution's standards.",
      "Our campus teams work around timetables — early mornings, evenings, weekends and term breaks — so learning is never interrupted. Staff are vetted, uniformed and trained for child-safe conduct, and supervisors run scheduled inspections with documented checklists.",
    ],
    included: [
      "Daily classroom, corridor and staff-room cleaning",
      "Laboratory and workshop cleaning with appropriate protocols",
      "Cafeteria and food-court sanitation",
      "Washroom deep cleaning and consumables replenishment",
      "Library, auditorium and prayer-room care",
      "Sports halls, changing rooms and outdoor areas",
      "Term-break deep cleans and floor restoration",
      "High-touch-point disinfection programmes",
    ],
    idealFor: [
      "Universities and colleges",
      "Private and public schools",
      "Nurseries and early-learning centres",
      "Training institutes and academies",
    ],
  },
  {
    slug: "hospital-clinic-cleaning",
    title: "Hospital & Clinic Cleaning",
    shortTitle: "Hospitals & Clinics",
    icon: "stethoscope",
    excerpt:
      "Clinical-grade cleaning and disinfection for healthcare environments where hygiene is non-negotiable.",
    intro: [
      "Healthcare facilities demand a discipline of cleaning that goes far beyond appearance. Waiting areas, consultation rooms, treatment areas and washrooms must meet infection-control expectations every single day.",
      "Our healthcare teams follow strict colour-coded equipment protocols, use hospital-grade disinfectants and are trained in safe conduct around patients and medical equipment. Cleaning schedules are built with your facility management to cover peak and quiet hours appropriately.",
    ],
    included: [
      "Reception, waiting-area and corridor cleaning",
      "Consultation and treatment room sanitation",
      "Hospital-grade disinfection of high-touch surfaces",
      "Colour-coded equipment to prevent cross-contamination",
      "Washroom hygiene with medical-standard consumables",
      "Pharmacy, laboratory and admin-area cleaning",
      "Discreet, patient-aware daytime service",
      "Documented cleaning logs for compliance audits",
    ],
    idealFor: [
      "Hospitals and day-surgery centres",
      "Clinics and polyclinics",
      "Dental and dermatology practices",
      "Diagnostic laboratories and pharmacies",
    ],
  },
  {
    slug: "government-private-office-cleaning",
    title: "Government & Private Office Cleaning",
    shortTitle: "Offices",
    icon: "landmark",
    excerpt:
      "Immaculate workplaces for government entities and corporate offices — daily service that stays invisible to your business.",
    intro: [
      "An office is a statement to every visitor, client and employee who walks in. Government entities and corporate headquarters alike need cleaning partners who are punctual, discreet, security-conscious and consistent.",
      "We provide uniformed, background-checked cleaners on fixed schedules — before hours, after hours or stationed on-site through the day. Supervisors audit quality against agreed checklists, and one point of contact manages your account.",
    ],
    included: [
      "Daily workstation, meeting-room and reception cleaning",
      "Pantry and kitchen sanitation",
      "Washroom servicing throughout the day",
      "Carpet vacuuming and hard-floor care",
      "Glass partition and internal window cleaning",
      "Waste management and recycling segregation",
      "High-touch-point disinfection (lifts, handles, switches)",
      "Stationed day cleaners for larger premises",
    ],
    idealFor: [
      "Government departments and public entities",
      "Corporate headquarters and free-zone offices",
      "Banks and professional firms",
      "Co-working spaces and business centres",
    ],
  },
  {
    slug: "commercial-center-cleaning",
    title: "Commercial Center Cleaning",
    shortTitle: "Commercial Centers",
    icon: "building-2",
    excerpt:
      "Complete common-area care for commercial towers and business complexes — lobbies, lifts, facades and everything between.",
    intro: [
      "A commercial building is judged in its first ten metres: the entrance, the lobby marble, the lifts. Tenants pay for a building that looks managed, and building owners need a cleaning partner who protects that impression around the clock.",
      "We service commercial towers and mixed-use complexes end to end — daily common-area cleaning, scheduled floor restoration and rapid-response teams for spills and incidents — under a single accountable contract.",
    ],
    included: [
      "Lobby, atrium and entrance cleaning",
      "Lift cab and escalator cleaning",
      "Common corridor and stairwell care",
      "Marble and hard-floor polishing programmes",
      "Parking area sweeping and pressure washing",
      "Waste room management",
      "Signage, railing and glass cleaning",
      "Rapid-response day teams for incidents",
    ],
    idealFor: [
      "Commercial towers and office buildings",
      "Mixed-use complexes",
      "Business parks and warehouses",
      "Building owners' associations",
    ],
  },
  {
    slug: "building-post-construction-cleaning",
    title: "Building & Post-Construction Cleaning",
    shortTitle: "Post-Construction",
    icon: "hard-hat",
    excerpt:
      "From site dust to handover-ready — deep builders' cleans that make new and renovated spaces presentable and safe.",
    intro: [
      "The last trade on any project is the cleaning team, and handover dates don't move. Post-construction cleaning is heavy, technical work: cement residue, paint splatter, adhesive marks, protective-film removal and fine dust in every cavity.",
      "Our post-construction crews arrive with industrial equipment and a phased plan — rough clean, detailed clean and final sparkle clean — so consultants and clients walk into a finished building, not a construction site.",
    ],
    included: [
      "Removal of construction dust and debris",
      "Cement, paint, adhesive and sticker-residue removal",
      "Protective-film and label removal",
      "Internal glass and window cleaning",
      "Floor scrubbing, buffing and first polish",
      "Sanitisation of washrooms and pantries",
      "Detailed cleaning of fixtures, doors and joinery",
      "Final sparkle clean before handover",
    ],
    idealFor: [
      "Contractors and developers at handover",
      "Newly fitted-out offices and retail units",
      "Renovated villas and apartments",
      "Facility managers receiving new buildings",
    ],
  },
  {
    slug: "mosque-worship-place-cleaning",
    title: "Mosque & Worship Place Cleaning",
    shortTitle: "Mosques & Worship Places",
    icon: "moon-star",
    excerpt:
      "Respectful, meticulous care for mosques and places of worship — carpets, ablution areas and prayer halls kept pristine.",
    intro: [
      "A place of worship deserves a standard of cleanliness that honours its purpose. Prayer halls, carpets, ablution facilities and courtyards see constant use and require gentle, thorough and respectful care.",
      "Our teams are trained in the etiquette of working inside mosques and worship places — scheduling around prayer times, handling carpets and Qur'an shelving with care, and keeping wudu areas hygienic and dry throughout the day.",
    ],
    included: [
      "Prayer-hall carpet vacuuming and periodic shampooing",
      "Ablution (wudu) area cleaning and sanitisation",
      "Washroom deep cleaning and consumables",
      "Entrance, shoe-rack and courtyard cleaning",
      "Chandelier, fan and high-level dusting",
      "Glass, mihrab and minbar detail care",
      "Scheduling built around the five daily prayers",
      "Ramadan and Eid intensive cleaning programmes",
    ],
    idealFor: [
      "Mosques and musallas",
      "Churches and temples",
      "Community and cultural centres",
      "Religious event venues",
    ],
  },
  {
    slug: "shopping-center-cleaning",
    title: "Shopping Center Cleaning",
    shortTitle: "Shopping Centers",
    icon: "shopping-bag",
    excerpt:
      "Retail-standard presentation for malls and shopping destinations — gleaming floors and spotless amenities at any footfall.",
    intro: [
      "In retail, cleanliness is part of the customer experience. A shopper who notices the floors has already formed an opinion about the mall — and about every brand inside it. High footfall, food courts and long trading hours make this one of the most demanding cleaning environments there is.",
      "We run stationed day-and-evening teams for malls and shopping centres: continuous patrol cleaning on the shop floor, intensive night programmes for floor care, and washroom attendants who keep amenities flawless through peak weekends.",
    ],
    included: [
      "Continuous patrol cleaning during trading hours",
      "Food-court table clearing and sanitation",
      "Washroom attendants and hourly checks",
      "Escalator, travelator and lift cleaning",
      "Night scrubbing and polishing of mall floors",
      "Entrance glass and storefront-line cleaning",
      "Parking and service-corridor cleaning",
      "Waste compaction and back-of-house management",
    ],
    idealFor: [
      "Shopping malls and retail destinations",
      "Community and strip malls",
      "Hypermarkets and department stores",
      "Souks and retail promenades",
    ],
  },
  {
    slug: "park-cleaning",
    title: "Park Cleaning",
    shortTitle: "Parks & Outdoor Areas",
    icon: "trees",
    excerpt:
      "Clean, welcoming parks and outdoor public spaces — litter control, washroom care and facility cleaning in all seasons.",
    intro: [
      "Parks are where the city meets its residents, and their upkeep is visible to everyone. Litter, overflowing bins and neglected washrooms undo the work of the best landscaping in a single afternoon.",
      "Our outdoor teams handle litter picking, bin servicing, pathway sweeping, washroom and kiosk cleaning, and post-event recovery for parks, promenades and community spaces — with schedules tuned to weekends and public holidays when footfall peaks.",
    ],
    included: [
      "Litter picking and bin emptying rounds",
      "Pathway and plaza sweeping",
      "Public washroom cleaning and restocking",
      "Playground and seating-area sanitisation",
      "BBQ and picnic area cleaning",
      "Water-feature surround care",
      "Post-event and weekend recovery cleans",
      "Pressure washing of hard surfaces",
    ],
    idealFor: [
      "Public parks and community spaces",
      "Beaches, promenades and walkways",
      "Residential community amenities",
      "Municipalities and community developers",
    ],
  },
  {
    slug: "villa-compound-cleaning",
    title: "Villa & Compound Cleaning",
    shortTitle: "Villas & Compounds",
    icon: "home",
    excerpt:
      "Five-star housekeeping for private villas and residential compounds — trusted staff, ladies and gents, on flexible schedules.",
    intro: [
      "Your home deserves the same professionalism we bring to Dubai's commercial landmarks. Villa and compound cleaning is about trust as much as quality — the same vetted, uniformed cleaner arriving on schedule, week after week.",
      "We offer both ladies and gents cleaners on monthly and yearly arrangements, covering everything from routine housekeeping to seasonal deep cleans, and full common-area care for residential compounds and gated communities.",
    ],
    included: [
      "Routine housekeeping on your schedule",
      "Kitchen and bathroom deep cleaning",
      "Bedroom and living-area detailing",
      "Internal window and balcony cleaning",
      "Compound common-area and gym cleaning",
      "Pool-surround and outdoor-majlis care",
      "Move-in / move-out deep cleans",
      "Same assigned cleaner for regular visits",
    ],
    idealFor: [
      "Private villas and townhouses",
      "Residential compounds and gated communities",
      "Holiday homes and serviced apartments",
      "Property management companies",
    ],
  },
  {
    slug: "hotel-cleaning",
    title: "Hotel Cleaning",
    shortTitle: "Hotels",
    icon: "bed-double",
    excerpt:
      "Hospitality-grade support cleaning for hotels — public areas, back of house and outsourced housekeeping that meets brand standards.",
    intro: [
      "In hospitality, a single overlooked detail becomes a review. Hotels run on presentation, and every lobby, corridor, restaurant and washroom must hold five-star standards around the clock.",
      "We support hotels and hotel apartments with trained housekeeping teams — public-area cleaning, marble and floor-care programmes, back-of-house cleaning and flexible manpower to absorb occupancy peaks — all delivered to your brand's standard operating procedures.",
    ],
    included: [
      "Lobby and public-area presentation cleaning",
      "Restaurant, banquet and pre-function area care",
      "Marble polishing and floor-care programmes",
      "Public washroom attendants",
      "Back-of-house, kitchen and staff-area cleaning",
      "Glass, facade-line and entrance cleaning",
      "Housekeeping manpower for occupancy peaks",
      "Overnight deep-cleaning programmes",
    ],
    idealFor: [
      "Hotels and resorts",
      "Hotel apartments and serviced residences",
      "Restaurants and banquet venues",
      "Hospitality management groups",
    ],
  },
  {
    slug: "marble-polishing",
    title: "Marble Polishing",
    shortTitle: "Marble Polishing",
    icon: "sparkles",
    excerpt:
      "Diamond polishing, honing and restoration that returns marble, granite and natural stone to a mirror finish.",
    intro: [
      "Dubai is built on marble — and marble is unforgiving. Foot traffic, spills and poor maintenance leave etching, dullness and scratches that ordinary mopping can never reverse.",
      "Our stone-care specialists restore natural stone with diamond-pad grinding, honing, polishing and crystallisation, then protect it with sealing and a maintenance programme that keeps lobbies, flooring and countertops at a mirror finish year-round. This is craftsman work — in all places, from villa entrances to mall atriums.",
    ],
    included: [
      "Diamond grinding to remove scratches and lippage",
      "Honing to an even, refined surface",
      "Polishing and crystallisation to mirror finish",
      "Penetrating sealing against stains",
      "Grout cleaning and colour restoration",
      "Granite, terrazzo and limestone care",
      "Countertop and vanity restoration",
      "Scheduled maintenance polishing programmes",
    ],
    idealFor: [
      "Hotel and tower lobbies",
      "Malls and commercial centres",
      "Villas and private residences",
      "Mosques, showrooms and galleries",
    ],
  },
  {
    slug: "event-management-cleaning",
    title: "Event Management Cleaning",
    shortTitle: "Events",
    icon: "party-popper",
    excerpt:
      "Before, during and after — discreet event cleaning crews that keep venues immaculate and turn them around overnight.",
    intro: [
      "Events are judged in the moment, and there are no second chances. From conferences and exhibitions to weddings and public festivals, the venue must be immaculate at doors-open, maintained invisibly while guests are inside, and recovered fast when they leave.",
      "We field dedicated event crews — pre-event preparation, discreet during-event teams for washrooms and floors, and rapid post-event turnarounds that hand the venue back ready for the next day's programme.",
    ],
    included: [
      "Pre-event venue preparation and detailing",
      "Discreet during-event cleaning teams",
      "Washroom attendants for guest areas",
      "Backstage and hospitality-suite care",
      "Rapid post-event clear-up and waste removal",
      "Overnight venue turnarounds",
      "Furniture and equipment wipe-downs",
      "Ladies and gents staff to suit the occasion",
    ],
    idealFor: [
      "Conferences and exhibitions",
      "Weddings and private functions",
      "Festivals and public events",
      "Event agencies and venue operators",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
