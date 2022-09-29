import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { getTotal } from "../../helpers/cart/getTotal";
import { useForm } from "../../hooks/UseForm";
import { db } from "../../services/firebase/firebase";
import { FormCheckout } from "../formCheckout/FormCheckout";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

export const Checkout = () => {

  const { cart, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState('')

  const { formState: buyer } = useForm( '' );
  
  const navigate = useNavigate()

  const updateStock = (items) => {
    items.forEach(({ id, stock, quantity }) => {
      const docRef = doc(db, "products", id);
      
      updateDoc(docRef, { stock: stock - quantity })
        .then(result => console.log( "stock actualizado" ))
        .catch(error => console.log(error))
    })
  }
  const generateOrder = async (data) => {
    try {
        const col = collection(db, "Orders")
        const order = await addDoc(col, data)
        setOrderId(order.id)
        updateStock(data.items)
        clearCart()
    } catch (error) {
        console.log(error)
    }
}
    const showAlert = ()=> {
      Swal.fire({
        title: 'Felicitaciones!',
        text: `orden de compra: ${orderId}`,
        icon: 'success',
        confirmButtonText: 'Ir al inicio'
      }).then((result) => {
        result && navigate('/')
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cart.map(({id, price, title, quantity, stock}) => ({ id, price, title, quantity, stock} ))
    const date = new Date()
    const total = getTotal( items );

    const data = { buyer, items, date , total}

    generateOrder(data)
  };

  return !orderId ? (<FormCheckout handleSubmit={ handleSubmit } showAlert={ showAlert } />  )

    : showAlert()
};
