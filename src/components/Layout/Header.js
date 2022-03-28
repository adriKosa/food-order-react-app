import { Fragment } from "react"
import HeaderCartButton from "./HeaderCartButton"

import mealsImg from '../../assets/meals.jpeg'
import classes from './Header.module.css'

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="img - table full of food" />
      </div>
    </Fragment>
  )
}

export default Header;