import React, {useContext, useState} from "react";
import {TripsContext} from "./context/myTrips";
import Trip from "./Trip";
import NewTrip from "./NewTrip";

function Trips({onAddTrip}){
    const {trips, setTrips} = useContext(TripsContext);

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
          else console.log("Trips: ", trips);

          return(
            <div id="trips">
              <h2 style={{borderBottom: "2px solid black"}}>
                Make a Trip:
              </h2>

              <NewTrip onAddTrip={onAddTrip} trips={trips} setTrips={setTrips} />

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