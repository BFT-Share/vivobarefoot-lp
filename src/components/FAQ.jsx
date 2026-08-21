import { useState } from 'react';
import Modal from './Modal';

const ITEMS = [
  {
    q: 'How do I transition to barefoot shoes safely?',
    a: 'Treat it like any other training load. If you have spent years in cushioned, narrow shoes, your feet need time to rebuild. Start with 30 to 60 minutes a day of casual walking, and build up over four to eight weeks. Hold off on long runs and heavy sessions until your calves, arches and Achilles have adapted.',
  },
  {
    q: 'Why do Vivos feel so much wider than my normal shoes?',
    a: 'That is the point. A wide toe box lets your toes spread and do their job of balancing you. Over time your toes will splay and your footprint will widen. Leave roughly a thumb’s width — 12 to 15 mm — in front of your longest toe so the foot can move forward as you walk.',
  },
  {
    q: 'What size should I buy?',
    a: 'Barefoot sizing rarely matches your usual size, and it varies by model. Measure both feet from heel to longest toe and compare against the chart — then add roughly a thumb’s width of room. Better still, come to the store in K Village and we will measure you and fit you properly. It takes about fifteen minutes and saves a return.',
    sizeChart: true,
  },
  {
    q: 'Are barefoot shoes suitable for running and the gym?',
    a: 'Yes. Primus Lite and Motus Strength are built for functional fitness, strength training and road running, and Primus Trail for off-road. Ground feedback improves your movement skill and ankle strength — just build the volume up gradually.',
  },
  {
    q: 'Can I try VIVOBAREFOOT on in Bangkok?',
    a: 'Yes. Barefootinc at K Village, Sukhumvit 26, is the official VIVOBAREFOOT store in Thailand. The full range is in stock to try on, seven days a week.',
  },
  {
    q: 'What does it mean that VIVOBAREFOOT is a B Corp?',
    a: 'B Corp certification means the business is independently verified against high standards of social and environmental performance, transparency and accountability. In practice that shows up as natural materials, recycled plastics and bio-based foams in the products.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [sizeChart, setSizeChart] = useState(false);

  return (
    <section className="section faq" id="faq">
      <div className="container container--narrow">
        <h2 className="h-section h-section--center">Common questions</h2>

        <div className="faq__list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__sign" aria-hidden="true" />
                </button>
                <div className="faq__a">
                  <div className="faq__aInner">
                    <p>{item.a}</p>
                    {item.sizeChart && (
                      <button
                        className="btn btn--outline btn--sm faq__chart"
                        onClick={() => setSizeChart(true)}
                      >
                        Check the size chart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        open={sizeChart}
        onClose={() => setSizeChart(false)}
        label="VIVOBAREFOOT size guide"
        wide
        image
      >
        <img
          className="modal__image"
          src="/img/size-guide.jpg"
          alt="VIVOBAREFOOT footwear size guide, men's and women's"
        />
      </Modal>
    </section>
  );
}
