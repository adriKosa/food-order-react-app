import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
    .map(item =>
      <ul className={classes['cart-items']}>
        <li>{item.name}</li>
      </ul>)

  return (
    <Modal onCloseCart={props.onCloseCartBtnClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCartBtnClick}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart