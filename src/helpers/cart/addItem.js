import { isInCart } from "./isInCart"

export const addItem = ( cart, setCart, product )=> {

    const inCart = isInCart(cart, product)

    if(inCart) {
        setCart(
            cart.map(productInCart => {
                if(productInCart.id === product.id) {
                    return { ...inCart, quantity: inCart.quantity + 1}

                } else return productInCart
            })
        )
        
    }else {

        const productToPush = {
            id: product.id,
            quantity: 1
        } 

        setCart([...cart, productToPush])

    }

}