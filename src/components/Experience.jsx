import { Wine, Music, Flame, Clock } from 'lucide-react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Background */}
      <div className="experience__bg">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80"
          alt="Chef working with open flames in a moody kitchen"
          loading="lazy"
        />
        <div className="experience__overlay" />
      </div>

      {/* Content */}
      <div className="experience__content container">
        <div className="section-header">
          <span className="section-label">The Atmosphere</span>
          <h2 className="section-title experience__title">
            An Evening at<br />
            <em className="experience__title-accent">The Ember Kitchen</em>
          </h2>
        </div>

        <p className="experience__text">
          Step through our doors and the world outside fades. The scent of
          coconut-shell charcoal, the soft glow of hand-poured candles, the
          gentle crackle of the open grill — every detail is designed to slow
          you down and draw you in. This isn't just dinner. It's an evening
          you'll remember.
        </p>

        {/* Atmosphere highlights */}
        <div className="experience__highlights">
          <div className="experience__highlight">
            <Flame size={22} />
            <span>Open Wood-Fire Kitchen</span>
          </div>
          <div className="experience__highlight">
            <Wine size={22} />
            <span>Curated Wine & Cocktail Bar</span>
          </div>
          <div className="experience__highlight">
            <Music size={22} />
            <span>Live Acoustic Evenings</span>
          </div>
          <div className="experience__highlight">
            <Clock size={22} />
            <span>Private Dining Available</span>
          </div>
        </div>

        <a href="#contact" className="btn btn-primary experience__cta">
          Reserve Your Evening
        </a>
      </div>
    </section>
  );
}

export default Experience;