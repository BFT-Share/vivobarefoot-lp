const PILLARS = [
  {
    key: 'Fit',
    lede: 'Natural fit supports',
    title: 'Balance and posture',
    img: '/img/fit.jpg',
    copy: 'A wide, foot-shaped toe box lets your toes splay and play, supporting a stable foundation. That encourages better posture, helps reduce joint pain, and promotes balance for every walk, hike, run and workout.',
  },
  {
    key: 'Feel',
    lede: 'Natural feel enables',
    title: 'Coordination and agility',
    img: '/img/feel.jpg',
    copy: 'Your feet are central to your proprioceptive system, which provides 70% of your brain’s movement information. Thin soles transmit more sensory feedback, improving movement skill and helping you avoid trips and slips.',
  },
  {
    key: 'Flex',
    lede: 'Natural flex unlocks',
    title: 'Strength and movement',
    img: '/img/flex.jpg',
    copy: 'Flexible footwear lets your muscles and tendons load and recoil, putting spring in your step and promoting natural strength and mobility. Six months in Vivos increases foot strength by 57%.',
  },
];

export default function FitFeelFlex() {
  return (
    <section className="section pillars">
      <div className="container">
        <h2 className="h-display pillars__head">WHY Vivobarefoot？</h2>

        <div className="grid grid--pillars">
          {PILLARS.map((p) => (
            <article className="pillar" key={p.key}>
              <div className="pillar__media">
                <img src={p.img} alt="" loading="lazy" />
              </div>
              <p className="pillar__lede">{p.lede}</p>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__copy">{p.copy}</p>
            </article>
          ))}
        </div>

        <p className="pillars__foot">
          The best bit of technology to go in a shoe is the human foot.
        </p>
      </div>
    </section>
  );
}
