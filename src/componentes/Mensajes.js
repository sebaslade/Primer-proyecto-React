import {useEffect, useRef, useState} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {

    const inputRef = useRef(null)
    const [mensaje, setMensaje]=useState('')
    const mensajePrevio = useRef('')

    const modificarMensaje=()=>{
        setMensaje(inputRef.current.value)
    }

    useEffect(()=>{
        mensajePrevio.current=mensaje
    },[mensaje])

    return (
        <Card>
            <Card.Header className="text-center bg-dark text-white">Mensajes</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                {mensaje}
                </Card.Text>

                <input type='text' ref={inputRef}/>
                <br/>
                <br/>

                <Card.Text>
                Mensaje actualizado: {mensaje}
                </Card.Text>
                <Card.Text>
                Mensaje previo: {mensajePrevio.current}
                </Card.Text>
                <Button variant="primary" onClick={modificarMensaje}>Enviar mensaje</Button>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderExample;