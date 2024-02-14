import {Category} from "../category/component.jsx";

export const Categories = ({ categories, onCategorySelect } ) => {

    return (
        <>
        {categories.map( ( category ) =>
            <Category
                title={category.name || category}
                onClick={() => onCategorySelect(category)}
                key={category.id || 0}
            />
        )}
    </>
    )
}