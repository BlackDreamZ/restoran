import { Review } from "../review/component.jsx";

export const RestaurantReviews = ({ reviews }) => {
        return (
            <>
                <h5>Reviews</h5>
                <ul>
                    {reviews.map((review) =>
                        <Review
                            text={review.text}
                            key={review.id}
                        />)
                    }
                </ul>
            </>
        )
}