'use client';

import { useState } from 'react';
import './Happy.css';

const POSSESSION_OPTIONS = [
  { value: 'already_taken',   label: 'Already taken' },
  { value: 'within_3_months', label: 'Within 3 months' },
  { value: '3_6_months_away', label: '3–6 months away' },
  { value: 'just_exploring',  label: 'Just exploring' },
];

export default function Happy() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    possessionStatus: '',
    city: '',
  });
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim())
      return setError('Please enter your full name.');
    if (!formData.email.trim())
      return setError('Please enter your email address.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return setError('Please enter a valid email address.');
    if (!formData.mobile.trim())
      return setError('Please enter your mobile number.');
    if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/[\s\-()]/g, '')))
      return setError('Please enter a valid 10-digit mobile number.');
    if (!formData.possessionStatus)
      return setError('Please select your possession status.');

    setLoading(true);
    try {
      const res = await fetch('/api/free-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="happy-hero">
      <div className="happy-blob1" aria-hidden="true" />
      <div className="happy-blob2" aria-hidden="true" />

      <div className="happy-container">

        {/* LEFT */}
        <div className="happy-left">
          <div className="happy-badge">
            <span className="happy-badge-dot" />
            Join 2,500+ Happy Homeowners
          </div>

          <h1 className="happy-heading">
            Start Your<br />
            Interiors The<br />
            Right <em>Way.</em>
          </h1>

          <p className="happy-subtext">
            Before you spend money, structure your decisions with the{' '}
            <strong>Start-Right Interior Decision Kit.</strong>
          </p>

          <ul className="happy-perks">
            <li className="happy-perk"><span className="happy-perk-icon">⚡</span> Instant Access</li>
            <li className="happy-perk"><span className="happy-perk-icon">◎</span> 100% Free</li>
            <li className="happy-perk"><span className="happy-perk-icon">✓</span> No Spam, Ever</li>
          </ul>
        </div>

        {/* RIGHT — CARD */}
        <div className="happy-card">
          {submitted ? (
            <div className="happy-success">
              <div className="happy-success-icon-wrap">
                <span className="happy-success-emoji" role="img" aria-label="Party popper">🎉</span>
              </div>
              <h2 className="happy-success-title">Your Kit Is On Its Way!</h2>
              <p className="happy-success-text">
                We&apos;ve just sent the <strong>Start-Right Interior Decision Kit</strong> PDF
                to your inbox. Open it and start planning your dream home the right way!
              </p>
              <div className="happy-success-hint">
                📬 Can&apos;t find it? Check your <strong>Spam</strong> or <strong>Promotions</strong> folder.
              </div>
            </div>
          ) : (
            <>
              <div className="happy-card-top">
                <h2 className="happy-card-title">Get The Start-Right Interior Kit</h2>
                <p className="happy-card-sub">Free instant download. No credit card required.</p>
              </div>

              <form className="happy-form" onSubmit={handleSubmit} noValidate>

                <div className="happy-field">
                  <label className="happy-label" htmlFor="fullName">
                    Full Name <span className="happy-req">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    className="happy-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="happy-field">
                  <label className="happy-label" htmlFor="email">
                    Email Address <span className="happy-req">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="happy-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="happy-field">
                  <label className="happy-label" htmlFor="mobile">
                    Mobile Number <span className="happy-req">*</span>
                  </label>
                  <div className="happy-phone-row">
                    <span className="happy-phone-prefix">+91</span>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel-national"
                      className="happy-input happy-phone-input"
                      placeholder="99999 99999"
                      maxLength={11}
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="happy-field">
                  <label className="happy-label" htmlFor="possessionStatus">
                    Possession Status <span className="happy-req">*</span>
                  </label>
                  <div className="happy-select-wrap">
                    <select
                      id="possessionStatus"
                      name="possessionStatus"
                      className="happy-select"
                      value={formData.possessionStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your status</option>
                      {POSSESSION_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <span className="happy-select-caret" aria-hidden="true">
                      <svg viewBox="0 0 10 6" width="10" height="6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="#8a7e79" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="happy-field">
                  <label className="happy-label" htmlFor="city">
                    City <span className="happy-optional">(Optional)</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="happy-input"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                {error && (
                  <div className="happy-error" role="alert">
                    <span>⚠</span> {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="happy-btn"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading
                    ? <span className="happy-spinner" aria-label="Sending…" />
                    : <><span>Send Me The Kit</span><span className="happy-btn-arrow">→</span></>
                  }
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}