import R from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'

const useContext = R.useContext
const useState = R.useState

function Cart(props) {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const [isCheckout, setIsCheckout] = useState(false)

  const addItem = (item) => {
    cartCtx.addItem(item)
  }

  const removeItem = (id) => {
    cartCtx.removeItem(id)
  }

  function orderBtnHandler() {
    setIsCheckout(true)
  }

  const cartItems = <ul className={classes['cart-items']}>{cartCtx.items
    .map(item =>
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={addItem.bind(null, item)}
        onRemove={removeItem.bind(null, item.id)} />
    )}</ul>

  return (
    <Modal onCloseCart={props.onCloseCartBtnClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onCloseCartBtnClick} />}
      {!isCheckout && <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCartBtnClick}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderBtnHandler}>Order</button>}
      </div>}
    </Modal>
  )
}

export default Cart