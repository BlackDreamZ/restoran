import { Categories } from "../../components/categories/component.jsx";
import { Restaurants } from "../../components/restaurants/component.jsx";

export const ProductsPage = ( { products } ) => {

    const categories = Array.from(new Set(products.map(( type ) => type)));

    return (
        <>
            <Categories
                categories={ categories }
                onCategorySelect={(title) => console.log(title)}
            />
            <Restaurants
                restaurants={categories}
            />
        </>
    )
}