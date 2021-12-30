import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import React from 'react';

function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

const x = async () => {
    await timeout(5000);
    alertify.message("Pro Tip:\r\nClick on a Pokemon card to view its official wiki page!",10); 
}

function PokemonProTip()
{
    React.useEffect(x,[]);
    return <></>;
}

export default PokemonProTip;