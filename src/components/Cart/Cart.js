import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartItem from "./CartItem";

const Cart = (props) => {
    const ctx = useContext(CartContext);
    console.log(ctx.items);
    const items = ctx.items;

    return <Modal onClose={props.closeCart} className={classes['cart-items']}>
        {items.map((meal) => {
            console.log("hey", meal);
            return <ul>

                <CartItem
                    key={meal.id}
                    name={meal.name}
                    amount={meal.amount}
                    price={meal.price}
                />

            </ul>
        })}
        <div className={classes.total}>Amount ${ctx.totalAmount}</div>
        <div className={classes.actions}>
            <button onClick={props.closeCart} >Close</button>
            <button onClick={props.closeCart}>Order</button>
        </div>
    </Modal>

}

export default Cart;