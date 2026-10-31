import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Food Blogger, Kochi',
    rating: 5,
    text: 'The Ember Kitchen redefines what fusion dining means in Kerala. The Prawn Biryani Risotto alone is worth the trip to Fort Kochi. Every dish tells a story — bold, smoky, and utterly unforgettable.',
  },
  {
    id: 2,
    name: 'Thomas Kurian',
    role: 'Regular Guest',
    rating: 5,
    text: 'We celebrated our anniversary here and it was magical. The wood-fired ribeye was the best steak I have had in India, and the cardamom panna cotta was a revelation. The ambience is warm without trying too hard.',
  },
  {
    id: 3,
    name: 'Ananya Menon',
    role: 'Travel Writer',
    rating: 5,
    text: 'Of all the restaurants I have visited across Kerala, The Ember Kitchen stands apart. The Meen Pollichathu wrapped in banana leaf brought back childhood memories, but with a sophistication I never expected.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-label">Guest Voices</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Real experiences from guests who have gathered around our fire.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonials__card">
              <Quote size={28} className="testimonials__quote-icon" />

              {/* Stars */}
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="testimonials__text">"{t.text}"</p>

              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <strong className="testimonials__name">{t.name}</strong>
                  <span className="testimonials__role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="testimonials__disclaimer">
          * These are fictional testimonials created for demonstration purposes.
        </p>

      </div>
    </section>
  );
}

export default Testimonials;