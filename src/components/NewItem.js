import React, {useContext, useState} from 'react';
import {TripsContext} from "./context/myTrips";

function NewItem({items, setItems}){
  const {trips, setTrips} = useContext(TripsContext);
  const [tripId, setTripId] = useState();
  const [name, setName] = useState('');

  // const newItem ={
  //     name: name,
  //     trip_id: trips.id
  // }
  
  // console.log("NewItem: ", newItem); // NewItem is indeed being created...
  console.log("Items: ", items); // 

  items.map((item) => {console.log("Item IDs:", item.id)});

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        trip_id: tripId,
      }),
    })
    .then((r) => r.json())
    .then((data) => {
      setItems([...items, data]);
      // console.log("Data:", data);
      console.log("New list", [...items, data]);
      trips.map((trip) => {console.log("Trip: ", trip)})
      handleUpdateTrip(tripId);
    });
    setName("");
    // handleUpdateTrip(trip);
  }

  function handleUpdateTrip(updatedTripId){
    const updatedTrips = trips.map((trip) => tripId === updatedTripId ? updatedTripId : trip)
    setTrips(updatedTrips); // update the Array
  }

  function handleSelectChange(e){
    e.preventDefault();
    console.log("Selected: ", e.target.value);
    setTripId(e.target.value);
  }
  console.log("Trips: ", trips);

  return(
    <form onSubmit={handleSubmit}>
            <div><label><b>Name: </b>
              <input type="text" name="name"
              autoComplete="off" placeholder="name"
              value={name} onChange={(e) => setName(e.target.value)} /> {/* Removes need for "function handleNameChange(e){}" */}
              </label>

              <label><b>Trip: </b>
              <select value={tripId} onChange={handleSelectChange}>
                  <option></option>
                  {trips.map((trip) => {
                      return <option key={trip.id} value={trip.id}>{trip.name}</option>
                  })}
              </select>
              </label></div>
            
            <button type="submit">Submit Item</button>
          </form>
  );
}

export default NewItem;