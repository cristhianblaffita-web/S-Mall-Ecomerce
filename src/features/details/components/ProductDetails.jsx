import "./ProductDetails.css";
import { useCart } from "@/contexts/cart/useCart";
import { useQuantity } from "@/hooks/useQuantity";
import ProductCarousel from "@/features/details/components/product_carousel/ProductCarousel";
import MoreDetails from "@/features/details/components/more_details/MoreDetails";
import Reviews from "@/features/details/components/reviews/Reviews";
import QuantitySelector from "@/features/quantity_selector/components/QuantitySelector";
import ratingIcon from "@/assets/icons/ui/star.png";
import addToCartIcon from "@/assets/icons/ui/add-to-cart.png";
import { setDiscount } from "@/utils/setDiscount";

const ProductDetails = ({ product }) => {
  const {
    id,
    title,
    description,
    thumbnail,
    images,
    price: basePrice,
    discountPercentage,
    rating,
    stock,
    brand,
    weight,
    dimensions,
    warranty,
    reviews,
  } = product;

  const finalPrice = setDiscount(basePrice, discountPercentage);

  const { quantity, subtotal, increment, decrement } = useQuantity(
    1,
    finalPrice,
  );

  const { addToCart } = useCart();

  const cartItem = {
    id: id,
    title: title,
    image: thumbnail,
    price: finalPrice,
    quantity: quantity,
  };

  return (
    <section className="product-details bg-surface">
      <ProductCarousel images={images} />

      <div className="product-info-wrapper bg-surface">
        <div className="product-info p-24">
          <h1 className="text-left">{title}</h1>

          <div className="price-rating">
            <h2 className="product-price">${finalPrice.toFixed(2)}</h2>

            <span className="rating">
              <img className="w-16px" src={ratingIcon} alt="rating icon" />
              {rating}
            </span>
          </div>

          <span className="text-gray">Stock: {stock}</span>
        </div>

        <div className="product-description bg-background p-24 rounded-md">
          <h3>Description</h3>

          <p className="text-gray text-left">{description}</p>
        </div>
      </div>

      <div className="checkout-section bg-surface">
        <div className="checkout-controls">
          <QuantitySelector
            quantity={quantity}
            onIncrement={increment}
            onDecrement={decrement}
            label="Quantity"
          />

          <div className="subtotal-section">
            <span className="subtotal-label">Subtotal:</span>
            <span className="subtotal-value">${subtotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          className="add-to-cart-btn primary-button p-16 rounded-sm"
          onClick={() => addToCart(cartItem)}
        >
          <span>Add to cart</span>
          <img className="w-24px" src={addToCartIcon} alt="cart-icon" />
        </button>
      </div>

      <MoreDetails
        brand={brand}
        weight={weight}
        dimensions={dimensions}
        warranty={warranty}
      />

      <Reviews reviews={reviews} />
    </section>
  );
};

export default ProductDetails;
