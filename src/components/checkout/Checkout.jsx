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

  const [ orderId, setOrderId ] = useState('')

  const [ formSubmitted, setFormSubmitted ] = useState(false); //estado para las validaciones del form 

  const { formState: buyer } = useForm(''); //useForm es un custom hook para manejar los inputs del fomulario y hacer sus respectivas validaciones
  
  const navigate = useNavigate()

  const updateStock = (items) => { //actualiza el stock de la base de datos una vez finalizada la compra
    items.forEach(({ id, stock, quantity }) => {
      const docRef = doc(db, "products", id);
      
      updateDoc(docRef, { stock: stock - quantity })
        .then(result => console.log( "stock actualizado" ))
        .catch(error => console.log(error))
    })
  }
  const generateOrder = async (data) => { //genera la orden de compra
    try {
        const col = collection(db, "Orders")
        const order = await addDoc(col, data)
        setOrderId(order.id)
        updateStock(data.items)
        clearCart() // limpia el carrito
    } catch (error) {
        console.log(error)
    }
}
    const showAlert = ()=> { //Alerta para mostrar la orden de compra
      Swal.fire({
        title: 'Felicitaciones!',
        text: `orden de compra: ${orderId}`,
        icon: 'success',
        confirmButtonText: 'Ir al inicio'
      }).then((result) => {
        result && navigate('/') //envia al usuario al inicio al tocar el boton de "ir al inicio"
      })
    }

  const handleSubmit = (e, isFormValid) => { //funcion que maneja el envio del formulario
    e.preventDefault();
    const items = cart.map(({id, price, title, quantity, stock}) => ({ id, price, title, quantity, stock} )) /* crea los items para crear la orden de compra */
    const date = new Date(); /* trae la fecha actual */
    const total = getTotal( items );

    const data = { buyer, items, date , total} //data para generar la orden

    setFormSubmitted(true)

    if(isFormValid) { 
      generateOrder(data) // genera la orden si el formulario pasa las validaciones
    } 
  };
                  /* muestra el formulario si no hay orden de compra */  
  return !orderId ? (<FormCheckout handleSubmit={ handleSubmit } showAlert={ showAlert } formSubmitted={ formSubmitted } />  )

  /* else */ : showAlert() /* si hay orden de compra la muestra */
};
