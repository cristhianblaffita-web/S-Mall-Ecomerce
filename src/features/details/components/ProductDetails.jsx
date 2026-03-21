import "./ProductDetails.css"
import { useCart } from "@/contexts/cart/useCart"
import ratingIcon from "@/assets/icons/ui/star.png"
import arrowDown from "@/assets/icons/ui/arrow-down.png"
import addToCartIcon from "@/assets/icons/ui/add-to-cart.png"

const ProductDetails = (
  {
    productId = null,
    productThumbnail = null,
    productImages = [],
    productTitle = null,
    productPrice = 0,
    productDiscount = 0,
    productRating = 0,
    productDescription = null,
    productStock = 0,
    productBrand = "---",
    productWeight = 0,
    productDimensions = [],
    productWarranty = "No warranty",
    productReviews = []
  }) => {

  const { addToCart } = useCart()

  const product = {
    id: productId,
    title: productTitle,
    image: productThumbnail,
    price: productPrice
  }

  return (
    <section
      className="w-full flex flex-col bg-surface"
    >

      <ul
        className="w-full flex overflow-x-auto gap-16 p-16"
        style={{
          listStyle: "none"
        }}
      >
        {productImages.map((img, index) => (
          <li
            key={index}

          >
            <img
              className="details-image bg-background w-full rounded-md p-8"
              src={img}
              onLoad={(e) => e.currentTarget.classList.add("loaded")}
            />
          </li>
        ))}
      </ul>

      <div
        className="bg-surface flex flex-col gap-16 p-24"
      >

        <h1 className="text-left">
          {productTitle}
        </h1>

        <div
          className="flex justify-between items-center"
        >
          <h2 className="product-price">
            ${productPrice.toFixed(2)}
          </h2>

          <span
            className="flex items-center gap-8"
          >
            <img
              className="w-16px"
              src={ratingIcon}
              alt="rating icon"
            />
            {productRating}
          </span>
        </div>

        <span className="text-gray">
          Stock: {productStock}
        </span>

      </div>


      <div
        className="bg-background flex flex-col m-16 gap-12 p-24 rounded-md"
      >
        <h3>Description</h3>

        <p
          className="text-gray text-left"
        >
          {productDescription}
        </p>
      </div>

      <details
        className="bg-background flex flex-col p-24 m-16 rounded-md"
      >
        <summary
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-bold">
            More Details
          </span>

          <span>
            <img
              className="details-icon w-16px"
              src={arrowDown}
              alt="toggle-icon"
            />
          </span>
        </summary>

        <ul
          className="flex flex-col gap-8 mt-8 text-gray"
        >
          <li className="flex justify-between">
            <span>Brand</span>
            <span>{productBrand}</span>
          </li>

          <li className="flex justify-between">
            <span>Weight</span>
            <span>{productWeight}</span>
          </li>

          <li className="flex justify-between">
            <span>Dimensions</span>
            <span>
              {productDimensions.width} × {productDimensions.height} ×
              {productDimensions.depth}
            </span>
          </li>

          <li className="flex justify-between">
            <span>Warranty</span>
            <span>{productWarranty}</span>
          </li>
        </ul>

      </details>

      <button
        className="primary-button flex justify-center items-center gap-8 m-16 p-16 rounded-sm"
        onClick={() => addToCart(product)}
      >
        <span>Add to cart</span>
        <img
          className="w-24px"
          src={addToCartIcon}
          alt="cart-icon"
        />
      </button>

      <div className="bg-background flex flex-col m-16 gap-16 p-24 rounded-md">

        <div className="flex justify-between items-center">
          <h3>Reviews ({productReviews.length})</h3>

          {productReviews.length > 0 && (
            <span className="text-gray">
              Avg: {
                (
                  productReviews.reduce((acc, r) => acc + r.rating, 0) /
                  productReviews.length
                ).toFixed(1)
              }
            </span>
          )}
        </div>

        {productReviews.length === 0 ? (
          <p className="text-gray">No reviews yet</p>
        ) : (
          <ul className="flex flex-col gap-16">
            {productReviews.map((review, index) => {

              const formattedDate = new Date(review.date).toLocaleDateString()

              return (
                <li
                  key={index}
                  className="flex flex-col gap-8 p-16 bg-surface rounded-md"
                >

                  <div className="flex justify-between items-center">

                    <div className="flex flex-col">
                      <span className="font-bold">
                        {review.reviewerName}
                      </span>
                      <span className="text-gray text-sm">
                        {review.reviewerEmail}
                      </span>
                      <span className="text-gray text-sm">
                        {formattedDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="w-16px"
                          src={ratingIcon}
                          alt="star"
                          style={{
                            opacity: i < review.rating ? 1 : 0.3
                          }}
                        />
                      ))}
                    </div>

                  </div>

                  <p className="text-gray text-left">
                    {review.comment}
                  </p>

                </li>
              )
            })}
          </ul>
        )}

      </div>

    </section>
  )
}

export default ProductDetails