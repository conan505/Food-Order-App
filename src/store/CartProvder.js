import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const [amount, setAmount] = useState(0);

    const addItem = (item) => {
        setItems((prevState) => {
            return [...prevState, item];
        })
        setAmount((prevState) => {
            return prevState + item.price;
        })
    }
    const removeItem = (item) => {
        setItems((prevState) => {
            return prevState.filter((meal) => {
                return meal.id !== item.id;
            })
        })
        setAmount((prevState) => {
            return prevState - item.price;
        })
    }

    return <CartContext.Provider value={{
        items: items,
        amount: amount,
        addItem: addItem,
        removeItem: removeItem
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;