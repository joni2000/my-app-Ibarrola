import { useState } from "react"
import { isInCart } from "../helpers/cart/isInCart";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clear = ()=> {
      setCart([])
    }

    const addItem = ( product, counter )=> {

      const inCart = isInCart(cart, product)

    
        setCart(
          [ ...cart, product ]
        )
    }

    const context = {
      addItem,
      cart
    }

  return (
    <CartContext.Provider value={ context }>
        { children }
    </CartContext.Provider>
  )
}
