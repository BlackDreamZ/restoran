import { Restaurant } from "../Restaurant/component.jsx";

export const Restaurants = ({ restaurants }) => {
    return (
        <>
            {restaurants.map((restaurant) => (
                <Restaurant
                    restaurant={restaurant}
                    key={restaurant.id}
                />
            ))}
        </>
    )
}
