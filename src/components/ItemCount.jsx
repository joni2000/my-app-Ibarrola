import { useState } from "react";
export const ItemCount = ({ product }) => {

    const [counter, setCounter] = useState(0);

    const onAdd = (operacion)=> {
        if(operacion === 'suma') {
            setCounter( counter + 1 )
        }

        if(operacion === 'resta') {
            setCounter( counter - 1 )
        }
    }

  return (
    <div className="container d-flex gap-3">
      <button 
        className="btn btn-primary"
        onClick={ ()=> counter < product.stock && onAdd('resta') }
    >
        -
    </button>

      <p className="align-self-end">{counter}</p>

      <button 
        className="btn btn-primary"
        onClick={ ()=> counter < product.stock && onAdd('suma') }
      >
        +
      </button>
    </div>
  );
};
