import './App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {TripsProvider} from './components/context/myTrips';
import {ItemsProvider} from './components/context/myItems';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Trips from './components/Trips';
import Items from './components/Items';

function App(){
  return(
    <div id="App"
    style={{
      // backgroundColor: "aqua",
      height: "100vh",
      textAlign: "center"
    }}>

      <body><div id='content'>
      <TripsProvider><ItemsProvider>
        <NavBar />
        <Routes>
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route exact path="/" element={<Trips />}></Route>
        </Routes>
      </ItemsProvider></TripsProvider>
      </div></body>

      <footer id="footer" style={{
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