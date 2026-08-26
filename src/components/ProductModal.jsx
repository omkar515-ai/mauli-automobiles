import React from "react";

function ProductModal({
  product,
  partRequest,
  updatePartRequest,
  onClose,
  onRequest
}) {
  const {
    selectedPart,
    customPart,
    selectedBrand,
    vehicleModel,
    emissionStandard,
    chassisNumber
  } = partRequest;

  return (
    <div className="product-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="product-modal-close" onClick={onClose} aria-label="Close product chooser">×</button>

        <span className="product-category">{product.category}</span>
        <h3 id="product-modal-title">{product.name}</h3>
        <p>Choose the part, then select the vehicle brand and model for an accurate match.</p>

        <div className="part-options" aria-label="Choose a part">
          {product.parts.map((part) => (
            <button
              type="button"
              key={part}
              className={selectedPart === part && !customPart ? "selected" : ""}
              onClick={() => updatePartRequest({ selectedPart: part, customPart: "" })}
            >
              {part}
            </button>
          ))}
        </div>

        <label className="vehicle-model-label custom-part-label">
          Can't find the part? <span>Type its name and we will source it if possible.</span>
          <input
            type="text"
            value={customPart}
            onChange={(event) => updatePartRequest({ customPart: event.target.value })}
            placeholder="Example: Engine timing chain tensioner"
          />
        </label>

        <div className="brand-options" aria-label="Choose a company">
          {["Hero", "Honda"].map((brand) => (
            <button
              type="button"
              key={brand}
              className={selectedBrand === brand ? "selected" : ""}
              onClick={() => updatePartRequest({ selectedBrand: brand })}
            >
              {brand}
            </button>
          ))}
        </div>

        <label className="vehicle-model-label">
          Vehicle model <span>(recommended)</span>
          <input
            type="text"
            value={vehicleModel}
            onChange={(event) => updatePartRequest({ vehicleModel: event.target.value })}
            placeholder="Example: Splendor Plus / Activa 6G"
          />
        </label>

        <div className="vehicle-identification">
          <label>Vehicle Identification</label>

          <span>Select your bike's BS version or provide the chassis number</span>

          <div className="emission-options">
            <button
              type="button"
              className={emissionStandard === "BS3" ? "selected" : ""}
              onClick={() => updatePartRequest({ emissionStandard: "BS3" })}
            >
              BS3
            </button>

            <button
              type="button"
              className={emissionStandard === "BS4" ? "selected" : ""}
              onClick={() => updatePartRequest({ emissionStandard: "BS4" })}
            >
              BS4
            </button>

            <button
              type="button"
              className={emissionStandard === "BS6" ? "selected" : ""}
              onClick={() => updatePartRequest({ emissionStandard: "BS6" })}
            >
              BS6
            </button>

            <button
              type="button"
              className={emissionStandard === "Chassis No." ? "selected" : ""}
              onClick={() => updatePartRequest({ emissionStandard: "Chassis No." })}
            >
              Chassis No.
            </button>
          </div>

          {emissionStandard === "Chassis No." && (
            <input
              type="text"
              className="chassis-input"
              placeholder="Enter chassis number"
              value={chassisNumber}
              onChange={(e) => updatePartRequest({ chassisNumber: e.target.value })}
            />
          )}
        </div>

        <div className="product-request-actions">
          <button type="button" className="availability-button" onClick={() => onRequest("check availability for")}>Ask availability</button>
          <button type="button" className="booking-button" onClick={() => onRequest("book")}>Book this part</button>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
