import React, {useState} from 'react';

function EditTrip({trip, onUpdateTrip}){
  const [tripName, setTripName] = useState(trip.name);

  function handleFormSubmit(e){
    e.preventDefault();

      fetch(`http://localhost:9292/trips/${trip.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: tripName,
    }),
  })
    .then((r) => r.json())
    .then((updatedName) => onUpdateTrip(updatedName));
  }

  return(
      <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" 
            autoComplete='off' value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
          <input type="submit" value="Save" />
      </form>
  );
}

export default EditTrip;