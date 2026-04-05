import { Link } from "react-router-dom";
import { useCart } from "@/contexts/cart/useCart";
import { setDiscount } from "@/utils/setDiscount";
import "./ProductCard.css";
import rateIcon from "@/assets/icons/ui/star.png";
import addToCartIcon from "@/assets/icons/ui/add-to-cart.png";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    title,
    thumbnail,
    price: basePrice,
    discountPercentage,
    rating,
  } = product;

  const finalPrice = setDiscount(basePrice, discountPercentage);

  const cartProduct = {
    id: id,
    title: title,
    image: thumbnail,
    price: finalPrice,
  };

  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/products/${id}`} className="product-details-link">
          <span>See details</span>
        </Link>

        <img
          className="product-image"
          src={thumbnail}
          alt={title}
          onLoad={(e) => e.currentTarget.classList.add("loaded")}
        />
      </div>
      <div className="product-info">
        <div className="price-container">
          <p className="product-price">${finalPrice.toFixed(2)}</p>
          <p className="product-old-price">${basePrice.toFixed(2)}</p>
        </div>
        <div className="product-rating">
          <img className="rating-icon" src={rateIcon} alt="rating icon" />
          <span>{rating}</span>
        </div>
      </div>
      <h2 className="product-title">{title}</h2>
      <button
        className="product-cart-button primary-button flex justify-center items-center gap-8"
        onClick={() => addToCart(cartProduct)}
      >
        <span>Add to cart</span>
        <img src={addToCartIcon} alt="Add to cart icon" />
      </button>
    </div>
  );
};
export default ProductCard;
