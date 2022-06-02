import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MealItem from "../Meals/MealItem/MealItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {
    const ctx = useContext(CartContext);
    console.log(ctx.items);
    const items = ctx.items;

    return <Modal onClose={props.closeCart} className={classes['cart-items']}>
        {items.map((meal) => {
            console.log("hey", meal);
            return <ul>

                <MealItem
                    // key={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}

                />

            </ul>
        })}
        <div className={classes.total}>Amount ${ctx.amount}</div>
        <div className={classes.actions}>
            <button onClick={props.closeCart} >Close</button>
            <button onClick={props.closeCart}>Order</button>
        </div>
    </Modal>

}

export default Cart;