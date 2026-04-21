// components/NumbersSection.jsx
'use client';
import { useState } from 'react';

const tabs = ['Mall Location', 'High Street', 'Container'];

const data = {
  mall: {
    rows: [
      { label: 'Franchise License Fee',  val: '$25,000' },
      { label: 'Total Setup Investment', val: '$180K–$200K' },
      { label: 'Space',                  val: '500–750 sq ft' },
      { label: 'Avg. Annual Revenue',    val: '$1.5M–$2.5M' },
      { label: 'Cost of Goods',          val: '25–28%' },
      { label: 'Gross Profit',           val: '72–75%',  highlight: true, color: 'yellow' },
      { label: 'EBITDA (target)',        val: '30%+',    highlight: true, color: 'green'  },
    ],
    bars: [
      { name: 'Gross Profit',       pct: 73, color: 'var(--yellow)' },
      { name: 'After Labor & Rent', pct: 42, color: '#5CB87A' },
      { name: 'EBITDA',             pct: 30, color: 'var(--yellow)' },
    ],
    payback: {
      val:  '~3–4 Years',
      desc: 'Based on target AUV of $1.5M–$2.5M and 30%+ EBITDA. Actual results depend on location, staffing, and operational execution. We\'ll give you honest projections — not best-case scenarios.',
    },
  },
  street: {
    rows: [
      { label: 'Franchise License Fee',  val: '$25,000' },
      { label: 'Total Setup Investment', val: '$225K–$250K' },
      { label: 'Space',                  val: '120–200 m²' },
      { label: 'Avg. Annual Revenue',    val: '$1.5M–$2.5M' },
      { label: 'Cost of Goods',          val: '25–28%' },
      { label: 'Gross Profit',           val: '72–75%',  highlight: true, color: 'yellow' },
      { label: 'EBITDA (target)',        val: '30%+',    highlight: true, color: 'green'  },
    ],
    bars: [
      { name: 'Gross Profit',       pct: 73, color: 'var(--yellow)' },
      { name: 'After Labor & Rent', pct: 40, color: '#5CB87A' },
      { name: 'EBITDA',             pct: 30, color: 'var(--yellow)' },
    ],
    payback: {
      val:  '~3–5 Years',
      desc: 'Higher setup cost offset by flagship brand presence and maximum visibility. Ideal for investors focused on brand-building in key urban markets.',
    },
  },
  container: {
    rows: [
      { label: 'Franchise License Fee',  val: '$25,000' },
      { label: 'Total Setup Investment', val: '$150K–$175K' },
      { label: 'Format',                 val: 'Mobile / Beachside' },
      { label: 'Avg. Annual Revenue',    val: '$1.5M–$2.5M' },
      { label: 'Cost of Goods',          val: '25–28%' },
      { label: 'Gross Profit',           val: '72–75%',  highlight: true, color: 'yellow' },
      { label: 'EBITDA (target)',        val: '30%+',    highlight: true, color: 'green'  },
    ],
    bars: [
      { name: 'Gross Profit',      pct: 73, color: 'var(--yellow)' },
      { name: 'After Labor & Ops', pct: 45, color: '#5CB87A' },
      { name: 'EBITDA',            pct: 30, color: 'var(--yellow)' },
    ],
    payback: {
      val:  '~2.5–3.5 Years',
      desc: 'Lowest entry investment in the BKP lineup. Ideal for testing a new market, seasonal activations, or event-based locations before committing to a fixed site.',
    },
  },
};

const keys = ['mall', 'street', 'container'];

export default function NumbersSection() {
  const [active, setActive] = useState(0);
  const panel = data[keys[active]];

  return (
    <section className="bkp-numbers" id="numbers">
      <div className="fade-up">
        <span className="section-label">Full Transparency on Financials</span>
        <h2 className="section-h">
          No smoke. No mirrors.<br />
          Here are the numbers.
        </h2>
        <p className="bkp-numbers__intro">
          We believe you should understand exactly what you&apos;re investing in before we
          ever get on a call. These are BKP&apos;s unit economics — broken down by format,
          openly.
        </p>
      </div>

      {/* ── Tabs ── */}
      <div className="bkp-numbers__tabs fade-up">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`bkp-numbers__tab${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Active panel ── */}
      <div className="bkp-numbers__panel active fade-up">
        {/* breakdown */}
        <div className="bkp-numbers__breakdown">
          {panel.rows.map((r) => (
            <div
              key={r.label}
              className={`bkp-numbers__row${r.highlight ? ' bkp-numbers__row--highlight' : ''}`}
            >
              <span className="bkp-numbers__row-label">{r.label}</span>
              <span className={`bkp-numbers__row-val${r.color ? ` bkp-numbers__row-val--${r.color}` : ''}`}>
                {r.val}
              </span>
            </div>
          ))}
        </div>

        {/* visual */}
        <div className="bkp-numbers__visual">
          <div className="bkp-numbers__vis-title">Margin Breakdown</div>
          {panel.bars.map((b) => (
            <div className="bkp-bar" key={b.name}>
              <div className="bkp-bar__label">
                <span className="bkp-bar__name">{b.name}</span>
                <span className="bkp-bar__pct">{b.pct}%</span>
              </div>
              <div className="bkp-bar__track">
                <div
                  className="bkp-bar__fill"
                  style={{ width: `${b.pct}%`, background: b.color }}
                />
              </div>
            </div>
          ))}
          <div className="bkp-payback">
            <div className="bkp-payback__label">Estimated Payback Period</div>
            <div className="bkp-payback__val">{panel.payback.val}</div>
            <div className="bkp-payback__desc">{panel.payback.desc}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
