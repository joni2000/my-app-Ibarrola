
export const isInCart = (cart, product)=> {

    return cart.find( itemCart => itemCart.id === product.id )

}