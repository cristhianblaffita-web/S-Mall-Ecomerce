import "./ProductDetails.css";
import { useCart } from "@/contexts/cart/useCart";
import { useQuantity } from "@/hooks/useQuantity";
import ProductCarousel from "@/features/details/components/product_carousel/ProductCarousel";
import MoreDetails from "@/features/details/components/more_details/MoreDetails";
import Reviews from "@/features/details/components/reviews/Reviews";
import QuantitySelector from "@/features/quantity_selector/components/QuantitySelector";
import ratingIcon from "@/assets/icons/ui/star.png";
import addToCartIcon from "@/assets/icons/ui/add-to-cart.png";

const ProductDetails = ({
  productId = null,
  productThumbnail = null,
  productImages = [],
  productTitle = null,
  productPrice = 0,
  productRating = 0,
  productDescription = null,
  productStock = 0,
  productBrand = null,
  productWeight = 0,
  productDimensions = [],
  productWarranty = null,
  productReviews = {},
}) => {
  const { quantity, subtotal, increment, decrement } = useQuantity(
    1,
    productPrice,
  );
  const { addToCart } = useCart();

  const product = {
    id: productId,
    title: productTitle,
    image: productThumbnail,
    price: productPrice,
    quantity: quantity,
  };

  return (
    <section className="product-details bg-surface">
      <ProductCarousel images={productImages} />

      <div className="product-info bg-surface p-24">
        <h1 className="text-left">{productTitle}</h1>

        <div className="price-rating">
          <h2 className="product-price">${productPrice.toFixed(2)}</h2>

          <span className="rating">
            <img className="w-16px" src={ratingIcon} alt="rating icon" />
            {productRating}
          </span>
        </div>

        <span className="text-gray">Stock: {productStock}</span>
      </div>

      <div className="product-description bg-background p-24 rounded-md">
        <h3>Description</h3>

        <p className="text-gray text-left">{productDescription}</p>
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
          onClick={() => addToCart(product)}
        >
          <span>Add to cart</span>
          <img className="w-24px" src={addToCartIcon} alt="cart-icon" />
        </button>
      </div>

      <MoreDetails
        brand={productBrand}
        weight={productWeight}
        dimensions={productDimensions}
        warranty={productWarranty}
      />

      <Reviews reviews={productReviews} />
    </section>
  );
};

export default ProductDetails;
