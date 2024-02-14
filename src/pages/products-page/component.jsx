import { Categories } from "../../components/categories/component.jsx";
import { Restaurants } from "../../components/restaurants/component.jsx";
import { useState } from "react";

const EVERY_CATEGORY = "ALL";

export const ProductsPage = ( { products } ) => {

    const categories = Array.from(new Set(products.map(( type ) => type))).concat(EVERY_CATEGORY);

    const [selectedCategory, setSelectedCategory] = useState();

    const filteredProducts = products.filter(
        (  type   ) =>
            type === selectedCategory || selectedCategory === EVERY_CATEGORY
    );

    if (!products.length){
        return null;
    }

    return (
        <>
            <Categories
                categories={ categories }
                onCategorySelect={setSelectedCategory}
            />
            <Restaurants
                restaurants={filteredProducts}
            />
        </>
    )
}