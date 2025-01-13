import "../index.css"
import { useCart } from "../store/CartContext"
import Button from "./UI/Button"
const MealItem = (meal) => {
    const {addItem} = useCart()
    
    const addToCart = () => {
        addItem(meal.name)

    } 
    
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${meal.image}`)} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p>
                    <Button onClick={addToCart} className="text-button">Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem