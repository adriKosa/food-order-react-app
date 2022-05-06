import R from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'
import Ring from '../UI/Ring'

const useContext = R.useContext
const useState = R.useState
const Fragment = R.Fragment

function Cart(props) {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const addItem = (item) => {
    cartCtx.addItem(item)
  }

  const removeItem = (id) => {
    cartCtx.removeItem(id)
  }

  function orderBtnHandler() {
    setIsCheckout(true)
  }

  async function submitOrderHandler(user) {
    setIsSubmitting(true)
    const response = await fetch("https://food-order-app-1afc8-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        orderdItems: cartCtx.items
      })
    })
    if (response.status === 200) {
      setResponseMessage('Your order has been sucessfully submitted')
      cartCtx.clearCart()
    } else {
      setResponseMessage('Something went wrong, please repeat the order')
    }
    setIsSubmitting(false)
  }

  function dismissBtnHandler() {
    setResponseMessage('')
    props.onCloseCartBtnClick()
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

  const responseModal =
    <Fragment>
      <p>{responseMessage}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={dismissBtnHandler}>OK</button>
      </div>
    </Fragment>


  const cartModalContent =
    <Fragment>
      {isSubmitting && <Ring left={45} />}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onCloseCartBtnClick} onSubmit={submitOrderHandler} />}
      {!isCheckout && <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCartBtnClick}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderBtnHandler}>Order</button>}
      </div>}
    </Fragment>


  return (
    <Modal onCloseCart={props.onCloseCartBtnClick}>
      {!responseMessage && cartModalContent}
      {responseMessage && responseModal}
    </Modal>
  )
}

export default Cart