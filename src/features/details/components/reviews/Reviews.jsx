import ratingIcon from "@/assets/icons/ui/star.png";
import "./Reviews.css";

const Reviews = ({ reviews = [] }) => {
  return (
    <div className="reviews bg-background bdr-layout p-24 rounded-md">
      <div className="reviews-header">
        <h3>Reviews ({reviews.length})</h3>

        {reviews.length > 0 && (
          <span className="text-gray">
            Avg:{" "}
            {(
              reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
            ).toFixed(1)}
          </span>
        )}
      </div>

      {reviews.length === 0 ? (
        <p className="text-gray">No reviews yet</p>
      ) : (
        <ul className="reviews-list">
          {reviews.map((review, index) => {
            const formattedDate = new Date(review.date).toLocaleDateString();

            return (
              <li
                key={index}
                className="review-item bg-surface rounded-md p-16"
              >
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="font-bold">{review.reviewerName}</span>
                    <span className="text-gray text-sm">
                      {review.reviewerEmail}
                    </span>
                    <span className="text-gray text-sm">{formattedDate}</span>
                  </div>

                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className="w-16px"
                        src={ratingIcon}
                        alt="star"
                        style={{
                          opacity: i < review.rating ? 1 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray text-left">{review.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
