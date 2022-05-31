import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {
    return <Modal className={classes['cart-items']}>
        cartItems
        <div className={classes.total}>Amount $35.23</div>
        <div className={classes.actions}>
            <button >Close</button>
            <button >Order</button>
        </div>
    </Modal>
}

export default Cart;