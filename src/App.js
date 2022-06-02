import React, { useState } from "react"
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvder";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>

      {console.log("hi")}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
        {showCart && <Cart closeCart={closeCartHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;
