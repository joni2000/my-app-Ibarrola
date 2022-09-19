import { isInCart } from "./isInCart"

export const addToCart = (cart, setCart, product, counter)=> {
      
    if( isInCart(cart, product.id) ) {
      const newCart = [...cart]

      newCart.forEach(itemNewCart => {
        if(itemNewCart.id === product.id) {
          itemNewCart.quantity += counter
        }
      })

      setCart( newCart )

    }else {
      setCart([...cart, { ...product, quantity: counter }])
    }
  }
