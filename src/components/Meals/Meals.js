import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"
import R from "react"

const Fragment = R.Fragment

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals