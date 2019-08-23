import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard
            episode={episode.episode}
            name={episode.name}
            air_date={episode.air_date}
        />
      ))}
    </section>
  );
}
