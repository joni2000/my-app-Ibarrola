import { Route, Routes } from "react-router-dom"
import { ItemListConteiner } from "../components/itemListContainer/ItemListConteiner"
import { NavBar } from "../components/navBar/NavBar"
import { ProductsCart } from "../pages/cart/ProductsCart"
import { Home } from "../pages/home/Home"
import { ProductDetail } from "../pages/productDetail/ProductDetail"

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:id' element={<ProductDetail />}/>
            <Route path='/category/:id' element={<ItemListConteiner />}/>
            <Route path='/cart' element={<ProductsCart />}/>
        </Routes>
    </>
  )
}
