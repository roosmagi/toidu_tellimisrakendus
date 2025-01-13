import MealItem from "./MealItem"
import { useState } from "react"
import { useEffect } from "react"
import "../index.css"

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState([null])
    const [isLoading, setIsLoading] = useState([false])    

    useEffect(() => {
    const fetchMeals = async () => {
        try {
            const response = await fetch("http://localhost:3001/meals")
            if (!response.ok) {
                throw new Error('Failed to fetch meals')
            } 
            const meals = await response.json()
            setMeals(meals)
        } catch (err) {
            setError(err.messsage)
        } finally {
            setIsLoading(false)
        } 
    }  
    fetchMeals()    
}, [])
    
    return (
      <ul id="meals">
                {meals.map((meal) => (
                <MealItem
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}
                    image={meal.image}/>
            ))}
            </ul>
    )
}

export default Meals