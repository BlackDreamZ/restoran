import { RestaurantMenu } from "../restaurant-menu/component.jsx";
import { RestaurantReviews } from "../restaurant-reviews/component.jsx";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h4>{restaurant.name}</h4>

            <RestaurantMenu
                menu={restaurant.menu}
            />

            <RestaurantReviews
                reviews={restaurant.reviews}
            />

        </div>
    )
}
