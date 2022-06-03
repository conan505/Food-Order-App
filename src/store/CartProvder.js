import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type == 'ADD') {

        const availableItem = state.items.filter((item) => {
            return item.id == action.item.id;
        })
        if (availableItem.length === 0) {
            const newItems = [...state.items, action.item];
            return { ...state, items: newItems, totalAmount: state.totalAmount + (action.item.price * action.item.amount) };
        }
        else {
            const newItems = state.items.map((item) => {
                if (availableItem.id == item.id) {
                    return { ...item, amount: item.amount + availableItem.amount };
                }
                else return { ...item };
            })
            return { ...state, items: newItems, totalAmount: state.totalAmount + (action.item.price * action.item.amount) };
        }
    };

}

const cartInitialState = {
    items: [],
    totalAmount: 0
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, cartInitialState);

    const addItemHandler = (item) => {
        return dispatchCartAction({ type: 'ADD', item: item })

    }
    const removeItemHandler = (item) => {
        return dispatchCartAction({ type: 'REMOVE', item: item })
    }

    return <CartContext.Provider value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;