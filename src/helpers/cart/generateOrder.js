import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebase/firebase"


export const generateOrder = async (data) => {
    try {
        const col = collection(db, "Orders")
        const order = await addDoc(col, data)

        return {
            orderId: order.id,
            order,
        }

    } catch (error) {
        console.log(error)
    }
}