// All user-visible copy, prices and image references for the site.
// Components import from here; edit this file to update content.

export const site = {
  title: "Silva Homestay & Bike Rental | Stay & Explore Anuradhapura",
  description:
    "Stay comfortably in Anuradhapura with air-conditioned rooms, bike rental and convenient packages for exploring the sacred city and Mihintale.",
} as const;

export const brand = {
  name: "Silva Homestay & Bike Rental",
  line1: "Silva Homestay",
  line2: "& Bike Rental",
  logo: { src: "/images/silva-logo.png", alt: "Silva Homestay & Bike Rental logo" },
  footerBlurb: "Comfortable homestay accommodation and bike rental in Anuradhapura, Sri Lanka.",
  location: "Anuradhapura, Sri Lanka",
} as const;

// TODO(client): the flyers show silvahomestayandbikerental@gmail.com — confirm which address is live.
export const WHATSAPP_BUSINESS_NUMBER = "94761386213";

export const contact = {
  phoneDisplay: "076 138 6213",
  phoneHref: "tel:+94761386213",
  whatsappNumber: WHATSAPP_BUSINESS_NUMBER,
  whatsappHref: `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}`,
  email: "silvahomestayandrental@gmail.com",
  emailHref: "mailto:silvahomestayandrental@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61591577745265",
} as const;

export const nav = [
  { href: "#stay", label: "Rooms" },
  { href: "#packages", label: "Packages" },
  { href: "#explore", label: "Bike rental" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
] as const;

export const headerCta = "Book Your Stay";

export const footerNav = nav.filter((n) => n.href !== "#facilities");

// Package option values double as the enquiry-form <select> values.
export const PKG_ROOM = "Room — from Rs. 4,500";
export const PKG_ROOM_BIKE = "Room + Bike Rental Package — Rs: 5500.00";
export const PKG_SACRED_CITY = "Sacred City / Mihintale Bike Package — Rs. 2,000";
export const packageOptions = [PKG_ROOM, PKG_ROOM_BIKE, PKG_SACRED_CITY] as const;

export const hero = {
  eyebrow: "Homestay & Bike Rental · Anuradhapura",
  headlineLead: "Stay comfortably. Explore",
  headlineAccent: "Anuradhapura freely.",
  copy:
    "Enjoy a clean, peaceful and comfortable stay while exploring Anuradhapura at your own pace with convenient bike rental available directly from your homestay.",
  primaryCta: "Book Your Stay",
  secondaryCta: "Explore Our Packages",
  chips: ["A/C rooms", "Bike rental", "Free parking", "Sacred City & Mihintale"],
  rateLabel: "Rooms from",
  rate: "Rs. 4,500",
  image: {
    src: "/images/photos/lounge-hero.jpg",
    alt: "Bright guest lounge at Silva Homestay & Bike Rental in Anuradhapura, with tropical leaf wallpaper, patterned sofas and a carved doorway to the balcony",
  },
} as const;

export const pillars = [
  { kicker: "01 · Stay", title: "Comfortable A/C rooms", copy: "Clean, quiet rooms starting from Rs. 4,500" },
  { kicker: "02 · Ride", title: "Bike rental at the homestay", copy: "No waiting for transport — your bike is right here" },
  { kicker: "03 · Explore", title: "Anuradhapura & Mihintale", copy: "Sacred sites and historic landmarks, at your own pace" },
] as const;

export const welcome = {
  eyebrow: "Welcome",
  title: "Welcome to Silva Homestay & Bike Rental",
  paragraphs: [
    "Whether you're visiting Anuradhapura's sacred sites or simply looking for a peaceful getaway with your loved ones, Silva Homestay & Bike Rental gives you a comfortable place to stay and an easy way to explore the city.",
    "Enjoy a clean, relaxing and welcoming environment, with convenient bike rental that lets you discover Anuradhapura at your own pace.",
  ],
  image: {
    src: "/images/photos/lounge-wide.jpg",
    alt: "Spacious tiled guest lounge at Silva Homestay with sofas, a dark wooden coffee table, navy curtains and doors to the balcony",
  },
  highlights: ["Clean, peaceful setting", "Easy access to the Sacred City", "Bike rental available onsite"],
} as const;

// TODO(client): confirm whether Rs. 4,500 is per night, room count and any room types.
export const rooms = {
  eyebrow: "Our accommodation",
  title: "Rest well after a day of exploring.",
  copy: "Clean, air-conditioned rooms with fresh linen, a kettle and tea tray, and a quiet place to rest after a day at the sacred sites.",
  chips: ["Air-conditioned", "Double bed", "Kettle & tea tray"],
  rateLabel: "Rooms starting from",
  rate: "Rs. 4,500",
  cta: "Book Your Stay",
  images: {
    main: { src: "/images/photos/room-double-bed.jpg", alt: "Air-conditioned guest room with a double bed, blue cushions and fresh towels, a desk with kettle and tea tray, and navy curtains", position: "50% 50%" },
    ac: { src: "/images/photos/tea-station.jpg", alt: "Wooden table with an electric kettle, cups, glasses and a tea tray in a guest room", position: "50% 50%" },
    bath: { src: "/images/photos/bathroom-modern.jpg", alt: "Clean tiled bathroom with rain shower, basin and toilet", position: "50% 55%" },
  },
  details: [
    { title: "Comfortable A/C Room", copy: "A calm, private room with a double bed and fresh linen." },
    { title: "Tea tray in your room", copy: "A kettle and simple tea setup are ready when you arrive." },
    { title: "Clean bathroom", copy: "A bright, carefully maintained space to refresh." },
  ],
} as const;

export const packagesSection = {
  eyebrow: "Packages",
  title: "Stay, ride, or both.",
  copy: "Two simple packages for exploring Anuradhapura. Contact us to confirm your dates — nothing is charged online.",
  cta: "Ask about a package",
  select: "Select package",
} as const;

export const packages = [
  {
    badge: "Package 01",
    featured: true,
    title: "Room + Bike Rental Package",
    paragraphs: [
      "Stay in a comfortable air-conditioned room and enjoy the convenience of having a bike available for your travels.",
      "Accommodation and transportation come together in one convenient package, giving you more freedom to explore Anuradhapura on your own schedule.",
    ],
    chips: ["A/C Room", "Bike Rental", "Convenient Stay & Travel"],
    extraChip: null,
    priceLabel: "Package",
    price: "Rs: 5500.00",
    value: PKG_ROOM_BIKE,
    image: {
      src: "/images/photos/veranda-scooter.jpg",
      alt: "Upstairs veranda at Silva Homestay overlooking the garden, with a rental scooter parked in the courtyard below",
      position: "50% 88%",
    },
  },
  {
    badge: "Package 02",
    featured: false,
    title: "Sacred City / Mihintale Bike Package",
    paragraphs: [
      "Explore Anuradhapura's sacred city and Mihintale freely at your own pace, by bike. Visit important destinations including:",
    ],
    chips: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanaramaya", "Abhayagiri", "Mihintale"],
    extraChip: "+ other historic sites",
    priceLabel: "Bike package",
    price: "Rs. 2,000",
    value: PKG_SACRED_CITY,
    image: {
      src: "/images/photos/sacred-city-stupa.avif",
      alt: "Aradhana Gala rock at Mihintale with a white stupa and Buddhist flags in the foreground",
      position: "50% 50%",
    },
  },
] as const;

export const bikeRental = {
  eyebrow: "Stay. Ride. Explore.",
  title: "Explore Anuradhapura your way.",
  copy:
    "Skip the rush and experience Anuradhapura at your own pace. With bike rental available directly from Silva Homestay, guests can conveniently visit sacred sites, historic landmarks and other attractions around the city.",
  primaryCta: "See bike packages",
  secondaryCta: "Call to reserve a bike",
  image: { src: "/images/photos/bikes.jpg", alt: "Rental motorbikes and scooters parked at Silva Homestay & Bike Rental" },
} as const;

export const placesSection = {
  eyebrow: "Explore Anuradhapura",
  title: "Places to explore by bike",
  copy: "Stay with us, take a bike and discover some of Anuradhapura's most remarkable sacred and historic landmarks at your own pace.",
  cardCta: "Explore place",
  strapTitle: "See more of Anuradhapura on two wheels.",
  strapCopy: "Ask us about our Sacred City / Mihintale Bike Package — Rs. 2,000.",
  strapCta: "Explore Bike Rental",
  modal: {
    history: "A little history",
    significance: "Why it matters",
    from: "From Silva Homestay",
    noDistance: "Ask us for directions and the best route when you collect your bike.",
    stop: "A great stop to include while exploring Anuradhapura by bike.",
    visiting: "Visiting respectfully",
    footer: "Bike rental available directly from Silva Homestay & Bike Rental.",
    viewPackage: "View Bike Package",
    exploreWithBike: "Explore with a Bike",
  },
} as const;

export type Destination = {
  id: string;
  name: string;
  label: string;
  category: string;
  image: string;
  imageAlt: string;
  cardPos: string;
  modalPos: string;
  /** Road distance from the homestay. null until the map pin is confirmed — the UI omits it. */
  distanceKm: number | null;
  /** Approximate cycling time in minutes. null until verified. */
  estimatedBikeTime: number | null;
  introduction: string;
  history: string;
  significance: string[];
  visitingNotes: string[];
};

// TODO(client): fact-check the histories (UNESCO / Central Cultural Fund) before launch,
// and add distanceKm / estimatedBikeTime once the homestay's map pin is confirmed.
export const destinations: Destination[] = [
  {
    id: "sri-maha-bodhi", name: "Jaya Sri Maha Bodhi", label: "Sacred Site", category: "Sacred City · Anuradhapura",
    image: "/images/destinations/sri-maha-bodhi.jpg", cardPos: "50% 50%", modalPos: "50% 30%",
    imageAlt: "Stone stairway with carved guardstones leading up to the shrine of the Jaya Sri Maha Bodhi tree in Anuradhapura",
    distanceKm: null, estimatedBikeTime: null,
    introduction: "A sacred fig tree grown from a branch of the tree at Bodh Gaya in India, under which the Buddha is said to have attained enlightenment. It is one of the most revered places of worship in Sri Lanka.",
    history: "According to Sri Lanka's ancient chronicles, a branch of the Bodhi tree at Bodh Gaya was brought to the island in the 3rd century BCE by the Buddhist nun Sanghamitta, daughter of the Indian emperor Ashoka. It was planted in the royal Mahamevna park in Anuradhapura by King Devanampiya Tissa, and has been tended by generations of guardians ever since. Terraces, walls and railings were added over the centuries to protect it. It is widely regarded as the oldest living tree planted by people with a recorded planting date.",
    significance: ["One of the most sacred Buddhist sites in Sri Lanka, visited by pilgrims every day", "A living link to the tree of the Buddha's enlightenment", "Considered the oldest human-planted tree with a recorded history", "At the heart of the Sacred City of Anuradhapura, a UNESCO World Heritage Site"],
    visitingNotes: ["Remove your shoes and hat before entering the temple grounds.", "Wear clothing that covers your shoulders and knees — white is traditional.", "It is an active place of worship, so keep voices low and give way to pilgrims.", "The ground gets hot by midday; early morning or late afternoon is most comfortable."],
  },
  {
    id: "ruwanwelisaya", name: "Ruwanwelisaya", label: "Great Stupa", category: "Sacred City · Anuradhapura",
    image: "/images/destinations/ruwanwelisaya.jpg", cardPos: "50% 90%", modalPos: "50% 88%",
    imageAlt: "Ruwanwelisaya's white dome and spire lit at dusk, framed by silhouetted trees",
    distanceKm: null, estimatedBikeTime: null,
    introduction: "A great white stupa, or dagoba, built to enshrine sacred relics. It is one of the most important places of Buddhist worship in the ancient city.",
    history: "Ruwanwelisaya was begun by King Dutugemunu (Dutthagamani) in the 2nd century BCE, after he brought the island under his rule. The chronicles say he did not live to see it finished, and it was completed by his brother, King Saddha Tissa. Also known as the Mahathupa, or Great Stupa, it was repaired by many later rulers. By the 19th century it had fallen into ruin, and a long restoration supported by Buddhist devotees through the late 19th and 20th centuries returned it to the gleaming white form seen today. A wall of sculpted elephants surrounds its terrace.",
    significance: ["Traditionally believed to enshrine relics of the Buddha", "Closely linked to King Dutugemunu, one of Sri Lanka's best-known ancient rulers", "Its elephant wall is one of the most recognisable sights in Anuradhapura", "An active place of worship, especially busy on full-moon Poya days"],
    visitingNotes: ["Remove shoes and hats before stepping onto the stupa terrace.", "Wear clothing that covers your shoulders and knees.", "Walk around the stupa clockwise, as is customary.", "The stone terrace gets very hot at midday — socks help."],
  },
  {
    id: "jetavanaramaya", name: "Jetavanaramaya", label: "Ancient Anuradhapura", category: "Sacred City · Anuradhapura",
    image: "/images/destinations/jetavanaramaya.jpg", cardPos: "50% 50%", modalPos: "50% 42%",
    imageAlt: "The red-brick dome of Jetavanaramaya with ancient stone pillars in the foreground",
    distanceKm: null, estimatedBikeTime: null,
    introduction: "A vast brick stupa at the centre of the ancient Jetavana monastery. When completed, it was one of the tallest structures in the ancient world.",
    history: "Jetavanaramaya was begun by King Mahasena in the 3rd century CE and completed after his death by his son, King Sirimeghavanna. It stood at the heart of the Jetavana monastery, one of the great monastic complexes of Anuradhapura. At its original height of around 120 metres, it is thought to have been the tallest stupa ever built, and one of the tallest structures of the ancient world after the two largest pyramids at Giza. Many millions of fired bricks went into its construction. After centuries of neglect, it has been carefully conserved in modern times.",
    significance: ["Thought to be the tallest stupa ever built", "A remarkable achievement of ancient brick engineering", "Part of the Jetavana monastery, one of Anuradhapura's major monastic centres"],
    visitingNotes: ["Remove shoes and hats before stepping onto the stupa terrace.", "Wear modest clothing that covers your shoulders and knees.", "There is little shade between the ruins — bring water and a hat for the ride."],
  },
  {
    id: "abhayagiri", name: "Abhayagiri", label: "Historic Monastery", category: "Sacred City · Anuradhapura",
    image: "/images/destinations/abhayagiri.jpg", cardPos: "45% 50%", modalPos: "50% 35%",
    imageAlt: "The brick Abhayagiri stupa with white shrines and a stone stairway at its base",
    distanceKm: null, estimatedBikeTime: null,
    introduction: "A huge monastery complex in the north of the ancient city, centred on the Abhayagiri stupa and spread across a wide, wooded archaeological area.",
    history: "Abhayagiri was founded by King Vattagamani Abhaya (Valagamba) in the 1st century BCE, after he regained his throne. It grew into one of the largest monasteries of the Anuradhapura period and a centre of learning with links across Asia. The Chinese monk Faxian, who stayed in Anuradhapura in the early 5th century CE, described thousands of monks living here. Abhayagiri was open to a wider range of Buddhist ideas than the older Mahavihara monastery, and its influence reached well beyond the island. Its ruins include the great stupa, bathing ponds, and finely carved guardstones and moonstones.",
    significance: ["One of the great centres of Buddhist learning in the ancient world", "Described by the Chinese pilgrim Faxian in the 5th century CE", "Home to some of Anuradhapura's finest stone carving", "A large, peaceful site that is well suited to exploring by bike"],
    visitingNotes: ["Remove shoes and hats at the stupa and shrine areas.", "Wear modest clothing that covers your shoulders and knees.", "The site is spread out — a bike makes it easy to move between the ruins."],
  },
  {
    id: "mihintale", name: "Mihintale", label: "Sacred Hill", category: "Mihintale · Anuradhapura District",
    image: "/images/destinations/mihintale.jpg", cardPos: "55% 50%", modalPos: "50% 45%",
    imageAlt: "Aradhana Gala rock at Mihintale, with railings on the summit and lakes and forest beyond",
    distanceKm: null, estimatedBikeTime: null,
    introduction: "A sacred hill east of Anuradhapura, honoured as the place where Buddhism was introduced to Sri Lanka.",
    history: "According to tradition, the monk Mahinda, son of the Indian emperor Ashoka, met King Devanampiya Tissa on this hill in the 3rd century BCE while the king was out hunting. Mahinda's teaching led the king to embrace Buddhism, which then spread across the island. Mihintale grew into an important monastic centre, with rock shelters for monks, stupas, a refectory and long flights of granite steps climbing the hillside. The meeting is still remembered each year on the Poson full-moon day in June, when large numbers of pilgrims visit.",
    significance: ["Regarded as the birthplace of Buddhism in Sri Lanka", "An ancient monastic landscape of stupas, caves and stone stairways", "The focus of the annual Poson festival", "Wide views over the surrounding countryside from its rock summits"],
    visitingNotes: ["Shoes are removed at the upper sacred terraces, and the rock can get hot — go early.", "Expect a long climb up stone steps; bring water.", "Wear modest clothing that covers your shoulders and knees.", "Take care on the steep rock summits."],
  },
];

/** Index of the destination shown first — the middle one, so the five read left to right. */
export const INITIAL_DESTINATION = 2;

export const facilitiesSection = {
  eyebrow: "What we offer",
  title: "Everything you need for a comfortable stay.",
  image: { src: "/images/photos/toiletries.jpg", alt: "Silva Homestay branded shampoo and body wash bottles in the bathroom" },
} as const;

export const facilities = [
  { icon: "snowflake", title: "Comfortable A/C Rooms", copy: "Relax in clean, comfortable air-conditioned accommodation." },
  { icon: "bike", title: "Reliable Bike Rental", copy: "Convenient bikes are available to help guests explore Anuradhapura independently." },
  { icon: "parking", title: "Free Parking", copy: "Parking is available for guests." },
  { icon: "leaf", title: "Clean & Peaceful Environment", copy: "Enjoy a quiet and relaxing setting during your stay." },
  { icon: "tag", title: "Affordable Pricing", copy: "Comfortable accommodation and bike rental at reasonable rates." },
  { icon: "cooking", title: "Basic Cooking Facilities", copy: "Basic facilities are available for guests who need to prepare simple food." },
] as const;

export type FacilityIcon = (typeof facilities)[number]["icon"];

export const gallerySection = {
  eyebrow: "Gallery",
  title: "Around the homestay.",
  hint: "Tap a photo to view it larger",
  closeHint: "Tap anywhere to close",
  cta: "View Full Gallery",
} as const;

export type GalleryItem = { src: string; width: number; height: number; caption: string; alt: string; position?: string; wide?: boolean };

export const gallery: GalleryItem[] = [
  { src: "/images/photos/balcony-palms.jpg", width: 960, height: 1280, caption: "Balcony with a view over the garden", alt: "Covered balcony with traditional red-cushioned seating and a view of palms and mango trees" },
  { src: "/images/photos/tea-station.jpg", width: 1280, height: 960, caption: "Kettle and tea tray in the room", alt: "Wooden table with electric kettle, cups, glasses and a clay water dispenser in a guest room", wide: true },
  { src: "/images/photos/lounge.jpg", width: 960, height: 1280, caption: "Guest lounge", alt: "Bright tiled guest lounge with sofas, carved coffee table and navy curtains", position: "50% 60%" },
  { src: "/images/photos/balcony-garden.jpg", width: 960, height: 1280, caption: "Seating on the balcony", alt: "Balcony sofa with red cushions surrounded by green trees" },
  { src: "/images/photos/room-curtain-doorway.jpg", width: 960, height: 1280, caption: "Air-conditioned room", alt: "Guest room with A/C unit, navy curtains, bed with fresh towels and a wooden shoe rack" },
  { src: "/images/photos/room-door-veranda.jpg", width: 960, height: 1280, caption: "Doorway to the veranda", alt: "Polished wooden door opening from a room onto a shaded veranda" },
  { src: "/images/photos/bathroom-floral.jpg", width: 960, height: 1280, caption: "Tiled bathroom", alt: "Tiled bathroom with shower, pedestal basin and toilet" },
];

// TODO(client): confirm guest capacity per room (form currently offers 1, 2 or "3 or more").
export const enquiry = {
  eyebrow: "Book your stay",
  title: "Plan your stay in Anuradhapura.",
  copy: "Whether you're visiting for a short stay or exploring the ancient city for a few days, Silva Homestay gives you a comfortable base to begin your journey.",
  callLabel: "Call now",
  emailLabel: "Send an email",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    contact: { label: "Phone or email", placeholder: "How we reach you" },
    arrival: { label: "Arrival" },
    departure: { label: "Departure" },
    guests: { label: "Guests" },
    pkg: { label: "Room or package" },
    message: { label: "Anything we should know?", placeholder: "Arrival time, bike needs, questions" },
  },
  guestOptions: [
    { value: "1", label: "1 guest" },
    { value: "2", label: "2 guests" },
    { value: "3+", label: "3 or more" },
  ],
  submit: "Check Your Stay",
  idleSummary: "WhatsApp opens with your enquiry ready to send.",
} as const;

export const footer = {
  quickLinksHeading: "Quick links",
  contactHeading: "Contact",
  ratesHeading: "Rates",
  socialHeading: "Follow us",
  rates: ["Rooms from Rs. 4,500", "Room + Bike Rental — Rs: 5500.00", "Sacred City / Mihintale Bike — Rs. 2,000"],
  copyright: "© 2026 Silva Homestay & Bike Rental",
} as const;
