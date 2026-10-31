import { Camera, ArrowUpRight } from 'lucide-react';
import './Instagram.css';

const instagramPosts = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    alt: 'Colourful fusion dish',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
    alt: 'Restaurant ambience',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80',
    alt: 'Craft cocktails',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80',
    alt: 'Grilled steak close-up',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
    alt: 'Wood-fired creation',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
    alt: 'Fresh salad bowl',
  },
];

function Instagram() {
  return (
    <section className="instagram section">
      <div className="container">

        <div className="section-header">
          <span className="section-label">Follow the Flame</span>
          <h2 className="section-title">@theemberkitchen</h2>
          <p className="section-subtitle">
            Daily doses of fire, flavour and Fort Kochi vibes.
          </p>
        </div>

        <div className="instagram__grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__item"
              aria-label={`View ${post.alt} on Instagram`}
            >
              <img src={post.src} alt={post.alt} loading="lazy" />
              <div className="instagram__overlay">
                <Camera size={22} />
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline instagram__cta"
        >
          <Camera size={16} />
          Follow Us on Instagram
          <ArrowUpRight size={14} />
        </a>

      </div>
    </section>
  );
}

export default Instagram;