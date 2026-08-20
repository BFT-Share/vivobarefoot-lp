import { NAV, STORE, scrollToId } from '../lib/nav';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'The line up', id: 'shop' },
      { label: 'Live', id: 'shop' },
      { label: 'Train', id: 'shop' },
      { label: 'Trail', id: 'shop' },
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
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__lockup">
              <img
                className="footer__retailer"
                src="/logo.png"
                alt="Barefootinc Thailand"
                width="150"
                height="34"
                loading="lazy"
              />
              <span className="footer__rule" aria-hidden="true" />
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
              Barefootinc is the official VIVOBAREFOOT distributor in Thailand.
              Wide, thin and flexible footwear, and the people to help you move in
              it.
            </p>

            <a
              className="btn btn--ghost btn--sm"
              href={STORE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add us on Line
            </a>

            <img
              className="footer__bcorp"
              src="/brand/bcorp-white.png"
              alt="Certified B Corporation"
              width="72"
              height="45"
              loading="lazy"
            />
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
          <p>
            © {year} Barefootinc Thailand. VIVOBAREFOOT® is a registered trademark of
            Vivobarefoot Ltd.
          </p>
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
