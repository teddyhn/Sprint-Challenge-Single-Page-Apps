import React from "react";

import Card from "react-bootstrap/Card";

export default function CharacterCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p className="card-subtitle">{`${props.species} ${props.status}`}</p>
          <span>{`Location: ${props.location}`}</span>
          <p>{`Origin: ${props.origin}`}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
