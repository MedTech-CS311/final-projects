import React from "react";
import PokemonAddForm from "./PokemonAddForm";

export var addPokemon = "Add Pokemon";
export var editPokemon = "Edit Pokemon";
export var deletePokemon = "Delete Pokemon";

function PokemonButton (props){

    const [showForm,setShowForm] = React.useState(false);

    var form;
    switch(props.title)
    {
        case addPokemon:
            form = (
                <PokemonAddForm/>
            );
            break;
        case editPokemon:
            form = (
                <></>
            );
        case deletePokemon:
            form = (
                <></>
            );
    }

    const task = () => {
        setShowForm(true);
    }
    return (
    <>
        <button onClick ={task} title={props.title} className = "pokeButt">
        <p className="buttonText">{props.title}</p>
        </button>
        <div>
            {showForm ? form : null}
        </div>
    </> 
    );
}
export default PokemonButton;


