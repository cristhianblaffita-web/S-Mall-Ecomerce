import "./ProductDetails.css";
import { useCart } from "@/contexts/cart/useCart";
import { useQuantity } from "@/hooks/useQuantity";
import ProductCarousel from "@/features/details/components/product_carousel/ProductCarousel";
import MoreDetails from "@/features/details/components/more_details/MoreDetails";
import Reviews from "@/features/details/components/reviews/Reviews";
import QuantitySelector from "@/features/quantity_selector/components/QuantitySelector";
import ratingIcon from "@/assets/icons/ui/star.png";
import { BiCartAdd } from "react-icons/bi";
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
      <ProductCarousel key={id} images={images} />

      <div className="product-details-info-wrapper bg-surface">
        <div className="product-details-info bg-background bdr-layout rounded-md p-24">
          <h1 className="text-left">{title}</h1>

          <div className="product-details-price-rating">
            <h2 className="product-details-price">
              ${finalPrice.toFixed(2)}
            </h2>

            <span className="product-details-rating">
              <img className="w-16px" src={ratingIcon} alt="rating icon" />
              {rating}
            </span>
          </div>

          <span className="text-gray">Stock: {stock}</span>
        </div>

        <div className="product-details-description bdr-layout bg-background p-24 rounded-md">
          <h3>Description</h3>

          <p className="text-gray text-left">{description}</p>
        </div>
      </div>

      <div className="product-details-checkout-section bg-surface rounded-md">
        <div className="product-details-checkout-controls">
          <QuantitySelector
            quantity={quantity}
            onIncrement={increment}
            onDecrement={decrement}
            label="Quantity"
          />

          <div className="product-details-subtotal-section">
            <span className="product-details-subtotal-label">
              Subtotal:
            </span>

            <span className="product-details-subtotal-value">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          className="product-details-add-to-cart-btn primary-button p-16 rounded-sm"
          onClick={() => addToCart(cartItem)}
        >
          <span>Add to cart</span>

          <BiCartAdd className="ui-icon"/>
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