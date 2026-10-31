import { useState, useEffect } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll → add background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">

        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label="The Ember Kitchen – Home">
          <Flame className="navbar__logo-icon" size={22} strokeWidth={1.8} />
          <span className="navbar__logo-text">
            <span className="navbar__logo-accent">The Ember</span> Kitchen
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Reserve Button (Desktop) */}
        <a href="#contact" className="btn btn-primary navbar__cta">
          Reserve a Table
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              style={{ transitionDelay: mobileOpen ? `${i * 0.06}s` : '0s' }}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary navbar__mobile-cta"
            onClick={handleNavClick}
          >
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;