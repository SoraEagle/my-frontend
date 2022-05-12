import React, {useContext, useState} from "react";
import {TripsContext} from "./context/myTrips";
import EditTrip from "./EditTrip";

function Trip({trip}){
    const {trips, setTrips} = useContext(TripsContext);
    const [isEditing, setIsEditing] = useState(false);

    function deleteTrip(){
        fetch(`http://localhost:9292/trips/${trip.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteTrip(trip)); // Invoke the onDeleteItem function with this fetch request.
    }

    function onDeleteTrip(deletedTrip){
      const updatedTrips = trips.filter((trip) => trip.id !== deletedTrip.id);
      setTrips(updatedTrips);
    }

    function handleUpdateTrip(updatedTrip){
        // Select specific Trip(use the trip.id) when clicking the Update button, override2 <h2> into <input> tags, and vice versa...
        setIsEditing(false);
        const updatedTrips = trips.map((trip) => trip.id === updatedTrip.id ? updatedTrip : trip)
       setTrips(updatedTrips); // update the Array
    }

    return(
        <div id="trip" style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
        }}>
              <div>
              {isEditing ? (
        <EditTrip
          trip={trip}
          onUpdateTrip={handleUpdateTrip}
        />
      ) : (
        <h2>{trip.name}</h2>
      )}
                <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                    Update
                </button>
                <button onClick={deleteTrip}>Delete</button>
              </div>
        </div>
    );
}

export default Trip;