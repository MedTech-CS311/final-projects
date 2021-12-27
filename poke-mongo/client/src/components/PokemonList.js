import PokemonCards from "./PokemonCards";

var list = [{id:1},{id:2},{id:3},{id:4},{id:1},{id:2},{id:3},{id:4}]

function PokemonList()
{
    const showList = list.map(() => {
        return (<li>
                    <PokemonCards />
                </li>);
    });

    return (

        <div id="main_container">
            <h1 id="main_title">POKE-MONGO</h1>
            <div className="list">
            {showList}
            </div>
        </div>
    );
}

export default PokemonList;