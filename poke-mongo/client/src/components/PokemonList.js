import React from "react";
import PokemonCard from "./PokemonCard";
import PokemonFilterBar from "./PokemonFilterBar";
import PokemonButton,{addPokemon,editPokemon,deletePokemon} from './PokemonButton'

const compareArrays = (a,b) =>
{
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};


function PokemonList()
{   
    const [data, setData] = React.useState([]);
    const [initialData, setInitialData] = React.useState([]);

    const getCurrentList = () => {
        fetch("http://localhost:8000/api/pokemon/")
        .then(res => {return res.json();})
        .then(json => {setInitialData(json);
        });  
    }

    const filterList = () => {
        var v = document.getElementById("filterBar").value;
        if(v==="All")
        {
            setData(initialData);
        }
        else
        {
            var tempData = [];
            var f = v.split(" ");
            initialData.map((card) => {
                if(compareArrays(f, card.types)===true)
                {
                    tempData.push(card);
                }
                return null;
            })
            setData(tempData);

        } 
    }

    React.useEffect(() => {getCurrentList();}, []); 
    React.useEffect(filterList, [initialData]);

    const showList = data.map((card) => {
        return (<li>
                    <PokemonCard name={card.name} imageUrl={card.imageUrl} 
                    types={card.types} number={card.number} />
                </li>);
    });

    return (
            <>
                <PokemonButton title = {addPokemon} update = {getCurrentList}/>
                <PokemonButton title = {editPokemon} update = {getCurrentList}/>
                <PokemonButton title = {deletePokemon} update = {getCurrentList}/>
                <PokemonFilterBar change= {filterList}/>
                <div className="list">
                   {showList}
                </div>
            </>

    );
}

export default PokemonList;