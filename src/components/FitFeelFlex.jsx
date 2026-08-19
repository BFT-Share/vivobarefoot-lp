const PILLARS = [
  {
    key: 'Fit',
    lede: 'For natural stability',
    copy: 'Foot-shaped fit enables toes to splay, improving balance and providing a stable base of support.',
  },
  {
    key: 'Feel',
    lede: 'For natural sensory feedback',
    copy: 'A thin sole allows the thousands of nerve endings in each foot to give the brain the feedback it needs to move with skill.',
  },
  {
    key: 'Flex',
    lede: 'For natural movement',
    copy: 'Flexible footwear lets muscles and tendons load and recoil, so your feet get stronger and put a natural spring in every step.',
  },
];

export default function FitFeelFlex() {
  return (
    <section className="section pillars">
      <div className="container">
        <h2 className="h-display pillars__head">Rewild your feet</h2>
        <div className="grid grid--pillars">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.key}>
              <h3 className="pillar__key">{p.key}</h3>
              <p className="pillar__lede">{p.lede}</p>
              <p className="pillar__copy">{p.copy}</p>
            </div>
          ))}
        </div>
        <p className="pillars__foot">
          The best bit of technology to go in a shoe is the human foot.
        </p>
      </div>
    </section>
  );
}
