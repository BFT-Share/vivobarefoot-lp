import { scrollToId } from '../lib/nav';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width: 767px)" srcSet="/img/hero-mobile.jpg" />
        <img className="hero__bg" src="/img/hero.jpg" alt="" fetchPriority="high" />
      </picture>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <h1 className="hero__title">Free your feet</h1>
        <h2 className="hero__sub">Wide. Thin. Flexible. Now in Bangkok.</h2>
        <div className="hero__cta">
          <a className="btn btn--ghost" href="#shop" onClick={(e) => scrollToId(e, 'shop')}>
            Shop the range
          </a>
          <a className="btn btn--ghost" href="#visit" onClick={(e) => scrollToId(e, 'visit')}>
            Visit K Village
          </a>
        </div>
      </div>
    </section>
  );
}
