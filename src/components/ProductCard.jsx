import React from "react";

// Memoized so re-renders of App (e.g. typing in part search) don't
// re-render every single product card — only re-renders if its own
// `product` prop or `onViewParts` reference changes.
function ProductCard({ product, onViewParts }) {
  return (
    <article className="product-card">
      <div className="product-icon" aria-hidden="true">{product.icon}</div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button
          type="button"
          className="product-enquiry"
          onClick={() => onViewParts(product)}
        >
          View all parts →
        </button>
      </div>

      <div className="product-brand">HERO & HONDA · AVAILABLE ON REQUEST</div>
    </article>
  );
}

export default React.memo(ProductCard);
