
export const getTotal = ( items ) => {
    let total = 0;
    
    items.forEach(({ price, quantity }) => {
        total += (price * quantity);

    });
    
    return total;
}