import React from "react";
function PokemonMusic (){
    const audioVolume = () => {
        var av = document.getElementById('audioPokeMusic');
        av.volume = 0.02;
        console.log(document.getElementById('audioPokeMusic').volume);
    }
    React.useEffect(audioVolume,[]);
    return (
        <audio id='audioPokeMusic' muted={false}  controls={false} autoPlay ={true}> 
        <source type = 'audio/mp3' src = '/audioMusic.mp3' />  
        </audio> 
    );
}
export default PokemonMusic;