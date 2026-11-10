import { useEffect, useRef, useState } from 'react';
import './TestimonialsCarousel.css';

export function TestimonialsCarousel({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef(null);
  const activeTestimonial = testimonials[activeIndex];
  const previousIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  useEffect(() => {
    if (testimonials.length < 2) return undefined;
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, testimonials.length]);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  const handlePointerEnd = (event) => {
    if (swipeStartX.current === null) return;
    const distance = event.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance < 0) showNext();
    else showPrevious();
  };

  if (!activeTestimonial) return null;

  return (
    <div className="testimonial-carousel" aria-label="Client testimonials">
      <div
        className="testimonial-carousel__stage"
        role="region"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={0}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse') swipeStartX.current = event.clientX;
        }}
        onPointerUp={handlePointerEnd}
        onPointerCancel={() => { swipeStartX.current = null; }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') showPrevious();
          if (event.key === 'ArrowRight') showNext();
        }}
      >
        {[
          { item: testimonials[previousIndex], index: previousIndex, position: 'previous' },
          { item: activeTestimonial, index: activeIndex, position: 'active' },
          { item: testimonials[nextIndex], index: nextIndex, position: 'next' },
        ].map(({ item, index, position }) => (
          <article
            className={`testimonial-card testimonial-carousel__card testimonial-carousel__card--${position}`}
            key={item.name}
            aria-hidden={position !== 'active'}
            onClick={position === 'active' ? undefined : () => setActiveIndex(index)}
          >
            <span className="testimonial-card__status">
              {item.sample ? 'SAMPLE — REPLACE BEFORE PUBLISH' : 'CLIENT TESTIMONIAL'}
            </span>
            <span className="testimonial-card__quote-mark" aria-hidden="true">“</span>
            <blockquote>{item.quote}</blockquote>
            <footer>
              <cite>{item.name}</cite>
              <span>{item.role}</span>
            </footer>
          </article>
        ))}
      </div>
      <div className="testimonial-carousel__progress" aria-hidden="true" key={`progress-${activeIndex}`}>
        <span />
      </div>
      <div className="testimonial-carousel__controls">
        <button type="button" onClick={showPrevious} aria-label="Previous testimonial">←</button>
        <div className="testimonial-carousel__dots" aria-label="Choose a testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <span className="testimonial-carousel__count">{String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
        <button type="button" onClick={showNext} aria-label="Next testimonial">→</button>
      </div>
    </div>
  );
}
