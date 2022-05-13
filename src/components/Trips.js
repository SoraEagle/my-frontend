import React, {useContext} from "react";
import {TripsContext} from "./context/myTrips";
import Trip from "./Trip";
import NewTrip from "./NewTrip";

function Trips({onAddTrip}){
    const {trips, setTrips} = useContext(TripsContext);
    
    if(trips.length === 0) return(
        <div>
          <h1>You have no trips!</h1>
          {/* <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/> */}
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

              {trips? (trips.map((trip) => {return <h5 key={trip.id}><Trip trip={trip} /></h5>})
              ) : (
              <h2>Loading trip data...</h2>)}
            </div> 
          );
}

export default Trips;