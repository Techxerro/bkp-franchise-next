// components/TruthSection.jsx
const items = [
  {
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.3139" y="-0.414185" width="2" height="18" rx="1" transform="rotate(45 12.3139 -0.414185)" fill="#DA1832"/>
        <rect x="13.7279" y="12.3143" width="2" height="18" rx="1" transform="rotate(135 13.7279 12.3143)" fill="#DA1832"/>
        </svg>,
    variant: 'red',
    title: 'The problem: commoditized brands',
    body: 'Most pizza chains compete on price and discounts. When you\'re in a price war, margins get squeezed — and the franchisee pays the price, not the franchisor. Customers have no reason to stay loyal.',
  },
  {
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.3139" y="-0.414185" width="2" height="18" rx="1" transform="rotate(45 12.3139 -0.414185)" fill="#DA1832"/>
        <rect x="13.7279" y="12.3143" width="2" height="18" rx="1" transform="rotate(135 13.7279 12.3143)" fill="#DA1832"/>
        </svg>,
    variant: 'red',
    title: 'The problem: no identity',
    body: 'A blank-slate brand needs you to spend on marketing just to exist. Without a distinctive identity, you\'re fighting for awareness from day one with no organic word-of-mouth behind you.',
  },
  {
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.3139" y="-0.414185" width="2" height="18" rx="1" transform="rotate(45 12.3139 -0.414185)" fill="#DA1832"/>
        <rect x="13.7279" y="12.3143" width="2" height="18" rx="1" transform="rotate(135 13.7279 12.3143)" fill="#DA1832"/>
        </svg>,
    variant: 'red',
    title: 'The problem: one rigid format',
    body: 'Most franchise systems lock you into one expensive box. If the location doesn\'t work, you have no flexibility. Your entire investment depends on a single real estate bet.',
  },
  {
    icon: <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8L6.5 13.5L19 1" stroke="#62CD41" stroke-width="2" stroke-linecap="round"/>
          </svg>,
    variant: 'green',
    title: 'What BKP gets right',
    body: 'A 30-year-old brand with a genuine lifestyle identity, a loyal customer base built on food quality — not discounts — and three flexible formats that adapt to your market. Customers don\'t come back because of a deal. They come back because it feels like their place.',
  },
];

export default function TruthSection() {
  return (
    <section className="bkp-truth" id="why">
      <div className="fade-up">
        <span className="section-label">What Most Franchise Pitches Won&apos;t Tell You</span>
        <h2 className="section-h">
          Most QSR brands fail<br />
          investors. Here&apos;s why<br />
          BKP is different.
        </h2>
      </div>

      <div className="bkp-truth__grid">
        {/* ── Item list ── */}
        <div className="bkp-truth__list fade-up">
          {items.map((item) => (
            <div className="bkp-truth__item" key={item.title}>
              <div className={`bkp-truth__icon bkp-truth__icon--${item.variant}`}>
                {item.icon}
              </div>
              <div>
                <div className={`bkp-truth__item-title bkp-truth__item-title--${item.variant}`}>{item.title}</div>
                <div className="bkp-truth__item-body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Quote callout ── */}
        <div className="bkp-truth__callout fade-up delay-2">
          <div className="bkp-truth__callout-text">
            &ldquo;The only thing better than a great product is a great product with a{' '}
            <strong>story people want to be part of.</strong> BKP has both — and it&apos;s
            been earning repeat customers since 1994.&rdquo;
          </div>
          <div className="bkp-truth__callout-sub">
            In QSR, customer lifetime value is everything. A brand with identity and loyalty
            built into its DNA is worth significantly more than one that relies on promotional
            spend to drive footfall. BKP&apos;s beach-born story, fresh-daily commitment, and
            Hawaiian vibe aren&apos;t marketing — they&apos;re operational realities customers
            can see, smell, and taste on every visit.
          </div>
        </div>
      </div>
    </section>
  );
}
