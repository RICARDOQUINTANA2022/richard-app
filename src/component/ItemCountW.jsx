import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export const ItemCount = ({initial, stock ,onadd}) => {
      const [count, setCount] = useState(initial);

      const decrease = () => {
         setCount (count - 1);
      }
      const increase = () => {
         setCount (count + 1);
      }
         return (
         <div>
            <div>
            <img src="./arg.jpg" alt="" width="150px"/>   
            <p className='font-monospace'>Camiseta Argentina "talle M"</p>
            </div>
            <container className="container text-center">
            <div className='row justify-content-center'>
            <button className= "btn btn-warning font-monospace col-1" disabled = {count <=1} onClick={decrease}>-</button>
            <p className='font-monospace col-2'>Usted eligio {count} prendas</p>
            <button className= "btn btn-danger font-monospace col-1" disabled = {count >=5} onClick={increase}>+</button>
            </div>
            </container>
            <button className= "btn btn-danger font-monospace col-2" disabled = {stock <= 0} onClick={()=> onadd(count)}>Agregar al carrito</button>
         </div>
   );
}

export default ItemCount;