import {useState} from "react";

function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => (prevCount < 5 ? prevCount + 1 : prevCount));
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    return {count, increment, decrement}
}

export const BuyButton = () => {

    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <button onClick={increment}>
                +
            </button>

                <span>{count}</span>

            <button onClick={decrement}>
                -
            </button>
        </div>
)
}