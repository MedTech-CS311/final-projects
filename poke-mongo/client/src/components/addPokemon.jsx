import React, { Component } from 'react';

import { response } from 'express';
class AddPokemon extends React.Component {
    constructor(){
		super();
		this.state={
			pokemons:[{number:0,name:"",types:[],imageUrl:""}]
	  }
	}

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    



    render() {
        const {name,types,imgUrl} = this.state
        return (
        <div>
            <form onSubmit={this.submitHandler}>
            <div className= "input" >
            <label for="Name">Pokemon Name</label>
            <input id ="onSubmit1" type="text" name="Name" value={name} onChange={this.changeHandler} /> 
            </div>
            <div className="input">
            <label for="Types">Types</label>
            <input id ="onSubmit2" type="text" name="types" value={types}  onChange={this.changeHandler} /> 
        </div>
        <div className="input">
            <label for="image">Image</label>
            <input id ="onSubmit2" type="link" name="image" value={imgUrl} onChange={this.changeHandler} />
            </div>
          
       
            <button id="submit-button">Submit</button>

        </form>
        </div>
        );
    }
}
 
export default AddPokemon;