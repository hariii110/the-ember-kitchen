import { ChevronDown } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background layers */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85"
          alt="Elegant fine dining ambience with warm candlelight"
          className="hero__img"
          loading="eager"
        />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <span className="hero__tagline animate-fade-in">
          Kochi's Finest Fusion Experience
        </span>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">Where Fire</span>
          <span className="hero__title-line hero__title-line--2">
            Meets <em className="hero__title-accent">Flavour</em>
          </span>
        </h1>

        <p className="hero__description">
          Wood-fired grills, coastal Kerala spices and contemporary technique —
          crafted into every plate at The Ember Kitchen.
        </p>

        <div className="hero__actions">
          <a href="#menu" className="btn btn-primary hero__btn">
            View Menu
          </a>
          <a href="#contact" className="btn btn-outline hero__btn">
            Reserve a Table
          </a>
        </div>

        {/* Decorative divider */}
        <div className="hero__divider">
          <span className="hero__divider-line" />
          <span className="hero__divider-dot" />
          <span className="hero__divider-line" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span className="hero__scroll-text">Scroll</span>
        <ChevronDown size={18} className="hero__scroll-icon" />
      </a>
    </section>
  );
}

export default Hero;