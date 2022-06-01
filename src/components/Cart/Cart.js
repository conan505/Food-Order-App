import react, { useState } from "react"
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {

    return <Modal onClose={props.closeCart} className={classes['cart-items']}>
        cartItems
        <div className={classes.total}>Amount $35.23</div>
        <div className={classes.actions}>
            <button onClick={props.closeCart} >Close</button>
            <button onClick={props.closeCart}>Order</button>
        </div>
    </Modal>

}

export default Cart;