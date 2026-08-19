import { STORE } from '../lib/nav';

const DETAILS = [
  { label: 'Store', value: `${STORE.name} — ${STORE.address}` },
  { label: 'Opening hours', value: STORE.hours },
  { label: 'Line official', value: STORE.line },
  { label: 'Phone', value: STORE.phone, href: STORE.phoneHref },
];

export default function Store() {
  return (
    <section className="section store" id="visit">
      <div className="container">
        <div className="store__grid">
          <div className="store__copy">
            <h2 className="h-section">Try them on in Bangkok</h2>
            <p className="store__lede">
              Barefoot sizing is not the same as your normal shoe size. Come in, get
              measured, and let our team walk you through fit, feel and the
              transition — the whole VIVOBAREFOOT range is on the shelf.
            </p>

            <dl className="store__details">
              {DETAILS.map((d) => (
                <div className="store__detail" key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="store__cta">
              <a
                className="btn btn--dark"
                href={STORE.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
              <a
                className="btn btn--outline"
                href={STORE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on Line
              </a>
            </div>
          </div>

          <div className="store__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9869622544525!2d100.5695848!3d13.7208242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f8ec5f3541b%3A0x42529edbca4748fa!2sBarefootinc%20Flagship%20Store%20(Official%20distributor%20of%20Vibram%20FiveFingers)!5e0!3m2!1sen!2sth!4v1714459820000!5m2!1sen!2sth"
              title="Barefootinc Flagship Store, K Village Bangkok"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
