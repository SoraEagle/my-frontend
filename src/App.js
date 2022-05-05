// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {TripsProvider} from './components/context/MyTrips';
import {ItemsProvider} from './components/context/MyItems';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import Trips from './components/Trips';
import Items from './components/Items';

function App(){
  // Have a Home page?
  // Add useStates?

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
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/items" element={<Items />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
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
          <p>@2022 Ruby Faker Inc.</p>
          <p>All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;