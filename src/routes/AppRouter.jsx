import { Route, Routes } from "react-router-dom"
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
            <Route path='/productDetail/:id' element={<ProductDetail />}/>
            <Route path='/cart' element={<ProductsCart />}/>
        </Routes>
    </>
  )
}
