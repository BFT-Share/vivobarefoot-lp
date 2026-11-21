import { useEffect, useMemo, useRef, useState } from 'react';
import { LINEUP, LINEUP_TEXT as L } from '../data/lineup';
import './Lineup.css';

// Ported from vivo-lineup-amber.vercel.app/#store (the "In store" tab).

const CATS = ['training', 'running', 'trail', 'everyday', 'kids'];
const CATNAME = { training: 'Training', running: 'Running', trail: 'Trail', everyday: 'Everyday', kids: 'Kids' };
const GENDERS = [
  { v: 'all', label: L.allG },
  { v: 'W', label: L.women },
  { v: 'M', label: L.men },
  { v: 'K', label: L.kids },
];
const KIND = { store: 'r', event: 'e', new: 'nw' };
const KIND_LABEL = { store: L.store, event: L.event, new: L.isNew };

const fmt = (n) => n.toLocaleString('en-US');
const gMatch = (cg, g) => g === 'all' || cg === g || (cg === 'MW' && (g === 'W' || g === 'M'));
const fitText = (f) => (!f ? '' : /large/i.test(f) ? L.fitLarge : /true/i.test(f) ? L.fitTrue : f);
const weightText = (w) => `${w.grams}g` + (w.eu ? ` (${w.g === 'W' ? 'WOMENS' : 'MENS'} EU${w.eu})` : '');

function Img({ src, alt = '' }) {
  return src ? <img src={src} alt={alt} loading="lazy" /> : <span className="lu-ph">{L.noImg}</span>;
}

function Price({ cw }) {
  if (cw.price == null)
    return (
      <div className="lu-price">
        <span className="lu-now lu-tbd">{L.priceTBD}</span>
      </div>
    );
  return (
    <div className="lu-price">
      <span className="lu-now">฿{fmt(cw.price)}</span>
      <span className="lu-unit">{L.listPrice}</span>
    </div>
  );
}

function Card({ m, cws, cur, onSelect, onOpen }) {
  return (
    <article className="lu-card">
      <button className="lu-photo" onClick={onOpen} aria-label={m.name}>
        <Img src={cur.imgs[0]} alt={`${m.name} ${cur.colour}`} />
      </button>
      <div className="lu-body">
        <h3 className="lu-name">{m.name}</h3>
        {m.tagline && <p className="lu-tag">{m.tagline}</p>}
        <div className="lu-swatches" role="group">
          {cws.map((c) => (
            <button
              key={c.code}
              className="lu-sw"
              aria-pressed={c.code === cur.code}
              title={`${c.colour} (${L.g[c.g]})`}
              onClick={() => onSelect(c.code)}
            >
              <Img src={c.imgs[0]} />
              <i>{c.g}</i>
            </button>
          ))}
        </div>
        <div className="lu-cwname">
          <b>{cur.colour}</b>
          <span className="lu-gpill">{L.g[cur.g]}</span>
          {cur.codes.map((c) => (
            <span key={c} className="lu-gpill">
              {c}
            </span>
          ))}
        </div>
        <Price cw={cur} />
        <button className="lu-more" onClick={onOpen}>
          {L.more}
        </button>
      </div>
    </article>
  );
}

function RangeList({ rows, want }) {
  const GS = ['W', 'M', 'K'];
  if (!rows.length) return <p className="lu-muted">{L.none}</p>;
  return (
    <ul className="lu-range">
      {rows.map((r) => (
        <li key={r.name}>
          <span>{r.name}</span>
          <span className="lu-gps">
            {GS.filter((g) => g in r && want(r[g])).map((g) => (
              <span key={g} className={`lu-gp ${KIND[r[g]] || 'n'}`}>
                {g}
                {r[g] ? ` · ${KIND_LABEL[r[g]]}` : ''}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Detail({ m, cur, onSelect, onClose }) {
  const ref = useRef(null);
  const [img, setImg] = useState(0);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);
  useEffect(() => setImg(0), [cur.code]);

  const close = () => {
    if (ref.current?.open) ref.current.close();
    onClose();
  };

  const en = m.en || {};
  const fit = en.fitW ? `W ${fitText(en.fitW)} / M ${fitText(en.fitM)}` : fitText(en.fit);
  const specs = [
    [L.sole, en.sole && `${en.sole}mm`],
    [L.tread, en.tread !== undefined && en.tread !== '' && `${en.tread}mm`],
    [L.weight, m.weight && weightText(m.weight)],
    [L.fit, fit],
  ].filter((s) => s[1]);
  const GS = ['W', 'M', 'K'];
  const carried = m.range.filter((r) => GS.some((g) => r[g]));
  const other = m.range.filter((r) => GS.some((g) => g in r && !r[g]));
  const links = [
    m.jp_url && { href: m.jp_url, label: L.jpSite },
    ...Object.entries(m.gl_url || {}).map(([g, u]) => ({
      href: u,
      label: `Global (${g === 'W' ? 'Women' : 'Men'})`,
    })),
  ].filter(Boolean);

  return (
    <dialog
      ref={ref}
      className="lu-dialog"
      aria-label={m.name}
      onClose={onClose}
      onCancel={onClose}
      onClick={(e) => e.target === ref.current && close()}
    >
      <div className="lu-dlg">
        <div className="lu-gal">
          <div className="lu-main">
            <Img src={cur.imgs[img]} alt={`${m.name} ${cur.colour}`} />
          </div>
          <div className="lu-thumbs">
            {cur.imgs.map((s, i) => (
              <button key={s} aria-pressed={i === img} aria-label={String(i + 1)} onClick={() => setImg(i)}>
                <img src={s} alt="" />
              </button>
            ))}
          </div>
          <div className="lu-swatches">
            {m.cw.map((c) => (
              <button
                key={c.code}
                className="lu-sw"
                aria-pressed={c.code === cur.code}
                title={`${c.colour} (${L.g[c.g]})`}
                onClick={() => onSelect(c.code)}
              >
                <Img src={c.imgs[0]} />
                <i>{c.g}</i>
              </button>
            ))}
          </div>
          <div className="lu-cwname lu-cwname--dark">
            <b>{cur.colour}</b>
            <span>
              {L.g[cur.g]} · {cur.code}
            </span>
            <span className={`lu-kind ${KIND[cur.status]}`}>{KIND_LABEL[cur.status]}</span>
          </div>
        </div>

        <div className="lu-info">
          <button className="lu-close" onClick={close}>
            {L.close}
          </button>
          <div>
            <div className="lu-eyebrow">{CATNAME[m.cat]}</div>
            <h3>{m.name}</h3>
          </div>
          <Price cw={cur} />
          {m.tagline && (
            <p className="lu-lead">
              <b>{m.tagline}</b>
            </p>
          )}
          {m.intro && <p className="lu-lead">{m.intro}</p>}
          {m.note && <div className="lu-note">{L.sensusNote}</div>}
          {specs.length > 0 && (
            <div>
              <p className="lu-sec">{L.spec}</p>
              <dl className="lu-specs">
                {specs.map(([k, v]) => (
                  <div key={k} className={k === L.fit ? 'wide' : undefined}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          {m.feats.length > 0 && (
            <div>
              <p className="lu-sec">{L.feats}</p>
              <ul className="lu-feats">
                {m.feats.map((f, i) => (
                  <li key={i}>
                    {f.t && <b>{f.t}</b>}
                    {f.d}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="lu-sec">{L.carried}</p>
            <RangeList rows={carried} want={(v) => !!v} />
          </div>
          <div>
            <p className="lu-sec">{L.notCarried}</p>
            <RangeList rows={other} want={(v) => !v} />
            <p className="lu-muted lu-small">
              {L.rangeNote}
              {m.range_note ? ` The official colours are those of its successor, ${m.range_note}.` : ''}
            </p>
          </div>
          {links.length > 0 && (
            <div className="lu-links">
              {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function Lineup() {
  const [g, setG] = useState('all');
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [sel, setSel] = useState({}); // model name -> selected colourway code
  const [openName, setOpenName] = useState(null);

  const stats = useMemo(() => {
    const ps = LINEUP.flatMap((m) => m.cw.map((c) => c.price)).filter((p) => p != null);
    return {
      m: LINEUP.length,
      c: LINEUP.reduce((a, m) => a + m.cw.length, 0),
      lo: Math.min(...ps),
      hi: Math.max(...ps),
    };
  }, []);

  const groups = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const match = (m, cw) => {
      if (!gMatch(cw.g, g)) return false;
      if (cat !== 'all' && m.cat !== cat) return false;
      if (!words.length) return true;
      const hay = [m.name, cw.colour, cw.code, cw.g === 'MW' ? 'men women' : L.g[cw.g]]
        .join(' ')
        .toLowerCase();
      return words.every((w) => hay.includes(w));
    };
    return CATS.map((c) => ({
      cat: c,
      items: LINEUP.filter((m) => m.cat === c)
        .map((m) => ({ m, cws: m.cw.filter((cw) => match(m, cw)) }))
        .filter((x) => x.cws.length),
    })).filter((x) => x.items.length);
  }, [g, cat, q]);

  const nM = groups.reduce((a, x) => a + x.items.length, 0);
  const nC = groups.reduce((a, x) => a + x.items.reduce((b, i) => b + i.cws.length, 0), 0);
  const curOf = (m, cws) => cws.find((c) => c.code === sel[m.name]) || cws[0];
  const pick = (name, code) => setSel((s) => ({ ...s, [name]: code }));
  const openModel = openName && LINEUP.find((m) => m.name === openName);

  return (
    <section className="section lu" id="lineup">
      <div className="container">
        <header className="lu-top">
          <div>
            <p className="lu-eyebrow">Barefoot Inc · Vivobarefoot · Thailand</p>
            <h2 className="h-section">Lineup</h2>
            <p className="lu-tabnote">{L.noteStore}</p>
          </div>
          <div className="lu-stats">
            <div className="lu-stat">
              <b>{stats.m}</b>
              <span>{L.stModels}</span>
            </div>
            <div className="lu-stat">
              <b>{stats.c}</b>
              <span>{L.stColours}</span>
            </div>
            <div className="lu-stat">
              <b>
                ฿{fmt(stats.lo)}–{fmt(stats.hi)}
              </b>
              <span>{L.stPrice}</span>
            </div>
          </div>
        </header>

        <div className="lu-bar" role="toolbar">
          <div className="lu-seg">
            {GENDERS.map((x) => (
              <button key={x.v} aria-pressed={g === x.v} onClick={() => setG(x.v)}>
                {x.label}
              </button>
            ))}
          </div>
          <div className="lu-seg">
            <button aria-pressed={cat === 'all'} onClick={() => setCat('all')}>
              {L.allCats}
            </button>
            {CATS.map((c) => (
              <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>
                {CATNAME[c]}
              </button>
            ))}
          </div>
          <label className="lu-search">
            <input
              type="search"
              value={q}
              placeholder={L.search}
              aria-label={L.search}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
          <span className="lu-count">
            {nM} models / {nC} colours
          </span>
        </div>

        {groups.length ? (
          groups.map(({ cat: c, items }) => (
            <div className="lu-cat" key={c}>
              <h3 className="lu-cath">
                {CATNAME[c]}
                <small>
                  {L.cat[c]} · {items.length} model{items.length === 1 ? '' : 's'}
                </small>
              </h3>
              <div className="lu-grid">
                {items.map(({ m, cws }) => (
                  <Card
                    key={m.name}
                    m={m}
                    cws={cws}
                    cur={curOf(m, cws)}
                    onSelect={(code) => pick(m.name, code)}
                    onOpen={() => setOpenName(m.name)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="lu-empty">{L.empty}</p>
        )}
      </div>

      {openModel && (
        <Detail
          m={openModel}
          cur={curOf(openModel, openModel.cw)}
          onSelect={(code) => pick(openModel.name, code)}
          onClose={() => setOpenName(null)}
        />
      )}
    </section>
  );
}
