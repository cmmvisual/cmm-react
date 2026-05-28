import React, { useState } from 'react';
import './ContactForm.css';

// Get your free key at web3forms.com → enter your email → copy the key
const ACCESS_KEY = 'fe111d05-e646-45f2-9152-a801a797a597';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name:       form.name,
          email:      form.email,
          subject:    `CMM-Kontaktanfrage: ${form.subject}`,
          message:    form.message,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setSubmitted(true);
    } catch (err) {
      setError('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form-wrapper">
        <div className="form-success">
          <p>Danke! Ich melde mich so schnell wie möglich bei dir.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Dein Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="deine@email.de"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Betreff</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Worum geht es?"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Nachricht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Schreib mir eine Nachricht…"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="form-submit-btn" disabled={loading}>
          {loading ? 'Wird gesendet…' : 'Nachricht senden'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
