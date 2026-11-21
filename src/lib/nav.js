export const NAV = [
  { id: 'lineup', label: 'Lineup' },
  { id: 'why', label: 'Why Barefoot' },
  { id: 'visit', label: 'Visit Us' },
  { id: 'faq', label: 'FAQ' },
];

export const STORE = {
  name: 'Barefootinc Flagship Store',
  address:
    'K Village, Room 09 / 1st Floor, Building B, Sukhumvit 26, Khlong Tan, Khlong Toei, Bangkok 10110',
  phone: '088-984-2485',
  phoneHref: 'tel:+66889842485',
  access:
    'K Village is between Sukhumvit 26 and Rama 4 Road. By train, get off at BTS Phrom Phong (Exit 4) and take a bike taxi — about 1km.',
  line: '@barefootinc.th',
  lineUrl: 'https://lin.ee/5iJqsKw',
  maps: 'https://maps.app.goo.gl/QDGiLmfQCXt3Z2nM6',
  shopUrl: 'https://barefootinc.jp',
  instagram: 'https://www.instagram.com/barefootinc.th/',
  facebook: 'https://www.facebook.com/barefootincthailand',
};

// Sunday first, as displayed in store
export const HOURS = [
  { day: 'Sunday', time: '10:00 – 21:00' },
  { day: 'Monday', time: '11:00 – 20:00' },
  { day: 'Tuesday', time: '11:00 – 20:00' },
  { day: 'Wednesday', time: '11:00 – 20:00' },
  { day: 'Thursday', time: '11:00 – 20:00' },
  { day: 'Friday', time: '10:00 – 21:00' },
  { day: 'Saturday', time: '10:00 – 21:00' },
];

export const HEADER_OFFSET = 92; // announcement bar + header

export function scrollToId(e, id) {
  if (e) e.preventDefault();
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
