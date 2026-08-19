import { scrollToId } from '../lib/nav';

const STATS = [
  { figure: '57%', copy: 'stronger feet in six months*' },
  { figure: '200,000', copy: 'nerve endings in every pair of feet' },
  { figure: '1M+', copy: 'people already moving in Vivos' },
];

export default function Benefits() {
  return (
    <section className="section benefits" id="why">
      <div className="container">
        <div className="benefits__grid">
          <div className="benefits__lede">
            <h2 className="h-section">Embrace the benefits of barefoot shoes</h2>
            <p>
              Our barefoot shoes free your feet to feel more, move naturally, and
              reconnect with what it means to be human.
            </p>
            <p>
              We design all Vivos with a natural <strong>fit</strong> that supports
              balance and posture, natural <strong>feel</strong> to enable
              coordination and agility, and natural <strong>flex</strong> for
              unlocking strength and movement.
            </p>
            <p>
              Barefoot footwear helps build strong, stable, sensory feet —
              biomechanical masterpieces, fit for your future.
            </p>
          </div>

          <div className="benefits__stats">
            {STATS.map((s) => (
              <div className="stat" key={s.figure}>
                <p className="stat__figure">{s.figure}</p>
                <p className="stat__copy">{s.copy}</p>
              </div>
            ))}
            <a className="btn btn--dark" href="#faq" onClick={(e) => scrollToId(e, 'faq')}>
              Why barefoot is better
            </a>
          </div>
        </div>

        <p className="footnote">
          *Study by Curtis: “Daily Activity in Minimalist Footwear Increases Foot
          Strength” (2021).
        </p>
      </div>
    </section>
  );
}
