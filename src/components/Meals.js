const Meals = () => {
    
    async function fetchMeals() {
        try {
            const response = await fetch("http://localhost:3001/meals")
            if (!response.ok) {
                throw new Error (`HTTP error! status: ${response.status}`)
            } 
            const meals = await response.json()
            console.log(meals)
        } catch (error) {
            console.error("Failed to fetch meals", error)
        } 
    } 

    fetchMeals()
    
    return (
        <ul id="meals">
            { 
            <p>Create a list of meals, using fetch data from backend</p>
            }
        </ul>
    )
}

export default Meals