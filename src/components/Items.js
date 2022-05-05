import React, {useContext, useState} from "react";
import {ItemsContext} from "./context/MyItems";
import Item from "./Item";

function Items(){
    if(Item.length === 0) return(
        <div>
          <p>You have no items for your trips!</p>
          <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
          </div>);
          else console.log("Items: ", Items);
}

export default Items;