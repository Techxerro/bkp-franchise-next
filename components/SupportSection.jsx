// components/SupportSection.jsx
const steps = [
  {
    num: '01',
    title: 'Site Selection & Layout',
    body: "We help you evaluate your market, identify the right location, and fit out the space to BKP spec. You don't guess — we've done this before.",
  },
  {
    num: '02',
    title: 'Training & Operations',
    body: "Full onboarding on BKP's kitchen operations, dough process, quality standards, and hospitality culture. Everything that makes BKP, BKP.",
  },
  {
    num: '03',
    title: 'Launch Support',
    body: "Branding, local marketing playbook, supplier introductions, and opening day support. We're invested in your launch because your success validates the system.",
  },
  {
    num: '04',
    title: 'Ongoing Partnership',
    body: 'Regular check-ins, performance reviews, and access to the founding team as the brand grows. Early partners help shape how the franchise system evolves.',
  },
];

const promises = [
  {
    title: 'Honest numbers.',
    body: "The projections we share are based on what we believe is realistic — not cherry-picked best cases. If a location looks weak, we'll tell you.",
  },
  {
    title: 'Direct access.',
    body: "As an early partner, you'll work directly with BKP's core team — not a franchise coordinator you've never met.",
  },
  {
    title: 'Territory protection.',
    body: "First partners get first pick of territories. Once your market is yours, we don't open competing locations around you.",
  },
  {
    title: 'A brand with real loyalty.',
    body: "30 years of customer relationships. You're not building brand awareness from scratch — you're bringing an established one home.",
  },
];

export default function SupportSection() {
  return (
    <section className="bkp-support">
      <div className="bkp-support__grid">
        {/* ── Left column ── */}
        <div>
          <div className="fade-up">
            <span className="section-label">What You Get With BKP</span>
            <h2 className="section-h">
              You won&apos;t be<br />
              figuring this out alone.
            </h2>
            <p className="section-body" style={{ marginBottom: '2.5rem' }}>
              As an early franchise partner, you get direct access to BKP&apos;s founding
              team — not a call center. Here&apos;s what the partnership looks like from
              day one.
            </p>
          </div>

          <div className="bkp-support__list fade-up delay-1">
            {steps.map((s) => (
              <div className="bkp-support__item" key={s.num}>
                <div className="bkp-support__step">{s.num}</div>
                <div>
                  <div className="bkp-support__item-title">{s.title}</div>
                  <div className="bkp-support__item-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: promise card ── */}
        <div className="bkp-support__promise fade-up delay-2">
          <div className="bkp-support__promise-label">What We Can Promise You</div>

          {promises.map((p) => (
            <div className="bkp-support__point" key={p.title}>
              <div className="bkp-support__point-dot" />
              <div className="bkp-support__point-text">
                <strong>{p.title}</strong> {p.body}
              </div>
            </div>
          ))}

          <div className="bkp-support__promise-footer">
            We&apos;re selective about who we partner with because each franchisee
            represents BKP in their city. If this sounds like a fit, we want to hear
            from you. If it&apos;s not the right time, that&apos;s okay too — there&apos;s
            no pressure here.
          </div>
        </div>
      </div>
    </section>
  );
}
