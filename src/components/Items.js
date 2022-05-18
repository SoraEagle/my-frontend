import React, {useContext} from "react";
import {ItemsContext} from "./context/myItems";
import Item from "./Item";
import NewItem from "./NewItem";

function Items(){
    const {items, setItems} = useContext(ItemsContext);
    
    return(
      <div id="items">
        <h2 style={{
                borderBottom: "2px solid black"
              }}>
                Submit New Item:
              </h2>
        <NewItem items={items} setItems={setItems} />

        <h2 style={{
                borderBottom: "2px solid black",
                marginBottom: "12px",
                marginTop: "12px",
              }}>
                My Items:
              </h2>

        {(items.length === 0)? (
          <div>
          <h1>You have no items for your trips!</h1>
          <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
          </div>
          ) : (
            <div id="items">
              {items.map((item) => {return <h5 key={item.id}><Item item={item} /></h5>})}
            </div>)}
      </div>
    );
}

export default Items;