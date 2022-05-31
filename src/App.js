import react, { useState } from "react"
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {

    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }
  return (
    <div>
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
        <Cart onShow={showCart} closeCart={closeCartHandler} />
      </main>
    </div>
  );
}

export default App;
