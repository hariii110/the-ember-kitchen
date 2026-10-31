import { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send,
  MessageCircle, CalendarDays, Users, User, CheckCircle
} from 'lucide-react';
import './Contact.css';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_DISPLAY = '+91 98765 43210';
const PHONE_LINK = '+919876543210';
const EMAIL = 'hello@theemberkitchen.in';
const ADDRESS = '1/234, Fort Kochi Beach Road, Fort Kochi, Kochi, Kerala 682001';

const hours = [
  { days: 'Monday – Thursday', time: '12:00 PM – 11:00 PM' },
  { days: 'Friday – Saturday', time: '12:00 PM – 12:00 AM' },
  { days: 'Sunday', time: '11:00 AM – 11:00 PM' },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit number';
    }
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  // WhatsApp pre-filled message
  const whatsappMessage = encodeURIComponent(
    `Hi The Ember Kitchen! I'd like to make a reservation.\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\n\nPlease confirm availability. Thank you!`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="contact section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Reserve Your Table</h2>
          <p className="section-subtitle">
            Book your evening at The Ember Kitchen or reach out
            for private dining and special events.
          </p>
        </div>

        <div className="contact__grid">

          {/* ─── Left: Info ─── */}
          <div className="contact__info">

            <div className="contact__info-card">
              <MapPin size={20} className="contact__info-icon" />
              <div>
                <strong>Visit Us</strong>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-link"
                >
                  {ADDRESS}
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <Phone size={20} className="contact__info-icon" />
              <div>
                <strong>Call Us</strong>
                <a href={`tel:${PHONE_LINK}`} className="contact__info-link">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <Mail size={20} className="contact__info-icon" />
              <div>
                <strong>Email Us</strong>
                <a href={`mailto:${EMAIL}`} className="contact__info-link">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <Clock size={20} className="contact__info-icon" />
              <div>
                <strong>Opening Hours</strong>
                <div className="contact__hours">
                  {hours.map((h) => (
                    <div key={h.days} className="contact__hours-row">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact__whatsapp"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

          </div>

          {/* ─── Right: Form ─── */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={48} className="contact__success-icon" />
                <h3>Thank You, {form.name}!</h3>
                <p>
                  Your reservation enquiry has been received. Our team will
                  confirm your booking via email or WhatsApp shortly.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Reservation Enquiry</h3>

                {/* Row 1 */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">
                      <User size={14} /> Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'contact__input--error' : ''}
                    />
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="email">
                      <Mail size={14} /> Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'contact__input--error' : ''}
                    />
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="phone">
                      <Phone size={14} /> Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'contact__input--error' : ''}
                    />
                    {errors.phone && <span className="contact__error">{errors.phone}</span>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="guests">
                      <Users size={14} /> Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="10+">10+ (Large Party)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="date">
                      <CalendarDays size={14} /> Date *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.date ? 'contact__input--error' : ''}
                    />
                    {errors.date && <span className="contact__error">{errors.date}</span>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="time">
                      <Clock size={14} /> Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={errors.time ? 'contact__input--error' : ''}
                    >
                      <option value="">Select a time</option>
                      {[
                        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
                        '2:00 PM', '2:30 PM', '6:00 PM', '6:30 PM',
                        '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
                        '9:00 PM', '9:30 PM', '10:00 PM',
                      ].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <span className="contact__error">{errors.time}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="contact__field contact__field--full">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Allergies, celebrations, seating preferences..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit">
                  <Send size={16} />
                  Send Reservation Enquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;