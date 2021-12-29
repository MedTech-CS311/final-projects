import React from "react";
import PokemonAddForm from "./PokemonAddForm";
import PokemonDeleteForm from "./PokemonDeleteForm";
import PokemonEditForm from "./PokemonEditForm";

export var addPokemon = "Add Pokemon";
export var editPokemon = "Edit Pokemon";
export var deletePokemon = "Delete Pokemon";

function PokemonButton (props){

    const [showForm,setShowForm] = React.useState(false);

    const task = () => {
        setShowForm(true);
    }

    const cancel = () => 
    {
        setShowForm(false);
    }

    var form;
    switch(props.title)
    {
        case addPokemon:
            form = (
                <PokemonAddForm cancel={cancel} update={props.update}/>
            );
            break;
        case editPokemon:
            form = (
                <PokemonEditForm cancel={cancel} update={props.update}/>
            );
            break;
        case deletePokemon:
            form = (
                <PokemonDeleteForm cancel={cancel} update={props.update}/>
            );
            break;
        default:
            form = (
                <p>Error with button action</p>
            );
    }
    return (
    <>
        <button onClick ={task} title={props.title} className = "pokeButt">
        <p className="buttonText">{props.title}</p>
        </button>
        {showForm ? form : null}
    </> 
    );
}
export default PokemonButton;


