import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/contexts/cart/useCart"
import setDiscount from "@/features/product/services/setDiscount"
import "./ProductCard.css"
import rateIcon from "@/assets/icons/ui/star.png"
import addToCartIcon from "@/assets/icons/ui/add-to-cart.png"



const ProductCard = ({
    productId = 0,
    productTitle = "Title",
    productImage = undefined,
    imageDesc = "No image description available",
    discountPercentage = 0,
    oldPrice = 0,
    productRating = 0
}) => {
  
  const price = setDiscount(oldPrice, discountPercentage)

  
  const product = {
    id: productId,
    title: productTitle,
    image: productImage,
    price: price,
    qtty: 1,
    subtotal: 0
  }
  
  const { 
    cartItems, 
    addToCart, 
    removeFromCart
  } = useCart()
  

    return (
        <div className="product-card">

            <div
              className="product-image-container"
            >
              <Link 
                to={`/products/${productId}`}
                className="product-details-link"
              >
                <span>
                  See details
                </span>
              </Link>
              
              <img className="product-image" src={productImage} alt={imageDesc} 
                onLoad={(e) => e.currentTarget.classList.add("loaded")}
              />
            </div>
            <div className="product-info">
                <div className="price-container">
                  <p className="product-price">${price}</p>
                  <p className="product-old-price">${oldPrice.toFixed(2)}</p>
                </div>
                <div className="product-rating">
                  <img 
                    className="rating-icon"
                    src={rateIcon}
                    alt="rating icon"
                  />
                  <span>{productRating}</span>
                </div>
            </div>
            <h2 className="product-title">{productTitle}</h2>
            <button 
                className="product-cart-button primary-button flex justify-center items-center gap-8"
                onClick={() => addToCart(product)}
            >
              <span>Add to cart</span>
              <img src={addToCartIcon} alt="Add to cart icon"/>
            </button>
        </div>
    )
}
export default React.memo(ProductCard)
