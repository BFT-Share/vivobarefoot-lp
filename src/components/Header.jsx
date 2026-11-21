import { useEffect, useState } from 'react';
import { NAV, scrollToId } from '../lib/nav';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + 160;
      let current = '';
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (e, id) => {
    setOpen(false);
    scrollToId(e, id);
  };

  return (
    <>
      <div className="announce">
        <p>
          <span>Vivobarefoot is now available in Thailand</span>
          <span className="announce__dash"> - </span>
          <span className="announce__wrap">Barefootinc @ K Village, Bangkok</span>
        </p>
      </div>

      <header className="header">
        <div className="header__inner">
          <a className="header__brand" href="#top" onClick={(e) => go(e, 'top')}>
            <img
              className="lockup__mark"
              src="/brand/vivo-wordmark.png"
              alt="VIVOBAREFOOT"
              width="122"
              height="22"
            />
            <span className="header__rule" aria-hidden="true" />
            <span className="header__store">
              Available at
              <b>K Village, Bangkok</b>
            </span>
          </a>

          <nav className="header__nav" aria-label="Main">
            {NAV.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'is-active' : undefined}
                onClick={(e) => go(e, id)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--dark btn--sm"
              href="#visit"
              onClick={(e) => go(e, 'visit')}
            >
              Store access
            </a>
            <button
              className={`burger${open ? ' is-open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn--dark" href="#visit" onClick={(e) => go(e, 'visit')}>
          Store access
        </a>
      </div>
    </>
  );
}
