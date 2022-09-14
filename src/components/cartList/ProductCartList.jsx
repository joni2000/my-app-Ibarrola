import { useContext } from "react"
import { CartContext } from "../../context/cart/CartContext";
import { ProductContext } from "../../context/products/ProductContext";
import { ItemCart } from "../itemCart/ItemCart";

export const ProductCartList = () => {

    const { cart } = useContext(CartContext);

    const { products } = useContext(ProductContext)

    const cartFull = cart.map(cartItem=> (

      products.find(productItem =>  productItem.id === cartItem.id )

    ))

  return (
    <>
        {
            cartFull.map(product => (
                <ItemCart product={product} key={product.id}/>
            ))
        }
    </>
  )
}
