import { Typography,} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { getTotal } from "../../helpers/cart/getTotal";
import { useForm } from "../../hooks/UseForm";
import { db } from "../../services/firebase/firebase";
import { FormCheckout } from "../formCheckout/FormCheckout";


export const Checkout = () => {

  const { cart, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState('')

  const { formState: buyer } = useForm( '' ); 

  const generateOrder = async (data) => {
    try {
        const col = collection(db, "Orders")
        const order = await addDoc(col, data)
        console.log("OrdenNro:", order)
        setOrderId(order.id)
        clearCart()
    } catch (error) {
        console.log(error)
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cart.map(({id, price, title, quantity}) => ({ id, price, title, quantity} ))
    const date = new Date()
    const total = getTotal( items );

    const data = { buyer, items, date , total}

    generateOrder(data)
  };

  console.log(orderId)

  return !orderId ? (<FormCheckout handleSubmit={ handleSubmit } /> )

    : <Typography> Tu orden de compra es: { orderId }</Typography>
};
