import { useState } from "react"
import { addToCart } from "../helpers/cart/addToCart";
import { removeFromCart } from "../helpers/cart/removeFromCart";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = ()=> setCart([]);
 
    const addItem = ( product, counter ) => addToCart(cart, setCart, product, counter); 

    const removeItem= (id)=> removeFromCart(cart, setCart, id)

  return (
    <CartContext.Provider value={ {addItem, cart, removeItem, clearCart} }>
        { children }
    </CartContext.Provider>
  )
}
