import { useMemo, useState } from 'react';
import { products, tabs } from '../data/products';
import Modal from './Modal';

function Gallery({ product, colour, startAt, onClose }) {
  const [i, setI] = useState(startAt);
  const images = colour.images;

  return (
    <Modal open onClose={onClose} label={`${product.name} images`} wide>
      <div className="gallery">
        <div className="gallery__stage">
          <img src={images[i]} alt={`${product.name} — ${colour.name}`} />
        </div>

        <div className="gallery__side">
          <p className="gallery__name">
            {product.name} <span>{colour.gender}</span>
          </p>
          <p className="gallery__colour">{colour.name}</p>
          <p className="gallery__price">{product.price}</p>

          <ul className="gallery__thumbs">
            {images.map((src, n) => (
              <li key={src}>
                <button
                  className={`gallery__thumb${n === i ? ' is-active' : ''}`}
                  onClick={() => setI(n)}
                  aria-label={`View image ${n + 1}`}
                  aria-current={n === i}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>

          <p className="gallery__hint">Click anywhere outside to close</p>
        </div>
      </div>
    </Modal>
  );
}

function ProductCard({ product, onOpen }) {
  const [c, setC] = useState(0);
  const colour = product.colours[c];

  return (
    <article className="card">
      <div className="card__media">
        {product.badge && <span className="card__badge">{product.badge}</span>}
        <img
          className="card__img"
          src={colour.images[1] || colour.images[0]}
          alt={`${product.name} — ${colour.name}`}
          loading="lazy"
        />
        <img
          className="card__img card__img--alt"
          src={colour.images[0]}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <button className="card__more" onClick={() => onOpen(product, colour)}>
          Show more
        </button>
      </div>

      {/* always rendered so cards in a row keep their name/price on one line */}
      <ul className="card__swatches" aria-label="Colourways">
        {product.colours.length > 1 &&
          product.colours.map((v, n) => (
            <li key={v.name}>
              <button
                className={`swatch${n === c ? ' is-active' : ''}`}
                onClick={() => setC(n)}
                aria-label={v.name}
                title={v.name}
                aria-current={n === c}
              >
                <img src={v.images[1] || v.images[0]} alt="" loading="lazy" />
              </button>
            </li>
          ))}
      </ul>

      <div className="card__body">
        <div className="card__row">
          <h3 className="card__name">
            {product.name} {colour.gender}
          </h3>
          <span className="card__price">{product.price}</span>
        </div>
        <p className="card__colour">{colour.name}</p>
        <p className="card__activity">{product.activity}</p>
      </div>
    </article>
  );
}

export default function ProductRail({ tab, setTab }) {
  const [gallery, setGallery] = useState(null);
  const [sizeChart, setSizeChart] = useState(false);

  const list = useMemo(
    () => (tab === 'all' ? products : products.filter((p) => p.tabs.includes(tab))),
    [tab]
  );

  return (
    <section className="section" id="shop">
      <div className="container">
        <div className="rail__head">
          <h2 className="h-section">Our line up</h2>
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
            <ProductCard
              key={p.id}
              product={p}
              onOpen={(product, colour) => setGallery({ product, colour })}
            />
          ))}
        </div>

        <p className="rail__note">
          All prices in Thai baht, inclusive of VAT. Full range and stock available in
          store.
        </p>

        <div className="rail__foot">
          <button className="btn btn--dark" onClick={() => setSizeChart(true)}>
            Check your size
          </button>
        </div>
      </div>

      {gallery && (
        <Gallery
          product={gallery.product}
          colour={gallery.colour}
          startAt={1}
          onClose={() => setGallery(null)}
        />
      )}

      <Modal
        open={sizeChart}
        onClose={() => setSizeChart(false)}
        label="VIVOBAREFOOT size guide"
        wide
      >
        <img className="modal__image" src="/img/size-guide.jpg" alt="VIVOBAREFOOT footwear size guide, men's and women's" />
      </Modal>
    </section>
  );
}
