import "./ProductDetails.css"
import ratingIcon from "@/assets/icons/ui/star.png"

const ProductDetails = (
  {
  productId = null,
  productImages = [],
  productTitle = null,
  productPrice = 0,
  productDiscount = 0,
  productRating = 0,
  productDescription = null,
  productStock = 0,
}) => {
  
  return (
    <section
  className="w-full flex flex-col gap-16"
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
        style={{
          minWidth: "80%",
        }}
      >
        <img
          className="w-full bg-surface rounded-md shadow-md"
          src={img}
        />
      </li>
    ))}
  </ul>

  <div
    className="bg-surface flex flex-col gap-16 p-24 rounded-md shadow-sm"
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
    className="bg-surface flex flex-col gap-12 p-24 rounded-md shadow-sm"
  >
    <h3>Description</h3>

    <p
      className="text-gray text-left"
    >
      {productDescription}
    </p>
  </div>

</section>
  )
}

export default ProductDetails