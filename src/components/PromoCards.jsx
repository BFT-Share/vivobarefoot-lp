import { scrollToId } from '../lib/nav';

export default function PromoCards() {
  return (
    <section className="section section--flush">
      <div className="grid grid--promo">
        <a className="promo" href="#visit" onClick={(e) => scrollToId(e, 'visit')}>
          <img
            className="promo__img"
            src="/img/promo-visit.jpg"
            alt=""
            loading="lazy"
          />
          <div className="promo__body">
            <h3>Now at K Village</h3>
            <p>
              Try the whole range on, get your feet measured, and walk out in a size
              that actually fits.
            </p>
            <span className="btn btn--ghost">Plan your visit</span>
          </div>
        </a>

        <a className="promo" href="#faq" onClick={(e) => scrollToId(e, 'faq')}>
          <img
            className="promo__img"
            src="/img/promo-start.jpg"
            alt=""
            loading="lazy"
          />
          <div className="promo__body">
            <h3>New to barefoot?</h3>
            <p>
              Your feet have spent years in casts. Build up over four to eight weeks
              and let them wake up properly.
            </p>
            <span className="btn btn--ghost">Read the guide</span>
          </div>
        </a>
      </div>
    </section>
  );
}
