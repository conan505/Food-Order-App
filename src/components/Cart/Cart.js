import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartItem from "./CartItem";

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const items = ctx.items;

    const onAddCartItemHandler = (item) => {
        return ctx.addItem({ ...item, amount: 1 });
    }

    const onRemoveCartItemHandler = (id) => {
        return ctx.removeItem(id);
    }

    return <Modal onClose={props.closeCart} className={classes['cart-items']}>
        {items.map((item) => {
            return <ul>
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={onAddCartItemHandler.bind(null, item)}  // we can also pass parameter via anonymous function
                    onRemove={onRemoveCartItemHandler.bind(null, item.id)}
                />
            </ul>
        })}
        <div className={classes.total}>Amount ${ctx.totalAmount.toFixed(2)}</div>
        <div className={classes.actions}>
            <button onClick={props.closeCart} >Close</button>
            {ctx.items.length !== 0 && <button onClick={props.closeCart}>Order</button>}
        </div>
    </Modal>

}

export default Cart;