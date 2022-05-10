import React, {useState} from 'react';

function EditTrip(trip){
    const [tripName, setTripName] = useState(trip.name);

    function handleFormSubmit(e){
        e.preventDefault();

        // 
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" />
            <input />
        </form>
    );
}

export default EditTrip;