
export function ProductFeatureShowcase({ product }) {
  const features = product.features ?? [];
  const leftCount = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, leftCount);
  const rightFeatures = features.slice(leftCount);

  const renderFeature = (feature, side) => (
    <article className={`product-feature-callout product-feature-callout--${side}`} key={feature.title}>
      <h3>{feature.title}</h3>
      <p>{feature.copy}</p>
    </article>
  );

  return (
    <section className="product-feature-section section-pad" aria-labelledby="product-feature-heading">
      <div className="page-shell">
        <header className="product-feature-showcase__header">
          <div className="product-feature-showcase__title">
            <span>Why</span>
            <img src={product.logo} alt={`${product.name} logo`} loading="lazy" />
          </div>
          <span className="product-feature-showcase__count">
            {String(features.length).padStart(2, '0')} <i aria-hidden="true" /> KEY FEATURES
          </span>
        </header>
        <h2 className="visually-hidden" id="product-feature-heading">Key features of {product.name}</h2>
        <p className="product-feature-showcase__intro">{product.featureIntro}</p>
        <div className="product-feature-showcase__layout">
          <div className="product-feature-showcase__column product-feature-showcase__column--left">
            {leftFeatures.map((feature) => renderFeature(feature, 'left'))}
          </div>
          <figure className="product-feature-showcase__visual">
            <img src={product.featureImage} srcSet={product.featureImageSrcSet} sizes="(max-width: 640px) 100vw, (max-width: 980px) 70vw, 42vw" alt={product.featureImageAlt} loading="lazy" decoding="async" />
          </figure>
          <div className="product-feature-showcase__column product-feature-showcase__column--right">
            {rightFeatures.map((feature) => renderFeature(feature, 'right'))}
          </div>
        </div>
      </div>
    </section>
  );
}
