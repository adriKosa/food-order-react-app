import classes from './Checkout.module.css';
import R from 'react'

const useRef = R.useRef
const useState = R.useState

const Checkout = (props) => {
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const [inputValidity, setInputValidity] = useState({
    name: null,
    street: null,
    postalCode: null,
    city: null
  })

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value.trim()
    const enteredStreet = streetInputRef.current.value.trim()
    const enteredPostalCode = postalCodeInputRef.current.value.trim()
    const enteredCity = cityInputRef.current.value.trim()

    const nameValidity = enteredName !== ''
    const streetValidity = enteredStreet !== ''
    const postalCodeValidity = enteredPostalCode.length === 5
    const cityValidity = enteredCity !== ''

    const formIsValid = nameValidity & streetValidity & postalCodeValidity & cityValidity

    setInputValidity({
      name: nameValidity,
      street: streetValidity,
      postalCode: postalCodeValidity,
      city: cityValidity
    })

    if (!formIsValid) {
      return
    }

    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
  }

  // initialize input control classes
  const nameInputClasses = `${classes.control} ${inputValidity.name === null || inputValidity.name ? '' : classes.invalid}`
  const streetInputClasses = `${classes.control} ${inputValidity.street === null || inputValidity.street ? '' : classes.invalid}`
  const postalInputClasses = `${classes.control} ${inputValidity.postalCode === null || inputValidity.postalCode ? '' : classes.invalid}`
  const cityInputClasses = `${classes.control} ${inputValidity.city === null || inputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {inputValidity.name !== null && !inputValidity.name && <p>Input is invalid!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {inputValidity.street !== null && !inputValidity.street && <p>Input is invalid!</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {inputValidity.postalCode !== null && !inputValidity.postalCode && <p>Input is invalid! Postal code should has 5 numbers/characters.</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {inputValidity.city !== null && !inputValidity.city && <p>Input is invalid!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;