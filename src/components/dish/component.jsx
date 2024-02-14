import { BuyButton } from "../buy-button/component.jsx";

export const Dish = ({ name }) => {
    return (
        <li>
            { name }
            <BuyButton/>
        </li>
    )
}