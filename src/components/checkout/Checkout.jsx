import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { CartContext } from "../../context/cart/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { getTotal } from "../../helpers/getTotal";
import Swal from "sweetalert2"
import { FormCheckout } from "./FormCheckout";

export const Checkout = () => {

  const { cart, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState('')

  const [formSubmitted, setFormSubmitted] = useState(false); //estado para las validaciones del form 

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

  const handleSubmit = (e, isFormValid) => {
    e.preventDefault();
    const items = cart.map(({id, price, title, quantity, stock}) => ({ id, price, title, quantity, stock} ))
    const date = new Date()
    const total = getTotal( items );

    const data = { buyer, items, date , total}

    setFormSubmitted(true)

    if(isFormValid) {
      generateOrder(data)
    } 
  };

  return !orderId ? (<FormCheckout handleSubmit={ handleSubmit } showAlert={ showAlert } formSubmitted={ formSubmitted } />  )

  /* else */ : showAlert()
};
