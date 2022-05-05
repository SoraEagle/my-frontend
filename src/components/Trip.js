import React, {useContext} from "react";
import {TripsContext} from "./context/MyTrips.js";

function Trip(){
    const {trip, setTrip} = useContext(TripsContext);

    // function deleteTrip(){
    //     fetch(`http://localhost:9292/item/${trip.id}`, { // DELETE fetch request.
    //     method: "DELETE",
    // })
    // .then((r) => r.json())
    // .then(() => onDeleteItem(item));
    // }

    // return(
    //     <div>
    //         <div id="item" style={{
    //         borderBottom: "2px solid black",
    //         paddingBottom: "10px",
    //         marginBottom: "12px"
    //       }}>
    //           <p>#{item.name}</p>
    //           <button>Update</button>
    //           <button onClick={deleteTrip}>Delete</button>
    //     </div>
    //     </div>
    // );
}

export default Trip;