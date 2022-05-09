import React, {useContext, useState} from "react";
import {TripsContext} from "./context/MyTrips";
import Trip from "./Trip";

function Trips({onAddTrip}){
    const {trips, setTrips} = useContext(TripsContext);
    const [name, setName] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      fetch("http://localhost:9292/trips/${id}", {
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
        onAddTrip(newTrip);
        setName("");
      });
    }

    function onDeleteTrip(deletedTrip){
      const updatedTrips = trips.filter((trip) => trip.id !== deletedTrip.id);
      setTrips(updatedTrips);
    }

    if(!Trip) return <h2>Loading trip data...</h2>;
    
    if(Trip.length === 0) return(
        <div>
          <p>You have no trips!</p>
          <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
          </div>);
          else console.log("Trips: ", Trips);

          return(
            <div id="trips">
              <h2 style={{borderBottom: "2px solid black"}}>
                Make a Trip:
              </h2>

              <form onSubmit={handleSubmit}>
                <div><label><b>Name: 
                  <input type="text" name="name"
                  autoComplete="off" placeholder="name"
                  value={name} onChange={(e) => setName(e.target.value)} /> {/* Removes need for "function handleNameChange(e){}" */}
                </b></label></div>
                <button type="submit">Submit Trip</button>
              </form>

              <h2 style={{
                borderBottom: "2px solid black",
                marginBottom: "12px",
                marginTop: "12px",
              }}>
                My Trips:
              </h2>
              {trips.map((trip) => {
                return <h5 key={trip.id}><Trip trip={trip} onDeleteTrip={onDeleteTrip} /></h5>
              })}
            </div> 
          );
}

export default Trips;