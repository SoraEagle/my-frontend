import React, {useContext} from "react";
import {TripsContext} from "./context/MyTrips";

function Trip({trip, onDeleteTrip}){
    // const {trip, setTrip} = useContext(TripsContext);
    
    function deleteTrip(){
        fetch(`http://localhost:9292/trips/${trip.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteTrip(trip)); // Invoke the onDeleteItem function with this fetch request.
    }

    function updateTrip(){
        // Select specific Trip(use the trip.id), override the <div> into <form> tags; Override <h2> tags into <input> tags...
    }

    return(
        <div id="trip" style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
        }}>
              <div>
                <h2>{trip.name}</h2>
                <button>Update</button>
                <button onClick={deleteTrip}>Delete</button>
              </div>
        </div>
    );
}

export default Trip;