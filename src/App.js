// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {TripsProvider} from './components/context/MyTrips';
import {ItemsProvider} from './components/context/MyItems';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Trips from './components/Trips';
import Items from './components/Items';

function App(){
  // Have a Home page?
  // Add useStates?
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips));
  }, []);

  function handleAddTrip(newTrip){
    setTrips([...trips, newTrip]);
  }

  return(
    <div className="App"
    style={{
      backgroundColor: "aqua",
      height: "100vh",
      textAlign: "center"
    }}>

      <TripsProvider><ItemsProvider>
        <NavBar />
        <Routes>
          <Route path="/trips" element={<Trips onAddTrip={handleAddTrip} />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route exact path="/" element={<Trips />}></Route>
        </Routes>
      </ItemsProvider></TripsProvider>

      <footer id="footer" style={{
          backgroundColor: "coral",
          borderBottom: "2px solid black",
          marginBottom: "12px",
          marginTop: "12px",
          borderTop: "2px solid black",
          paddingTop: "10px",
          textAlign: "center"
        }}>
          <p id="left"><a href="#">Top of Page</a></p>
          <p>@2022 Ruby Faker Inc.</p>
          <p>All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;