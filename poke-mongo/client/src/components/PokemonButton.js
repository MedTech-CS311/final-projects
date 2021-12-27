export var addPokemon = "Add Pokemon";
export var editPokemon = "Edit Pokemon";
export var deletePokemon = "Delete Pokemon";
function PokemonButton (props){
    const task = () => {
        switch(props.title){
            case addPokemon:
                alert("added nigga");
                break;
            case editPokemon:
                alert("edit this nigga")
                break;
            case deletePokemon:
                alert("delete ")
                break;
                
        }
    }
    return (<button onClick ={task} title={props.title} className = "pokeButt">
   <p className="buttonText">{props.title}</p>
    </button>);
}
export default PokemonButton;


