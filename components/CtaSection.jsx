// components/CtaSection.jsx
'use client';
import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://admin.bigkpizza.com/api/business-inquiry-submit';

const bullets = [
  'No commitment required to request info',
  'Discovery call takes 30 minutes',
  'Early partners choose their territory first',
];

const INITIAL_FORM = {
  first_name: '',
  second_name: '',
  email: '',
  location: '',
  business_format: '',
  available_capital: '',
};

export default function CtaSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await axios.post(
        API_URL,
        {
          first_name: formData.first_name,
          second_name: formData.second_name,
          email: formData.email,
          location: formData.location,
          business_format: formData.business_format,
          available_capital: formData.available_capital,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log('API response:', response.data);
      setStatus('success');
      setFormData(INITIAL_FORM);
      setShowBrochurePopup(true); // ← SHOW POPUP ON SUCCESS
    } catch (err) {
      console.error('Server error body:', err.response?.data);
      console.error('Status code:', err.response?.status);

      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        (typeof err.response?.data === 'string' ? err.response.data : null) ||
        err.message ||
        'Something went wrong. Please try again.';

      setStatus('error');
      setErrorMessage(msg);
    }
  };

  // ── NEW: Download handler ──
  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/big-kahuna-franchise.pdf'; // Ensure this path is correct
    link.download = 'Big-Kahuna-Pizza-Franchise-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowBrochurePopup(false);
  };

  const isSent = status === 'success';
  const isLoading = status === 'loading';

  return (
    <section className="bkp-cta" id="apply">

      {/* ── NEW: Download Brochure Popup ── */}
      {showBrochurePopup && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-3 max-w-md w-full text-center shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mt-4">Download Our Brochure</h3>
            <p className="text-gray-600 mb-2 text-sm">
              Thank you for your interest in opening a franchise of BKP! Click below to
              download our franchise brochure. Big Kahuna Pizza will soon connect with you.
            </p>
            <div className="p-4 rounded-lg flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadBrochure}
                className="bg-[#F5B504] text-black px-6 py-3 rounded-2xl hover:bg-amber-400 transition ease-in-out font-bold flex-1"
                style={{borderRadius:'6px'}}
              >
                Download Now
              </button>
              <button
                onClick={() => setShowBrochurePopup(false)}
                className="bg-[#DA1832] text-white px-6 py-3 rounded-2xl hover:bg-[#e41830] transition ease-in-out font-bold flex-1"
                style={{borderRadius:'6px'}}
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}

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
          <div className="bkp-cta__form-title">Request Franchise Information and download brochure</div>
          <div className="bkp-cta__form-sub">
            Fill in the form and we&apos;ll send you the full franchise kit — financials,
            operational details, and territory availability — within 24 hours.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bkp-form__row">
              <div>
                <label className="bkp-form__label">First Name</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="John"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="bkp-form__label">Last Name</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="Doe"
                  name="second_name"
                  value={formData.second_name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="bkp-form__label">Your City / Country</label>
                <input
                  type="text"
                  className="bkp-form__input"
                  placeholder="e.g. Dubai, UAE"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label className="bkp-form__label">Format You&apos;re Considering</label>
            <select
              className="bkp-form__select"
              name="business_format"
              value={formData.business_format}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a format</option>
              <option value="Mall Location ($180K–$200K)">Mall Location ($180K–$200K)</option>
              <option value="High Street ($225K–$250K)">High Street ($225K–$250K)</option>
              <option value="Container / Mobile ($150K–$175K)">Container / Mobile ($150K–$175K)</option>
              <option value="Food Truck ($120K–$150K)">Food Truck ($120K–$150K)</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>

            <label className="bkp-form__label">Available Capital (approx.)</label>
            <select
              className="bkp-form__select"
              name="available_capital"
              value={formData.available_capital}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a range</option>
              <option value="$150K–$200K">$150K–$200K</option>
              <option value="$200K–$300K">$200K–$300K</option>
              <option value="$300K–$500K">$300K–$500K</option>
              <option value="$500K+">$500K+</option>
            </select>

            <button
              type="submit"
              className={`bkp-form__submit${isSent ? ' bkp-form__submit--sent' : ''}`}
              disabled={isSent || isLoading}
            >
              {isLoading
                ? 'Sending…'
                : isSent
                ? '✓ Request Sent — Check Your Email'
                : 'Send My Request →'}
            </button>

            {status === 'error' && (
              <p className="bkp-form__error" style={{ color: 'red', marginTop: '0.5rem' }}>
                {errorMessage}
              </p>
            )}
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