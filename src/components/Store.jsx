import { useState } from 'react';
import { HOURS, STORE } from '../lib/nav';
import Modal from './Modal';

export default function Store() {
  const [map, setMap] = useState(false);

  return (
    <section className="section store" id="visit">
      <div className="container">
        <div className="store__grid">
          <div className="store__copy">
            <h2 className="h-section">
              Try them on
              <span className="store__headBreak">@ Barefootinc K Village</span>
            </h2>
            <p className="store__lede">
              Barefoot sizing is not the same as your normal shoe size. Come in, get
              measured, and let our team walk you through fit, feel and the
              transition — the whole VIVOBAREFOOT range is on the shelf.
            </p>

            <dl className="store__details">
              <div className="store__detail">
                <dt>Address</dt>
                <dd>
                  {STORE.address}
                  <button className="store__maplink" onClick={() => setMap(true)}>
                    Location map
                  </button>
                </dd>
              </div>

              <div className="store__detail">
                <dt>Opening hours</dt>
                <dd>
                  <ul className="store__hours">
                    {HOURS.map((h) => (
                      <li key={h.day}>
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>

              <div className="store__detail">
                <dt>Line official</dt>
                <dd>
                  <a href={STORE.lineUrl} target="_blank" rel="noopener noreferrer">
                    {STORE.line}
                  </a>
                </dd>
              </div>
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

      <Modal open={map} onClose={() => setMap(false)} label="K Village floor plan" wide>
        <img
          className="modal__image"
          src="/img/store-map.jpg"
          alt="K Village floor plan showing the Barefootinc store on the 1st floor of Building B"
        />
      </Modal>
    </section>
  );
}
