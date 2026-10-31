import { useState, useEffect, useRef } from 'react';
import { Flame, Leaf, Star, ChefHat } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import './Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(menuItems);
  const sectionRef = useRef(null);

  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleItems(menuItems);
    } else {
      setVisibleItems(menuItems.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get tag icon
  const getTagIcon = (tag) => {
    switch (tag) {
      case 'Signature':
        return <Star size={11} />;
      case 'Chef\'s Pick':
        return <ChefHat size={11} />;
      case 'Veg':
        return <Leaf size={11} />;
      default:
        return <Flame size={11} />;
    }
  };

  return (
    <section id="menu" className="menu section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">Curated Selections</span>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            A carefully crafted fusion of Kerala heritage and contemporary
            global cuisine, prepared with the finest local ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="menu__filters reveal" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              className={`menu__filter-btn ${
                activeCategory === cat ? 'menu__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu__grid">
          {visibleItems.map((item, index) => (
            <article
              key={item.id}
              className="menu__card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Card Image */}
              <div className="menu__card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="menu__card-image-overlay" />

                {/* Tag Badge */}
                {item.tag && (
                  <span className={`menu__card-tag menu__card-tag--${item.tag.toLowerCase().replace(/[^a-z]/g, '')}`}>
                    {getTagIcon(item.tag)}
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="menu__card-body">
                <div className="menu__card-header">
                  <h4 className="menu__card-name">{item.name}</h4>
                  <span className="menu__card-price">₹{item.price}</span>
                </div>
                <p className="menu__card-desc">{item.description}</p>
                <span className="menu__card-category">{item.category}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {visibleItems.length === 0 && (
          <p className="menu__empty">No items in this category yet.</p>
        )}

      </div>
    </section>
  );
}

export default Menu;