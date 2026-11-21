import { HEADER_OFFSET, scrollToId } from '../lib/nav';

const TILES = [
  {
    id: 'live',
    label: 'Live',
    copy: 'Everyday shoes you can wear from desk to street.',
    img: '/img/tile-live.jpg',
  },
  {
    id: 'train',
    label: 'Train',
    copy: 'Ground feel and stability for lifting, fitness and the gym floor.',
    img: '/img/tile-train.jpg',
  },
  {
    id: 'trail',
    label: 'Trail',
    copy: 'Grip and protection for off-road running and rough ground.',
    img: '/img/tile-trail.jpg',
  },
];

// Activity tile -> matching category heading inside Lineup
const CAT = { live: 'everyday', train: 'training', trail: 'trail' };

export default function Activity() {
  const pick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(`lineup-${CAT[id]}`);
    if (!el) {
      scrollToId(null, 'lineup');
      return;
    }
    // Land the heading just below the header and Lineup's sticky filter bar.
    const bar = document.querySelector('.lu-bar');
    const offset = HEADER_OFFSET + (bar ? bar.offsetHeight : 0) + 12;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  return (
    <section className="section section--tight">
      <div className="container">
        <h2 className="h-section h-section--center">Select by activity</h2>
        <div className="grid grid--tiles">
          {TILES.map((t) => (
            <a key={t.id} className="tile" href="#lineup" onClick={(e) => pick(e, t.id)}>
              <div className="tile__media">
                <img src={t.img} alt="" loading="lazy" />
              </div>
              <div className="tile__body">
                <h3 className="tile__label">{t.label}</h3>
                <p>{t.copy}</p>
                <span className="link-arrow">See {t.label.toLowerCase()}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
