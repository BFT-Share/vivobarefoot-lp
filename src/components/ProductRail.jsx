import { useMemo, useState } from 'react';
import { products, tabs } from '../data/products';
import { STORE } from '../lib/nav';

function ProductCard({ product }) {
  const [i, setI] = useState(0);
  const colour = product.colours[i];

  return (
    <article className="card">
      <div className="card__media">
        {product.badge && <span className="card__badge">{product.badge}</span>}
        <img className="card__img" src={colour.img} alt={`${product.name} — ${colour.name}`} loading="lazy" />
        {colour.alt && (
          <img className="card__img card__img--alt" src={colour.alt} alt="" loading="lazy" aria-hidden="true" />
        )}
      </div>

      {product.colours.length > 1 && (
        <div className="card__swatches">
          {product.colours.map((c, n) => (
            <button
              key={c.name}
              className={`swatch${n === i ? ' is-active' : ''}`}
              style={{ '--swatch': c.hex }}
              onClick={() => setI(n)}
              aria-label={c.name}
              title={c.name}
            />
          ))}
        </div>
      )}

      <div className="card__body">
        <div className="card__row">
          <h3 className="card__name">{product.name}</h3>
          <span className="card__price">{product.price}</span>
        </div>
        <p className="card__meta">
          {colour.name} · {colour.gender}
        </p>
        <p className="card__activity">{product.activity}</p>
      </div>
    </article>
  );
}

export default function ProductRail({ tab, setTab }) {
  const list = useMemo(
    () => (tab === 'all' ? products : products.filter((p) => p.tabs.includes(tab))),
    [tab]
  );

  return (
    <section className="section" id="shop">
      <div className="container">
        <div className="rail__head">
          <h2 className="h-section">The range in Thailand</h2>
          <div className="tabs" role="tablist" aria-label="Filter by activity">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`tab${tab === t.id ? ' is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid--products">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <p className="rail__note">
          All prices in Thai baht, inclusive of VAT. Full range and stock available in store.
        </p>

        <div className="rail__foot">
          <a
            className="btn btn--dark"
            href={STORE.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop all online
          </a>
        </div>
      </div>
    </section>
  );
}
