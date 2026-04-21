// components/Hero.jsx
export default function Hero() {
  return (
    <section className="bkp-hero">
      {/* ── LEFT ── */}
      <div className="bkp-hero__left">
        <div className="bkp-hero__eyebrow">
          {/* <div className="bkp-hero__eyebrow-dot" /> */}
          <div className="bkp-hero__eyebrow-text">
            Now Accepting Franchise Partners · Est. 1994
          </div>
        </div>

        <h1 className="bkp-hero__heading">
          The pizza brand<br />
          people <em>come back</em><br />
          to. Now open<br />
          for partners.
        </h1>

        <p className="bkp-hero__sub">
          Big Kahuna&apos;s Pizza has been building loyal customers for 30 years.
          We&apos;re not looking for operators — we&apos;re looking for the right partners
          to bring this brand to new cities. If you&apos;re serious about building
          something real, read on.
        </p>

        <div className="d-flex gap-3 flex-wrap">
          <a href="#apply" className="btn-bkp-yellow">Request Franchise Info</a>
          <a href="#why"   className="btn-bkp-ghost d-flex gap-2 align-items-center">See the Numbers First 
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 5.5L21 5.5M21 5.5L16 0.5M21 5.5L16 10.5" stroke="white" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="bkp-hero__right">
        {/* <div className="bkp-hero__bg-text">BKP</div> */}

        <div className="bkp-hero__year-badge">
          <div className="bkp-hero__year-badge-since">Est.</div>
          <div className="bkp-hero__year-badge-num">1994</div>
        </div>

        <div className="bkp-hero__stat-row">
          {[
            { val: '30%+',    desc: 'EBITDA target on mature locations' },
            { val: '72–75%',  desc: 'Gross profit margin built on fresh, lean operations' },
            { val: '3',       desc: 'Scalable formats from $150K entry investment' },
          ].map((s) => (
            <div className="bkp-hero__stat-card" key={s.val}>
              <div className="bkp-hero__stat-val">{s.val}</div>
              <div className="bkp-hero__stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
