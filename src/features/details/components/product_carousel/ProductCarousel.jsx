import "./ProductCarousel.css"

const ProductCarousel = ({ images }) => {
    return (
        <ul
            className="w-full flex overflow-x-auto gap-16 p-16"
            style={{
                listStyle: "none"
            }}
        >
            {images.map((img, index) => (
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
    )
}

export default ProductCarousel