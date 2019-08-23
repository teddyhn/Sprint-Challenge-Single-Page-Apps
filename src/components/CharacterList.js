import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

import CardDeck from "react-bootstrap/CardDeck";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  console.log(characters);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard 
          image={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
          location={character.location.name}
          origin={character.origin.name}
        />
      ))}
    </section>
  );
}
