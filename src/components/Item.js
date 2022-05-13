function Item({item, onDeleteItem}){
    
    function deleteItem({item}){
        fetch(`http://localhost:9292/item/${item.id}`, { // DELETE fetch request.
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteItem(item)); // Invoke the onDeleteItem function with this fetch request.
    }

    return(
        <div id="item" style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px"
          }}>
              <p>#{item.name}</p>
              <button>Update</button>
              <button onClick={deleteItem}>Delete</button>
        </div>
    );
}

export default Item;