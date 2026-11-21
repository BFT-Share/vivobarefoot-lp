import { STORE, scrollToId } from '../lib/nav';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width: 767px)" srcSet="/img/hero-mobile.jpg" />
        <img className="hero__bg" src="/img/hero.jpg" alt="" fetchPriority="high" />
      </picture>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="hero__badge">Now in store · K Village, Bangkok</p>
        <h1 className="hero__title">Free your feet</h1>
        <p className="hero__store">
          VIVOBAREFOOT is available at <b>Barefootinc Flagship Store</b>, K Village on
          Sukhumvit soi 26 (around 1km from BTS Phrom Phong station). Come in and try
          them on.
        </p>
        <div className="hero__cta">
          <a className="btn btn--light" href={STORE.maps} target="_blank" rel="noopener noreferrer">
            Open in Maps
          </a>
          <a className="btn btn--ghost" href="#lineup" onClick={(e) => scrollToId(e, 'lineup')}>
            See models in store
          </a>
        </div>
      </div>
    </section>
  );
}
