import React, {useContext, useEffect, useState} from "react";
import {TripsContext} from "./context/myTrips";
import {ItemsContext} from "./context/myItems";
import EditTrip from "./EditTrip";

function Trip({trip}){
  const {items, setItems} = useContext(ItemsContext);
    const {trips, setTrips} = useContext(TripsContext);
    const [isEditing, setIsEditing] = useState(false);

    // console.log(items);

    function deleteTrip(){
        fetch(`http://localhost:9292/trips/${trip.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteTrip(trip)); // Invoke the onDeleteTrip function with this fetch request.
    console.log(trip.items);
    }

    function onDeleteTrip(deletedTrip){
      const updatedTrips = trips.filter((trip) => trip.id !== deletedTrip.id);
      setTrips(updatedTrips);
    }

    function handleUpdateTrip(updatedTrip){ // Select specific Trip when clicking the Update button, override2 <h2> into <input> tags, vice versa...
        setIsEditing(false);
        const updatedTrips = trips.map((trip) => trip.id === updatedTrip.id ? updatedTrip : trip)
       setTrips(updatedTrips); // updates the Array
    }

    return(
        <div id="item" style={{
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
        <h2 id="text">{trip.name}</h2>
      )}
                <button id="button" onClick={() => setIsEditing((isEditing) => !isEditing)}>
                    Update
                </button>
                <button id="button" onClick={deleteTrip}>Delete</button>
                <h3>Items: </h3>
                {console.log("Items: ", items)}
                {items.map((item) => item.trip_id === trip.id ? (<h4 key={item.id}>{item.name}</h4>) : (null))}
                {console.log("Trip ID: ", trip.id)}
              </div>
        </div>
    );
}

export default Trip;