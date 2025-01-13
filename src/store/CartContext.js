import React from "react"
import { useState } from "react"
import { useContext } from "react"


const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    totalItems: 0  
})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    
    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item])
    } 
    const totalItems = items.length

    return (
        <CartContext.Provider value={{items, addItem, totalItems}}>
            {children} 
        </CartContext.Provider> 
    )
} 