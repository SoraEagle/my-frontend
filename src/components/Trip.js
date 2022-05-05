function Trip({trip, onDeleteTrip}){
    
    function deleteTrip(){
        fetch(`http://localhost:9292/trips/${trip.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteTrip(trip)); // Invoke the onDeleteItem function with this fetch request.
    }

    function updateTrip(){
        // 
    }

    return(
        <div id="trip" style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
          }}>
              <p>#{trip.name}</p>
              <button>Update</button>
              <button onClick={deleteTrip}>Delete</button>
        </div>
    );
}

export default Trip;