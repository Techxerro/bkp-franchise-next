// components/CtaSection.jsx
'use client';
import { useState } from 'react';

const bullets = [
  'No commitment required to request info',
  'Discovery call takes 30 minutes',
  'Early partners choose their territory first',
];

export default function CtaSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bkp-cta" id="apply">
      <div className="bkp-cta__inner">
        {/* ── Left copy ── */}
        <div className="bkp-cta__left fade-up">
          <span className="section-label">Ready to Talk</span>
          <h2 className="section-h">
            Are you the right<br />
            person to bring BKP<br />
            to your city?
          </h2>
          <p className="section-body">
            We&apos;re not looking for passive investors. We want partners who are serious
            about building something in their market — people who are energized by the brand,
            committed to quality, and ready to take ownership of a location. If that&apos;s
            you, let&apos;s talk.
          </p>
          <div className="bkp-cta__bullet mt-4">
            {bullets.map((b) => (
              <div className="bkp-cta__bullet-item" key={b}>
                <div className="bkp-cta__bullet-dot" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="bkp-cta__form-card fade-up delay-2">
          <div className="bkp-cta__form-title">Request Franchise Information</div>
          <div className="bkp-cta__form-sub">
            Fill in the form and we&apos;ll send you the full franchise kit — financials,
            operational details, and territory availability — within 24 hours.
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name row */}
            <div className="bkp-form__row">
              <div>
                <label className="bkp-form__label">First Name</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="Alex"
                  required
                />
              </div>
              <div>
                <label className="bkp-form__label">Last Name</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="Hormozi"
                  required
                />
              </div>
            </div>

            <div className="bkp-form__row">
              <div>
                <label className="bkp-form__label">Email</label>
                <input
                  type="email"
                  className="bkp-form__input"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="bkp-form__label">Your City / Country</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="e.g. Dubai, UAE"
                  required
                />
              </div>
            </div>

            <label className="bkp-form__label">Format You&apos;re Considering</label>
            <select className="bkp-form__select" defaultValue="">
              <option value="" disabled>Select a format</option>
              <option>Mall Location ($180K–$200K)</option>
              <option>High Street ($225K–$250K)</option>
              <option>Container / Mobile ($150K–$175K)</option>
              <option>Not Sure Yet</option>
            </select>

            <label className="bkp-form__label">Available Capital (approx.)</label>
            <select className="bkp-form__select" defaultValue="">
              <option value="" disabled>Select a range</option>
              <option>$150K–$200K</option>
              <option>$200K–$300K</option>
              <option>$300K–$500K</option>
              <option>$500K+</option>
            </select>

            <button
              type="submit"
              className={`bkp-form__submit${sent ? ' bkp-form__submit--sent' : ''}`}
              disabled={sent}
            >
              {sent ? '✓ Request Sent — Check Your Email' : 'Send My Request →'}
            </button>
          </form>

          <div className="bkp-form__disclaimer">
            No spam. No cold calls. We&apos;ll send the franchise kit and schedule a call
            only if you want one. Contact:{' '}
            <a href="mailto:sheldon@bigkpizza.com">sheldon@bigkpizza.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
