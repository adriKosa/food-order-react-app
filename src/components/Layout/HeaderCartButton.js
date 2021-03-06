import R from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const useContext = R.useContext
const useEffect = R.useEffect
const useState = R.useState

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce(
    function (currentNumber, item) {
      return currentNumber + item.amount
    }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  const { items } = cartCtx

  useEffect(() => {
    if (items.length === 0) return

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onCartBtnClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton