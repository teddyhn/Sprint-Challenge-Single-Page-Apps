import React from "react";

import Card from "react-bootstrap/Card";

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            <p>{props.episode}</p>
            <p>{props.air_date}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
