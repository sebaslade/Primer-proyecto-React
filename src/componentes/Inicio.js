import React from 'react'
import City from "../City.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Inicio = ()=>{
    return(
        <Card>
        <Card.Title className="text-center bg-dark text-white">
          Lista de Países
        </Card.Title>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item as="li" variant="primary">
              {City.map((ciudad) => {
                return (
                  <div>
                    <strong>{ciudad.nombre} </strong>, su capital es {ciudad.capital} y su presidente es {ciudad.presidente}.
                  </div>
                );
              })}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
}