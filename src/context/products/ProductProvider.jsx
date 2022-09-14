import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext"

export const ProductProvider = ({ children }) => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data/products.json')
        .then(res => res.json())
        .then( products =>  setProducts( products.data ))
    }, []);

  return (
    <ProductContext.Provider value={ { products } }>
        { children }
    </ProductContext.Provider>
  )
}
