import React, {useContext} from 'react';
import {ItemsContext} from './context/myItems';

function Item({item}){
    const {items, setItems} = useContext(ItemsContext);

    function onDeleteItem(deletedItem){
        const updatedItems = items.filter((item) => item.id !== deletedItem.id);
        setItems(updatedItems);
    }
    
    function deleteItem(){
        console.log(item);
        fetch(`http://localhost:9292/items/${item.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteItem(item)); // Invoke the onDeleteItem function with this fetch request.
    }

    return(
        <div id="item" style={{
            paddingBottom: "10px",
            marginBottom: "12px"
          }}>
              <h2>{item.name}</h2>
              <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default Item;