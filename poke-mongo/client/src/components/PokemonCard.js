function PokemonCard(props)
{   
    const openWikiLink = () =>{
            const link = 'https://www.pokemon.com/us/pokedex/'+props.name;
            window.open(link, '_blank').focus();
    }
    var t = "";
    var id = "";
    if(props.types.length > 1)
    {
        t = props.types[0] + " & " + props.types[1];
        id = props.types[0] + props.types[1];
    }
    else
    {
        t = props.types[0];
        id = props.types[0];
    }

    return (
        
        <div className= "card" id={id} onClick = {openWikiLink} >
            <h2>{props.name}</h2>
            <img width="200" height="200" src={props.imageUrl} alt={props.name + "'s image is loading.."}></img>
            <div className= "cardDescription">
                <p>Type: {t}</p>
                <p>Number: {props.number}</p>
            </div>
        </div>
    );
}

export default PokemonCard;