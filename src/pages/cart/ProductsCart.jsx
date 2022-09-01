import { ItemCount } from "../../components/itemCount/ItemCount"

const product = {
  stock: 10 
}
export const ProductsCart = () => {
  return (
    <>
      <ItemCount product={product}/>
    </>
  )
}
