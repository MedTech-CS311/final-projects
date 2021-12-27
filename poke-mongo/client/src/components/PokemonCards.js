function PokemonCards(props)
{
    return (
        
        <div className= "card">
            <h2>{props.name}</h2>
            <img width="200" height="200" src={props.imageUrl} alt={props.name + "'s image is loading.."}></img>
            <div className= "description">
                <p>Creature type: {props.types}</p>
                <p>Database number: {props.number}</p>
            </div>
        </div>
    );
}

export default PokemonCards;