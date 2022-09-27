import { Route, Routes } from "react-router-dom"
import { Checkout } from "../components/checkout/Checkout"
import { Error404 } from "../components/error404/Error404"
import { ItemListConteiner } from "../components/itemListContainer/ItemListConteiner"
import { NavBar } from "../components/navBar/NavBar"
import { Cart } from "../pages/cart/Cart"
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
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>+
            <Route path='/*' element={<Error404 />} />
        </Routes>
    </>
  )
}
