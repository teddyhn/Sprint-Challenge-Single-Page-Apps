import React from "react";

import Card from "react-bootstrap/Card";

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>{`${props.type} ${props.dimension}`}</span>
          <p>{`Residents: ${props.residents}`}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
