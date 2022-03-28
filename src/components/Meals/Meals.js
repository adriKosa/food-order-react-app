import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"
import { Fragment } from "react/cjs/react.development"

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals