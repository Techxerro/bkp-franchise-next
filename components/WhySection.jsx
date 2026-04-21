// components/WhySection.jsx
const cards = [
  {
    num: '01',
    title: '30 Years of Brand Equity',
    body: "BKP has been earning customer trust since 1994. That's not marketing copy — that's a track record. You're not launching a brand, you're bringing an established one to your city.",
  },
  {
    num: '02',
    title: 'Food That Sells Itself',
    body: 'Fresh dough rolled daily, locally sourced ingredients, zero additives. When the food is genuinely good, word-of-mouth does the heavy lifting. Your marketing budget works harder.',
  },
  {
    num: '03',
    title: 'Landlord & Mall Appeal',
    body: "A lifestyle brand with a distinct vibe is a foot-traffic puller — not just a tenant. Landlords compete for brands that drive dwell time. BKP checks that box in ways generic pizza brands don't.",
  },
  {
    num: '04',
    title: '3 Formats, One System',
    body: 'Mall, High Street, or Container. One proven operational playbook, three different real estate footprints. You choose what fits your market and capital — not the other way around.',
  },
  {
    num: '05',
    title: 'Lean Cost of Goods',
    body: '25–28% COGs with 72–75% gross profit. In QSR, this is the foundation everything else is built on. Strong margins mean you have breathing room for staffing, rent, and growth.',
  },
  {
    num: '06',
    title: 'First-Mover Opportunity',
    body: "BKP is opening its franchise program now. The franchisees who enter early get the best territories, the most direct franchisor support, and the strongest unit economics before saturation.",
  },
];

const proofStats = [
  { val: '$1.5M–$2.5M', label: 'EBITDA target on mature locations' },
  { val: '72–75%',      label: 'Gross Profit Margin' },
  { val: '30%+',        label: 'EBITDA Target' },
  { val: '$25K',        label: 'Franchise License Fee' },
];

export default function WhySection() {
  return (
    <section className="bkp-why">
      <div className="bkp-why__header fade-up">
        <span className="section-label">The Structural Advantages</span>
        <h2 className="section-h">
          Six reasons serious<br />
          investors look twice at BKP.
        </h2>
      </div>
    
      {/* ── Cards grid ── */}
      <div className="bkp-why__grid fade-up">
        {cards.map((c) => (
          <div className="bkp-why__card" key={c.num}>
            <div className="bkp-why__card-num">{c.num}</div>
            <div className="bkp-why__card-title">{c.title}</div>
            <div className="bkp-why__card-body">{c.body}</div>
          </div>
        ))}
      </div>

      {/* ── Proof bar ── */}
      <div className="bkp-why__proof fade-up">
        {proofStats.map((s, i) => (
          <>
            <div className="bkp-why__proof-item" key={s.label}>
              <div className="bkp-why__proof-val">{s.val}</div>
              <div className="bkp-why__proof-label">{s.label}</div>
            </div>
            {i < proofStats.length - 1 && (
              <div className="bkp-why__proof-divider" key={`div-${i}`} />
            )}
          </>
        ))}
      </div>
    </section>
  );
}
