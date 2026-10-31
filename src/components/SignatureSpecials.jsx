import { useEffect, useRef } from 'react';
import { Star, UtensilsCrossed } from 'lucide-react';
import './SignatureSpecials.css';

const signatures = [
  {
    id: 1,
    name: 'Ember-Grilled Ribeye',
    subtitle: 'The House Icon',
    description:
      'A 300g Australian ribeye, dry-aged for 28 days and seared over coconut-shell charcoal at 600°C. Finished with a pepper-jack cream, roasted bone marrow butter and charred shallots. This is the dish that defined The Ember Kitchen.',
    price: 1395,
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85',
    alt: 'Perfectly seared ribeye steak with grill marks and herb garnish',
  },
  {
    id: 2,
    name: 'Kerala Prawn Biryani Risotto',
    subtitle: 'Coast Meets Continent',
    description:
      'Arborio rice slow-cooked in a fragrant coconut and saffron broth, crowned with Malabar tiger prawns, crispy curry leaves and a drizzle of ghee. A true Kerala-Italian love letter on a plate.',
    price: 795,
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=85',
    alt: 'Creamy risotto with prawns and golden saffron tones',
  },
  {
    id: 3,
    name: 'Cardamom Panna Cotta',
    subtitle: 'A Sweet Farewell',
    description:
      'Silky Italian panna cotta infused with freshly ground Idukki cardamom, set with coconut cream and topped with a shatter of pistachio praline and edible gold. The perfect ending.',
    price: 345,
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant panna cotta dessert with pistachio and gold leaf',
  },
];

function SignatureSpecials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="signatures section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">Chef's Selection</span>
          <h2 className="section-title">Signature Specials</h2>
          <p className="section-subtitle">
            Three dishes that capture the soul of The Ember Kitchen —
            each one a story of fire, spice and craft.
          </p>
        </div>

        {/* Signature Cards */}
        <div className="signatures__list">
          {signatures.map((dish, index) => (
            <div
              key={dish.id}
              className={`signatures__item reveal ${
                index % 2 !== 0 ? 'signatures__item--reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="signatures__image-wrap">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="signatures__image"
                  loading="lazy"
                />
                <div className="signatures__image-overlay" />
                <span className="signatures__number">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="signatures__content">
                <div className="signatures__meta">
                  <Star size={14} className="signatures__star" />
                  <span className="signatures__subtitle">{dish.subtitle}</span>
                </div>

                <h3 className="signatures__name">{dish.name}</h3>

                <p className="signatures__description">{dish.description}</p>

                <div className="signatures__footer">
                  <span className="signatures__price">
                    <UtensilsCrossed size={14} />
                    ₹{dish.price}
                  </span>
                  <a href="#menu" className="btn btn-outline signatures__btn">
                    View Full Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SignatureSpecials;