import React, { Component } from 'react';
import react, {useState} from "react";
import './AddPokemon.css';
import axios from 'axios'


const  AddPokemon = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [types, setTypes] = useState("");
    const [imageUrl, setImg] = useState("");

    const submit = () => {
        axios.post('./pokemon', {
              number,   
              name,
              types,
              imageUrl
        }).then(res => console.log(res))
        .catch(error =>console.log(error.message))
    }
  
        return (
        <div class="Form">
            <form>
            <div class= "input" >
            <label for="Number">Number</label>
            <input id ="POSTnumber" type="text" name="Name" value={number} onChange={e=>setNumber(e.target.value)} /> 
            </div>
            <div class= "input" >
            <label for="Name">Name</label>
            <input id ="POSTname" type="text" name="Name" value={name}  onChange={e=>setName(e.target.value)} /> 
            </div>
            <div class="input">
            <label for="Types">Types</label>
            <input id ="POSTtypes" type="text" name="types" value={types}   onChange={e=>setTypes(e.target.value)}  /> 
        </div>
        <div class="input">
            <label for="image">Image</label>
            <input id ="POSTimageUrl" type="link" name="image" value={imageUrl}  onChange={e=>setImg(e.target.value)}  />
            </div>
          
       
            <button id="submit-button" onClick={submit}>Submit</button>

        </form>
        </div>
        )

}

 
export default AddPokemon