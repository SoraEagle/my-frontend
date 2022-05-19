import './App.css';
import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {TripsProvider} from './components/context/myTrips';
import {ItemsProvider} from './components/context/myItems';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import Trips from './components/Trips';
import Items from './components/Items';
import Footer from './components/Footer';

function App(){
  return(
    <div id="App"
    style={{
      height: "100vh",
      textAlign: "center"
    }}>
     
      <TripsProvider><ItemsProvider>
        <NavBar />
        <div id='content'>
        <Routes>
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route exact path="/" element={<Trips />}></Route>
        </Routes>
        </div>
      </ItemsProvider></TripsProvider>
      
      <Footer />
    </div>
  );
}

export default App;