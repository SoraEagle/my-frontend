import React, {useContext, useState} from "react";
import Trip from "./Trip";

function Trips(){
    const [name, setName] = useState('');

    function handleNameChange(e){
        setName(e.target.value);
      }

      function handleSubmit(e){
        e.preventDefault();
        // fetch("http://localhost:9292/items",
        // )
      }
    return(
        <div>
            <h2 style={{
                borderBottom: "2px solid black"
              }}>
                 Make a Trip:
              </h2>

              <form onSubmit={handleSubmit}>
                <div><label><b>Name: 
                  <input type="text" name="name" placeholder="name" onChange={handleNameChange} />
                </b></label></div>
                <button type="submit">Submit New Trip</button>
              </form>
        </div>
    );
}

export default Trips;