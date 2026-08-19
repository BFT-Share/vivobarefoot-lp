export const NAV = [
  { id: 'shop', label: 'Shop' },
  { id: 'why', label: 'Why Barefoot' },
  { id: 'visit', label: 'Visit Us' },
  { id: 'faq', label: 'FAQ' },
];

export const STORE = {
  name: 'Barefootinc Flagship Store',
  address:
    'G Floor, Room B109, K Village Shopping Mall, Sukhumvit 26, Khlong Toei, Bangkok 10110',
  hours: 'Every day, 10:00 – 20:00',
  line: '@barefootinc',
  phone: '+66 2 661 2993',
  phoneHref: 'tel:+6626612993',
  maps: 'https://maps.app.goo.gl/QDGiLmfQCXt3Z2nM6',
  lineUrl: 'https://line.me/R/ti/p/@barefootinc',
  shopUrl: 'https://barefootinc.jp',
};

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
