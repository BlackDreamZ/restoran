import {Category} from "../category/component.jsx";

export const Categories = ({ categories, onCategorySelect } ) => {

    return (
        <>
        {categories.map( ( category ) =>
            <Category
                title={category.name}
                onClick={() => onCategorySelect(category.name)}
                key={category.id}
            />
        )}
    </>
    )
}