import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { galleryImages } from '../data/galleryData';
import './Gallery.css';

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);
  const lightboxRef = useRef(null);

  const isOpen = lightboxIndex !== null;
  const currentImage = isOpen ? galleryImages[lightboxIndex] : null;

  // Navigation helpers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, goNext, goPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus trap — focus the lightbox when it opens
  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [isOpen]);

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

  return (
    <section id="gallery" className="gallery section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">The Gallery</h2>
          <p className="section-subtitle">
            A glimpse into the flavours, fire and atmosphere
            that make every evening at The Ember Kitchen unforgettable.
          </p>
        </div>

        {/* Image Grid */}
        <div className="gallery__grid">
          {galleryImages.map((img, index) => (
            <button
              key={img.id}
              className="gallery__item reveal"
              onClick={() => openLightbox(index)}
              aria-label={`View ${img.caption} — ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <Expand size={20} />
                <span>{img.caption}</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ─── Lightbox ─── */}
      {isOpen && (
        <div
          className="lightbox"
          ref={lightboxRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer — ${currentImage.caption}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close */}
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="lightbox__content">
            <img
              key={currentImage.id}
              src={currentImage.src.replace('w=800', 'w=1400')}
              alt={currentImage.alt}
              className="lightbox__img"
            />
            <div className="lightbox__info">
              <span className="lightbox__caption">{currentImage.caption}</span>
              <span className="lightbox__counter">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;