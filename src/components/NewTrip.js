import React, {useContext, useState} from 'react';
import {TripsContext} from "./context/myTrips";

function NewTrip(){
    const {trips, setTrips} = useContext(TripsContext);
    const [name, setName] = useState('');

    const newTrip ={
        id: (trips.id),
        name: name
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        })
        .then((r) => r.json())
        .then((newTrip) => {
          setTrips([...trips, newTrip]);
        });
        setName("");
      }

    return(
        <form onSubmit={handleSubmit}>
                <div><label><b>Name: 
                  <input type="text" name="name"
                  autoComplete="off" placeholder="name"
                  value={name} onChange={(e) => setName(e.target.value)} /> {/* Removes need for "function handleNameChange(e){}" */}
                </b></label></div>
                <button type="submit">Submit Trip</button>
              </form>
    );
}

export default NewTrip;