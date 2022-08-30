import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function ItemCount() {
      const [count, setCount] = useState(1);
         return (
         <div>
            <Container>
            <div>
            <img src="./arg.jpg" alt="" width="150px"/>   
            <p className='font-monospace'>Camiseta Argentina "talle M"</p>
            </div>
            </Container>
            <container className="container text-center">
            <div className='row justify-content-center'>
            <button className= "btn btn-warning font-monospace col-1" onClick={() => setCount(count + 1)}>+</button>
            <p className='font-monospace col-2'>Usted eligio {count} prendas</p>
            <button className= "btn btn-danger font-monospace col-1" onClick={() => setCount(count - 1)}>-</button>
            </div>
            </container>
            <button className= "btn btn-danger font-monospace col-2">Agregar al carrito</button>
         </div>
   );
}

export default ItemCount;