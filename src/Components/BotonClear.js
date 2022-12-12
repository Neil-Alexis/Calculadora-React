import React from 'react'
import '../HojasDeEstilo/BotonClear.css';


export const BotonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}

    </div>
  );
}

export default BotonClear;