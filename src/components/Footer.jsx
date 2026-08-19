import { NAV, STORE, scrollToId } from '../lib/nav';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'The range', id: 'shop' },
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
      { label: STORE.phone, href: STORE.phoneHref },
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
            <img
              src="/brand/vivo-wordmark-white.png"
              alt="VIVOBAREFOOT"
              width="177"
              height="32"
              loading="lazy"
            />
            <p>
              Barefootinc is the official VIVOBAREFOOT and Vibram FiveFingers
              distributor in Thailand. Wide, thin and flexible footwear, and the
              people to help you move in it.
            </p>
            <a
              className="btn btn--ghost btn--sm"
              href={STORE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add us on Line
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
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
