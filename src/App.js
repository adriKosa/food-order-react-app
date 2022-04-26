import Header from "./components/Layout/Header";
import R from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const useState = R.useState

function App() {
  const [showCart, setShowCartState] = useState(false)

  function hideCartHandler() {
    setShowCartState(false)
  }

  function showCartHandler() {
    setShowCartState(true)
  }

  return (
    <CartProvider>
      {showCart && <Cart onCloseCartBtnClick={hideCartHandler} />}
      <Header onCartBtnClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
