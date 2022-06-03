import { useContext } from "react"
import { useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const [isCartHighlighted, setIsCartHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)

    const btnclass = `${classes.button} ${isCartHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length !== 0) {
            setIsCartHighlighted(true);
        }

        const timer = setInterval(() => { setIsCartHighlighted(false) }, 300);

        return (() => {
            clearInterval(timer);
        })


    }, [cartCtx.items])

    return <button onClick={props.onClick} className={btnclass}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {cartItems}
        </span>
    </button>
}

export default HeaderCartButton;