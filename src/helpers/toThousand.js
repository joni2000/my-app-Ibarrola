
/* toThousand: le da formato de miles al numero */
export const toThousand = n => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}  