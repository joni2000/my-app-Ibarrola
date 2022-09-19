
export const removeFromCart = (cart, setCart, id)=> {
    const newCart = [...cart]

    const indice = newCart.indexOf(itemCart => +itemCart.id !== +id)

    newCart.splice(indice, 1)

    setCart( newCart )
}