import { useReducer } from "react";
import Header from "./components/Header"
import Meals from "./components/Meals"
import { CartProvider } from "./store/CartContext";

const ADD_FOOD = "ADD_FOOD"

const cartReducer = (state, action) => {
  if (action.type === ADD_FOOD) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    if (existingItemIndex !== -1) {
            const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1    
    } 
    return {items: updatedItems}  
  } else {
    return {
      items: [...state.items, {...action.item, quantity:1}] 
    } 
  } 
} 
return state
}

const defaultCartState = {
  items: [] 
} 

const App = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer, defaultCartState
  ) 
 
  const addToCart = (item) => {
    dispatchCartAction({type: ADD_FOOD, item})
  } 

  const totalItems = cartState.items.reduce(
    (total, item) => total + item.quantity, 0
  )
 return (
    <>
     <CartProvider
     value={{
      items: cartState.items,
      addItem: addToCart,
      totalItems
     }} 
     >
     <Header/>
     <Meals/>
     </CartProvider>
    </>
  );
}

export default App;
