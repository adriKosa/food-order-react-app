import R from 'react'
import CartContext from './cart-context'

const useReducer = R.useReducer

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      let updatedItems
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

      if (existingCartItemIndex > -1) {
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex].amount += action.item.amount
      } else {
        updatedItems = state.items.concat(action.item)
      }


      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    
    case "REMOVE_ITEM": {
      const cartItemIndex = state.items.findIndex(item => item.id === action.id)
      const amountOfItems = state.items[cartItemIndex].amount - 1
      let updatedItems
      updatedItems = [...state.items]
      const updatedTotalAmount = state.totalAmount - updatedItems[cartItemIndex].price


      if (amountOfItems < 1) {
        updatedItems.splice(cartItemIndex, 1)
      } else {
        updatedItems[cartItemIndex].amount = amountOfItems
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }

    default: {
      return defaultCartState
    }
  }
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider