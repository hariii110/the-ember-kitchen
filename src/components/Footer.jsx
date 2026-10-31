import { Flame, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <Flame size={20} className="footer__logo-icon" />
              <span className="footer__logo-text">
                <span className="footer__logo-accent">The Ember</span> Kitchen
              </span>
            </a>
            <p className="footer__tagline">
              Wood-fired flavours, coastal soul. A Kerala-Continental
              fusion dining experience in the heart of Fort Kochi.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__heading">Navigate</h4>
            <nav aria-label="Footer navigation">
              <ul className="footer__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li>
                <MapPin size={14} />
                <span>1/234, Fort Kochi Beach Road,<br />Kochi, Kerala 682001</span>
              </li>
              <li>
                <Phone size={14} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail size={14} />
                <a href="mailto:hello@theemberkitchen.in">hello@theemberkitchen.in</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <ul className="footer__social">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${s.label}`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} The Ember Kitchen. All rights reserved.
          </p>
          <button
            className="footer__top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;