
export const getTotal = ( cart ) => {
    let total = 0;
    
    cart.forEach(({ price, quantity }) => {
        total += (price * quantity);

    });
    
    return total;
}