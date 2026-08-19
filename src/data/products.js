// Prices are the Thai retail prices from the Barefootinc VIVOBAREFOOT
// range sheet (Downloads/Media/Artwork/VIVO/VIVO BAREFOOT_ALL PRODUCTS.jpg),
// not the .com global prices — those differ market to market.

const thb = (n) => `THB ${n.toLocaleString('en-US')}.00`;

export const products = [
  {
    id: 'primus-lite-iv',
    name: 'Primus Lite IV',
    price: thb(5100),
    activity: 'EVERYDAY / FUNCTIONAL FITNESS / TRAINING',
    tabs: ['train', 'live'],
    colours: [
      { name: 'Obsidian', gender: "Men's / Women's", img: '/products/primus-lite-iv-obsidian.jpg', alt: '/products/primus-lite-iv-obsidian-alt.jpg', hex: '#2b2b2d' },
      { name: 'Mineral', gender: "Men's / Women's", img: '/products/primus-lite-iv-mineral.jpg', alt: '/products/primus-lite-iv-mineral-alt.jpg', hex: '#e9e9e7' },
      { name: 'Storm Cloud', gender: "Men's", img: '/products/primus-lite-iv-storm.jpg', alt: '/products/primus-lite-iv-storm-alt.jpg', hex: '#b9cbd8' },
    ],
  },
  {
    id: 'primus-lite-knit-natural',
    name: 'Primus Lite Knit Natural',
    price: thb(5780),
    activity: 'ROAD RUNNING / FUNCTIONAL FITNESS / TRAINING',
    tabs: ['train'],
    badge: 'NATURAL MATERIALS',
    colours: [
      { name: 'Eclipse', gender: "Men's", img: '/products/primus-lite-knit-natural.jpg', alt: '/products/primus-lite-knit-natural-alt.jpg', hex: '#3a3f44' },
    ],
  },
  {
    id: 'primus-trail-fg',
    name: 'Primus Trail FG 3.5',
    price: thb(6350),
    activity: 'TRAIL RUNNING / OFF-ROAD',
    tabs: ['trail'],
    colours: [
      { name: 'Obsidian', gender: "Men's", img: '/products/primus-trail-fg.jpg', alt: '/products/primus-trail-fg-alt.jpg', hex: '#1c1c1e' },
    ],
  },
  {
    id: 'motus-strength-ii',
    name: 'Motus Strength II',
    price: thb(7480),
    activity: 'WEIGHT + STRENGTH TRAINING / FUNCTIONAL FITNESS',
    tabs: ['train'],
    colours: [
      { name: 'Eclipse', gender: "Men's", img: '/products/motus-strength-ii.jpg', alt: '/products/motus-strength-ii-alt.jpg', hex: '#232326' },
    ],
  },
  {
    id: 'gobi-iii',
    name: 'Gobi III Sneaker Leather',
    price: thb(5990),
    activity: 'EVERYDAY',
    tabs: ['live'],
    colours: [
      { name: 'Obsidian', gender: "Men's", img: '/products/gobi-iii-obsidian.jpg', alt: '/products/gobi-iii-obsidian-alt.jpg', hex: '#141414' },
      { name: 'Limestone', gender: "Women's", img: '/products/gobi-iii-limestone.jpg', alt: '/products/gobi-iii-limestone-alt.jpg', hex: '#ded9d0' },
    ],
  },
  {
    id: 'geo-court-iv',
    name: 'Geo Court IV',
    price: thb(6120),
    activity: 'EVERYDAY / COURT',
    tabs: ['live'],
    colours: [
      { name: 'Bright White', gender: "Women's", img: '/products/geo-court-iv.jpg', alt: '/products/geo-court-iv-alt.jpg', hex: '#f2f2f0' },
    ],
  },
  {
    id: 'ra-iv',
    name: 'Ra IV',
    price: thb(5440),
    activity: 'EVERYDAY / WORK',
    tabs: ['live'],
    colours: [
      { name: 'Obsidian', gender: "Men's", img: '/products/ra-iv.jpg', alt: '/products/ra-iv-alt.jpg', hex: '#111111' },
    ],
  },
];

export const tabs = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live' },
  { id: 'train', label: 'Train' },
  { id: 'trail', label: 'Trail' },
];
