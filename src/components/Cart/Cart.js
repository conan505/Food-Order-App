import react, { useState } from "react"
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {
    const onCloseHandler = () => {
        props.closeCart();
    }
    return <>{props.onShow ? <Modal className={classes['cart-items']}>
        cartItems
        <div className={classes.total}>Amount $35.23</div>
        <div className={classes.actions}>
            <button onClick={onCloseHandler} >Close</button>
            <button onClick={onCloseHandler}>Order</button>
        </div>
    </Modal> : <div></div>}
    </>
}

export default Cart;