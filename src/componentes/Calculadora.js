import React, { useState } from 'react';

export const Calculadora = () =>{
    const [numero, setNumero]=useState(0)
    const sumar = () =>{
        setNumero(numero+1)
    }
    const restar = () =>{
        setNumero(numero-1)
    }
    const duplicar = () =>{
        setNumero(numero*2)
    }
    const mitad = () =>{
        setNumero(numero/2)
    }
    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={sumar}>Incrementar</button>
            <button onClick={restar}>Disminuir</button>
            <button onClick={duplicar}>Duplicar</button>
            <button onClick={mitad}>Mitad</button>
        </div>
    )
}