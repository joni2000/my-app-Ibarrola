import { useState } from "react"
import { addToCart } from "../../helpers/cart/addToCart";
import { removeFromCart } from "../../helpers/cart/removeFromCart";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = ()=> setCart([]);  // limpia el carrito
    
    // funciones con el fin de sacar un poco de codigo de este componente
    const addItem = ( product, counter ) => addToCart(cart, setCart, product, counter); // ejecuta el helper addToCart

    const removeItem= (id)=> removeFromCart(cart, setCart, id); // ejecuta el helper removeFromCart

  return (
    <CartContext.Provider value={ {addItem, cart, removeItem, clearCart} }>
        { children }
    </CartContext.Provider>
  )
}
