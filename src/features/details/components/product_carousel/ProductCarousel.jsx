import "./ProductCarousel.css";

const ProductCarousel = ({ images }) => {
  return (
    <ul
      className="products-carousel w-full p-16"
      style={{
        listStyle: "none",
      }}
    >
      {images.map((img) => (
        <li key={img}>
          <img
            className="details-image bg-background w-full rounded-md p-8"
            src={img}
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductCarousel;
