import { Route, Routes } from "react-router-dom"
import { Checkout } from "../components/checkout/Checkout"
import { Error404 } from "../components/Error404"
import { NavBar } from "../components/navBar/NavBar"
import { ItemListConteiner } from "../components/products"
import { Cart, Home, ProductDetail } from "../pages"
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
