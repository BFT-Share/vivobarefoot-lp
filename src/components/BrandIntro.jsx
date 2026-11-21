export default function BrandIntro() {
  return (
    <section className="section intro">
      <div className="container">
        <div className="intro__grid">
          <div className="intro__media">
            <img src="/img/intro.jpg" alt="" loading="lazy" />
          </div>

          <div className="intro__copy">
            <p className="intro__eyebrow">The brand</p>
            <h2 className="h-section">Vivobarefoot has landed in Thailand</h2>

            <p>
              Vivobarefoot makes foot-shaped footwear: wide enough for your toes to
              splay, thin enough to feel the ground, and flexible enough for your feet
              to move the way they evolved to. No thick cushioning dulling the
              feedback, no narrow toe box squeezing your toes, no raised heel tipping
              you forward.
            </p>
            <p>
              The whole idea is that the best piece of technology to go in a shoe is
              the human foot — so the shoe gets out of its way.
            </p>
            <p>
              After years of one-off imports, the range is finally on the shelf here.
              Barefootinc at K Village is the official Vivobarefoot store in Thailand,
              with the full line-up to try on and a team who will fit you properly.
            </p>

            <div className="intro__bcorp">
              <img
                src="/brand/bcorp-black.png"
                alt="Certified B Corporation"
                width="66"
                height="42"
                loading="lazy"
              />
              <p>
                Vivobarefoot is a Certified B Corporation — independently verified
                against standards for social and environmental performance,
                transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
