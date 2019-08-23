import React from "react";

import Card from "react-bootstrap/Card";

export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>{props.species}</span>
          <span>{props.status}</span>
          <p>{props.location}</p>
          <p>{props.origin}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
