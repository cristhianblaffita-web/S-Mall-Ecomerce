import "@/features/quantity_selector/styles/QuantitySelector.css";

const QuantitySelector = ({
  quantity = 1,
  onIncrement = () => {},
  onDecrement = () => {},
  label = "Quantity",
}) => {
  return (
    <div className="quantity-selector">
      <label htmlFor="product-quantity">{label ? `${label}:` : ""}</label>
      <div className="quantity-controls">
        <button
          type="button"
          className="quantity-btn"
          onClick={onDecrement}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          id="product-quantity"
          className="quantity-input"
          value={quantity}
          readOnly
        />
        <button
          type="button"
          className="quantity-btn"
          onClick={onIncrement}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
