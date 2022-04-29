import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react"
import { Ring } from 'react-awesome-spinners'

const MEALS_URL = "https://food-order-app-1afc8-default-rtdb.europe-west1.firebasedatabase.app/mealsList.json"

function AvailableMeals() {
  const [mealsArray, setMealsArray] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  async function fetchMeals() {
    const response = await fetch(MEALS_URL)
    const meals = await response.json()
    setMealsArray(Object.keys(meals).map((key) => ({
      id: key,
      name: meals[key].name,
      description: meals[key].description,
      price: meals[key].price
    })))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false)
      setErrorMessage(error.message)
    })
  }, [])

  const mealsList = mealsArray.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
  )

  return (
    <section className={classes.meals}>
      {isLoading && <Ring />}

      {errorMessage && <p className={classes["error-message"]}>Something went wrong...</p>}

      {!isLoading && errorMessage === null &&
        <Card>
          <ul>
            {mealsList}
          </ul>
        </Card>
      }
    </section>
  )
}

export default AvailableMeals