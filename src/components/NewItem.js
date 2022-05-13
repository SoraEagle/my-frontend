import React, {useContext, useState} from 'react';
import { ItemsContext } from './context/myItems';
import {TripsContext} from "./context/myTrips";

function NewItem({onAddItem, items, setItems}){
    const {trips, setTrips} = useContext(TripsContext);
    const [trip, setTrip] = useState('');
    const [name, setName] = useState('');

    const NewItem ={
        id: (items.id),
        name: name,
        trip: trip
    }
    // console.log("NewItem: ", NewItem); // NewItem is indeed being created...

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            trip: trip,
          }),
        })
        .then((r) => r.json())
        .then((NewItem) => {
          setItems([...items, NewItem]);
        });
        setName("");

        // update Trips setTrips(updatedTrips)
        handleUpdateTrip(trip);
      }

      function handleUpdateTrip(updatedTrip){
        const updatedTrips = trips.map((trip) => trip.id === updatedTrip.id ? updatedTrip : trip)
       setTrips(updatedTrips); // update the Array
    }

      function handleSelectChange(e){
          e.preventDefault();
      }

    return(
        <form onSubmit={handleSubmit}>
                <div><label><b>Name: 
                  <input type="text" name="name"
                  autoComplete="off" placeholder="name"
                  value={name} onChange={(e) => setName(e.target.value)} /> {/* Removes need for "function handleNameChange(e){}" */}
                  <select>
                      <option key={trip.id} value={trip.id}></option>
                      {trips.map((trip) => {
                          <option value="#{trip.name}">{trip.name}</option>
                      })}
                  </select>
                </b></label></div>
                <button type="submit">Submit Item</button>
              </form>
    );
}

export default NewItem;