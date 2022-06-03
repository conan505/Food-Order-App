import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type == 'ADD') {
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);
        const availableItem = state.items.filter((item) => {
            return item.id === action.item.id;
        })
        if (availableItem.length === 0) {
            const newItems = [...state.items, action.item];
            return { ...state, items: newItems, totalAmount: updatedAmount  };
        }
        else {
            const newItems = state.items.map((item) => {
                if (availableItem[0].id === item.id) {
                    return { ...item, amount: action.item.amount + availableItem[0].amount };
                }
                else return { ...item };
            })
            return { ...state, items: newItems, totalAmount: updatedAmount };
        }
    }
    else {
        const removedItem = state.items.filter((item) => {
            return item.id === action.id;
        })
        const updatedAmount = state.totalAmount - removedItem[0].price;
        const remainingItems = state.items.filter((item) => {
            return item.id !== action.id;
        })
        if (removedItem[0].amount === 1) {
            return { ...state, items: remainingItems, totalAmount: updatedAmount }
        }
        else {
            const newItem = { ...removedItem[0], amount: removedItem[0].amount - 1 };
            return { ...state, items: [...remainingItems, newItem], totalAmount: updatedAmount }
        }
    }

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
    const removeItemHandler = (id) => {
        return dispatchCartAction({ type: 'REMOVE', id : id })
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