import React, {useState, useEffect} from 'react';

import { firestore } from '../firebase/firebase.utils';

const ShowItems = () => {
  const [items, setItems] = useState([]);

  

  useEffect(() => {
    async function fetchData() {
      const allItems = [];
      await firestore.collection("items").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          allItems.push(doc.data());
        });
      });
      setItems(allItems);
    };
    fetchData();
  }, []);

  return (
    <>
    <h1> Listing items </h1>
    <div className="itemList">
        {items.map( item => (
          <div key={item.itemName}>
            <h3>{item.itemName}</h3>
            <img src={item.mainImageUrl} alt='alt' />
            <p>{item.itemCategory}</p>
            <p>{item.itemDescription}</p>
            <p>precio: ${item.itemPrice}</p>
            <p>descontado: ${item.discountPrice}</p>
            <p>stock: ${item.stock}</p>
          </div>
          )
        )}
    </div>
    </>
  )
}

export default ShowItems;