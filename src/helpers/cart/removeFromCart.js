
export const removeFromCart = (cart, setCart, id)=> {
    const newCart = [...cart]

    newCart.filter(itemCart => itemCart.id !== id)

    setCart( newCart )
}