import React, {useContext, useState} from 'react';
import { ItemsContext } from './context/myItems';
import {TripsContext} from "./context/myTrips";

function NewItem({onAddItem}){
    const {items, setItems} = useContext(TripsContext);
    const [name, setName] = useState('');

    const NewItem ={
        id: (items.id),
        name: name
    }
    console.log("NewItem: ", NewItem);

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        })
        .then((r) => r.json())
        .then((NewItem) => {
          setItems([...items, NewItem]);
        });
        setName("");
      }

    return(
        <form onSubmit={handleSubmit}>
                <div><label><b>Name: 
                  <input type="text" name="name"
                  autoComplete="off" placeholder="name"
                  value={name} onChange={(e) => setName(e.target.value)} /> {/* Removes need for "function handleNameChange(e){}" */}
                </b></label></div>
                <button type="submit">Submit Trip</button>
              </form>
    );
}

export default NewItem;