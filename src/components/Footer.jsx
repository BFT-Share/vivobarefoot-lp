import { NAV, STORE, scrollToId } from '../lib/nav';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'The line up', id: 'lineup' },
      { label: 'Live', id: 'lineup' },
      { label: 'Train', id: 'lineup' },
      { label: 'Trail', id: 'lineup' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Sizing and fit', id: 'faq' },
      { label: 'Transitioning', id: 'faq' },
      { label: 'Common questions', id: 'faq' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'K Village store', id: 'visit' },
      { label: 'Get directions', href: STORE.maps },
      { label: `Line ${STORE.line}`, href: STORE.lineUrl },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__lockup">
              <img
                className="footer__vivo"
                src="/brand/vivo-wordmark-white.png"
                alt="VIVOBAREFOOT"
                width="177"
                height="32"
                loading="lazy"
              />
            </div>

            <p>
              VIVOBAREFOOT in Thailand, at K Village, Sukhumvit 26, Bangkok. Wide,
              thin and flexible footwear, and the people to help you move in it.
            </p>

            <a
              className="btn btn--ghost btn--sm"
              href={STORE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add us on Line
            </a>

            <ul className="footer__social">
              <li>
                <a
                  href={STORE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our K Village store on Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5.4" />
                    <circle cx="12" cy="12" r="4.6" />
                    <circle className="dot" cx="17.6" cy="6.4" r="1.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={STORE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our K Village store on Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      className="solid"
                      d="M13.5 21.9V13.5h2.83l.42-3.29H13.5V8.11c0-.95.27-1.6 1.63-1.6h1.74V3.57a23.6 23.6 0 0 0-2.54-.13c-2.51 0-4.23 1.53-4.23 4.35v2.42H7.26v3.29h2.84v8.4z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <a href={`#${l.id}`} onClick={(e) => scrollToId(e, l.id)}>
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <nav className="footer__mini" aria-label="Sections">
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={(e) => scrollToId(e, id)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
