import React from "react";
import PokemonCards from "./PokemonCards";
import PokemonButton from "./PokemonButton";

//var list = [{id:1},{id:2},{id:3},{id:4},{id:1},{id:2},{id:3},{id:4}]


function PokemonList()
{   
    const [data, setData] = React.useState([]);

    const getCurrentList = () => {
        fetch("http://localhost:8000/api/pokemon/")
        .then(res => {return res.json();})
        .then(json => {setData(json);});
    }

    React.useEffect(() => {getCurrentList();}, []);

    const showList = data.map((card) => {
        return (<li>
                    <PokemonCards name={card.name} imageUrl={card.imageUrl} 
                    types={card.types} number={card.number} />
                </li>);
    });

    return (

        <div id="main_container">
            <h1 id="main_title">POKE-MONGO</h1>
            <PokemonButton title = "Edit Pokemon"/>
            <div className="list">
            {showList}
            </div>
        </div>
    );
}

export default PokemonList;