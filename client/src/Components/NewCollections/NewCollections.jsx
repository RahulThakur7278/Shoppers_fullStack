import React, { useEffect, useState } from 'react'
import './NewCollections.css'
//import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
//import { response } from 'express';
const NewCollections = () => {
const [new_collection,setNew_collection]=useState([]);
useEffect(()=>{
  fetch('http://localhost:4000/newcollection')
  .then((response)=>response.json())
  .then((data)=>setNew_collection(data));
},[])

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr></hr>
      <div className='collections'>
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
        })}
      </div>
    </div>
  )
}

export default NewCollections
