
export const isInCart = (cart, id)=> {

    return cart.find( itemCart => itemCart.id === id )

}