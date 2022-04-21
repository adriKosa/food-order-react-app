import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCartState] = useState(false)

  function hideCartHandler() {
    setShowCartState(false)
  }

  function showCartHandler() {
    setShowCartState(true)
  }

  return (
    <Fragment>
      {showCart && <Cart onCloseCartBtnClick={hideCartHandler} />}
      <Header onCartBtnClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
