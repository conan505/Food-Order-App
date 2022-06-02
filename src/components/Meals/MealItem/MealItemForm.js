import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    const ctx = useContext(CartContext);
    const meal = {
        id: props.meal.key,
        name: props.meal.name,
        description: props.meal.description,
        price: props.meal.price
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        ctx.addItem(meal);
    }
    return <form onSubmit={onSubmitHandler} className={classes.form}>
        <Input label="Amount" input={{
            id: "amount",
            type: "number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;