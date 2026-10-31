import { useEffect, useRef } from 'react';
import { Leaf, Flame } from 'lucide-react';
import './About.css';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">Rooted in Kerala,<br />Refined by Fire</h2>
        </div>

        {/* Main Content Grid */}
        <div className="about__grid">

          {/* Image Composition (Left) */}
          <div className="about__images reveal">
            <div className="about__img-main">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Warm restaurant interior with exposed brick walls and ambient lighting"
                loading="lazy"
              />
            </div>
            <div className="about__img-secondary">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=80"
                alt="Chef carefully plating a dish in the open kitchen"
                loading="lazy"
              />
              <div className="about__img-badge">
                <Flame size={18} />
                <span>Est. 2019</span>
              </div>
            </div>
            <div className="about__img-accent" />
          </div>

          {/* Text Content (Right) */}
          <div className="about__text">
            <div className="reveal">
              <h3 className="about__heading">
                A kitchen born from the soul of the Malabar coast
              </h3>
              <p className="about__paragraph">
                The Ember Kitchen began with a simple belief: that the bold,
                aromatic spices of Kerala deserve a place at the world's table.
                Nestled in the heart of Fort Kochi, our restaurant draws from
                generations of coastal cooking tradition — the slow curries, the
                banana-leaf roasts, the fiery black pepper — and reimagines them
                through the lens of modern technique.
              </p>
            </div>

            <div className="reveal">
              <p className="about__paragraph">
                Every dish that leaves our open kitchen carries the warmth of
                wood fire and the precision of contemporary craft. We source our
                seafood from the Kochi harbour each morning, our spices from the
                high ranges of Idukki, and our produce from local organic farms.
              </p>
            </div>

            <div className="about__values reveal">
              <div className="about__value">
                <Leaf size={20} className="about__value-icon" />
                <div>
                  <strong>Locally Sourced</strong>
                  <span>Farm-to-table ingredients from Kerala's finest</span>
                </div>
              </div>
              <div className="about__value">
                <Flame size={20} className="about__value-icon" />
                <div>
                  <strong>Wood-Fired</strong>
                  <span>Charcoal and coconut shell grilling for authentic smokiness</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Quote */}
        <blockquote className="about__quote reveal">
          <span className="about__quote-mark">"</span>
          <p>
            We don't just cook food — we honour the fire, the spice,
            and the story behind every ingredient that reaches your plate.
          </p>
          <cite>— Chef Arjun Menon, Founder</cite>
        </blockquote>

      </div>
    </section>
  );
}

export default About;