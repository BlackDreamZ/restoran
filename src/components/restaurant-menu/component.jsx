import { Dish } from "../dish/component.jsx";

export const RestaurantMenu = ({ menu }) => {
    return (
        <>
            <h5>Menu</h5>
            <ul>
                {menu.map((dish) =>
                    <Dish
                        name={dish.name}
                        key={dish.id}
                    />)
                }
            </ul>
        </>
    )
}