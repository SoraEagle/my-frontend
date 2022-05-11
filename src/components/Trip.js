import React, {useContext, useState} from "react";
import EditTrip from "./EditTrip";

function Trip({trip, onDeleteTrip, onUpdateTrip}){
    // const {trip, setTrip} = useContext(TripsContext);
    const [isEditing, setIsEditing] = useState(false);

    const {id, name} = trip;
    
    function deleteTrip(){
        fetch(`http://localhost:9292/trips/${trip.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteTrip(trip)); // Invoke the onDeleteItem function with this fetch request.
    }

    function handleUpdateTrip(updatedName){
        // Select specific Trip(use the trip.id), override the <div> into <form> tags; Override <h2> tags into <input> tags...
        setIsEditing(false);
        onUpdateTrip(updatedName);
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
          id={trip.id}
          name={name}
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