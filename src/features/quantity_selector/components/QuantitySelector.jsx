import "@/features/quantity_selector/styles/QuantitySelector.css";

const QuantitySelector = ({
  quantity = 1,
  onIncrement = () => {},
  onDecrement = () => {},
  label,
  disabled = false,
}) => {
  return (
    <div className={`quantity-selector ${disabled ? "disabled" : ""}`}>
      {label && <label htmlFor="product-quantity">{label}: </label>}
      <div className="quantity-controls">
        <button
          type="button"
          className="quantity-btn"
          onClick={onDecrement}
          aria-label="Decrease quantity"
          disabled={disabled}
        >
          −
        </button>
        <input
          type="text"
          inputMode="numeric"
          id="product-quantity"
          className="quantity-input"
          value={quantity}
          readOnly
          disabled={disabled}
        />
        <button
          type="button"
          className="quantity-btn"
          onClick={onIncrement}
          aria-label="Increase quantity"
          disabled={disabled}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
