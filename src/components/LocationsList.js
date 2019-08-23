import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
          .get("https://rickandmortyapi.com/api/location/")
          .then(response => {
            setLocations(response.data.results);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }, []);

    console.log(locations);

    return (
        <section className="location-list">
            {locations.map(location => (
                <LocationCard 
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents.length}
                />
            ))}
        </section>
    )
}
