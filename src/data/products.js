// Prices and gender are the Thai retail figures from the Barefootinc
// VIVOBAREFOOT range sheet, not the .com global prices — those differ
// market to market. Gender sits on the colourway because it varies within
// a model (Primus Lite IV Storm Cloud is men's only; Gobi III is Obsidian
// men's / Limestone women's).

const thb = (n) => `THB ${n.toLocaleString('en-US')}.00`;

// each colourway ships a numbered gallery: /products/<slug>-1.jpg ... -N.jpg
const gallery = (slug, count) =>
  Array.from({ length: count }, (_, i) => `/products/${slug}-${i + 1}.jpg`);

export const products = [
  {
    id: 'primus-lite-iv',
    name: 'Primus Lite IV',
    price: thb(5100),
    activity: 'EVERYDAY / FUNCTIONAL FITNESS / TRAINING',
    tabs: ['train', 'live'],
    colours: [
      {
        name: 'Obsidian',
        gender: "Men's / Women's",
        hex: '#2b2b2d',
        images: gallery('primus-lite-iv-obsidian', 7),
      },
      {
        name: 'Mineral',
        gender: "Men's / Women's",
        hex: '#e9e9e7',
        images: gallery('primus-lite-iv-mineral', 7),
      },
      {
        name: 'Storm Cloud',
        gender: "Men's",
        hex: '#b9cbd8',
        images: gallery('primus-lite-iv-storm', 7),
      },
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
      {
        name: 'Eclipse',
        gender: "Men's",
        hex: '#3a3f44',
        images: gallery('primus-lite-knit-natural', 7),
      },
    ],
  },
  {
    id: 'primus-trail-fg',
    name: 'Primus Trail FG 3.5',
    price: thb(6350),
    activity: 'TRAIL RUNNING / OFF-ROAD',
    tabs: ['trail'],
    colours: [
      {
        name: 'Obsidian',
        gender: "Men's",
        hex: '#1c1c1e',
        images: gallery('primus-trail-fg', 7),
      },
    ],
  },
  {
    id: 'motus-strength-ii',
    name: 'Motus Strength II',
    price: thb(7480),
    activity: 'WEIGHT + STRENGTH TRAINING / FUNCTIONAL FITNESS',
    tabs: ['train'],
    colours: [
      {
        name: 'Eclipse',
        gender: "Men's",
        hex: '#232326',
        images: gallery('motus-strength-ii', 7),
      },
    ],
  },
  {
    id: 'gobi-iii',
    name: 'Gobi III Sneaker Leather',
    price: thb(5990),
    activity: 'EVERYDAY',
    tabs: ['live'],
    colours: [
      {
        name: 'Obsidian',
        gender: "Men's",
        hex: '#141414',
        images: gallery('gobi-iii-obsidian', 7),
      },
      {
        name: 'Limestone',
        gender: "Women's",
        hex: '#ded9d0',
        images: gallery('gobi-iii-limestone', 7),
      },
    ],
  },
  {
    id: 'geo-court-iv',
    name: 'Geo Court IV',
    price: thb(6120),
    activity: 'EVERYDAY / COURT',
    tabs: ['live'],
    colours: [
      {
        name: 'Bright White',
        gender: "Women's",
        hex: '#f2f2f0',
        images: gallery('geo-court-iv', 7),
      },
    ],
  },
  {
    id: 'ra-iv',
    name: 'Ra IV',
    price: thb(5440),
    activity: 'EVERYDAY / WORK',
    tabs: ['live'],
    colours: [
      {
        name: 'Obsidian',
        gender: "Men's",
        hex: '#111111',
        images: gallery('ra-iv', 6),
      },
    ],
  },
];

export const tabs = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live' },
  { id: 'train', label: 'Train' },
  { id: 'trail', label: 'Trail' },
];
