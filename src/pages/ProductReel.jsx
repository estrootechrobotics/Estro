import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import robadCutout from '../assets/images/products/robad-cutout.png';
import robadLiteCutout from '../assets/images/products/robad-lite-cutout.png';
import borevueCutout from '../assets/images/products/borevue-cutout.png';
import mambaCutout from '../assets/images/products/mamba-cutout.png';
import './ProductReel.css';

const products = [
  { name: 'RobAd', category: 'RETAIL ROBOTICS', image: robadCutout, alt: 'RobAd retail engagement robot', copy: 'A connected retail engagement system that brings attention to the shelf through sensing, audio, light and product movement.', href: '/products/robad', points: ['Shopper sensing', 'Audio and focused light', 'Product movement'] },
  { name: 'RobAd Lite', category: 'RETAIL ROBOTICS', image: robadLiteCutout, alt: 'RobAd Lite shelf engagement device', copy: 'A fixed-mount retail unit that pairs scheduled voice messaging with motion-sensitive product illumination.', href: '/products/robad-lite', points: ['Fixed-mount format', 'Scheduled voice messaging', 'Motion-sensitive light'] },
  { name: 'BoreVue', category: 'INFRASTRUCTURE MONITORING', image: borevueCutout, alt: 'BoreVue smart manhole monitoring sensor', copy: 'A smart manhole monitoring system designed to provide visibility into water levels and manhole conditions.', href: '/products/borevue', points: ['Water-level monitoring', 'Connected alerts', 'Web and mobile dashboard'] },
  { name: 'Mamba', category: 'PIPELINE ROBOTICS', image: mambaCutout, alt: 'Mamba robotic pipeline inspection crawler', copy: 'A robotic crawler for pipeline inspection, with camera, laser-profiling and mapping capabilities.', href: '/products/mamba', points: ['HD camera inspection', 'Laser profiling', 'GIS mapping'] },
];

export function ProductReel() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const update = () => {
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / travel));
      setActive(Math.round(progress * (products.length - 1)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const chooseProduct = (index) => {
    setActive(index);
    if (!window.matchMedia('(max-width: 760px)').matches && sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      const travel = Math.max(1, sectionRef.current.offsetHeight - window.innerHeight);
      window.scrollTo({ top: window.scrollY + bounds.top + travel * (index / (products.length - 1)), behavior: 'smooth' });
    }
  };

  const product = products[active];
  return (
    <section ref={sectionRef} className="product-reel" aria-label="Featured products">
      <div className="product-reel__stage">
        <div className="page-shell product-reel__inner">
          <div className="product-reel__copy" key={product.name}>
            <span className="product-reel__eyebrow"><i /> SYSTEMS / 0{active + 1}</span>
            <span className="product-reel__count">0{active + 1} <b>/ 0{products.length}</b></span>
            <h2>{product.name}</h2>
            <p className="product-reel__category">{product.category}</p>
            <p className="product-reel__description">{product.copy}</p>
            <ul className="product-reel__points">{product.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <Link className="product-reel__link" to={product.href}>Explore {product.name}<span aria-hidden="true">↗</span></Link>
          </div>
          <div className="product-reel__visual" key={`${product.name}-visual`}>
            <div className="product-reel__orbit product-reel__orbit--outer" aria-hidden="true" />
            <div className="product-reel__orbit product-reel__orbit--inner" aria-hidden="true" />
            <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
            <span className="product-reel__visual-index">ESTRO TECH / {product.category}</span>
          </div>
        </div>
        <div className="page-shell product-reel__tabs" role="tablist" aria-label="Featured products">
          {products.map((item, index) => (
            <button key={item.name} type="button" role="tab" aria-selected={index === active} onClick={() => chooseProduct(index)}>
              <span className="product-reel__tab-progress" style={{ transform: `scaleX(${index === active ? 1 : 0})` }} />
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
