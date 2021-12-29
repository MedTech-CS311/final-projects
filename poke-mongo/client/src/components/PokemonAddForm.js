function PokemonAddForm(props)
{  
    const check = (v) => {return((v === "") ? null:v);}
    const esm = () => {
        var  number = check(document.getElementById("addForm").elements["iNumber"].value);
        if (number === null) return null ;
        var  name = check(document.getElementById("addForm").elements["iName"].value);
        if (name === null) return null ;
        var imageUrl= check(document.getElementById("addForm").elements["iUrl"].value);
        if(imageUrl ===null ) return null ;
        const formDataHolder = {
            number: number,
            name: name,
            types: document.getElementById("addForm").elements["iTypes"].value.split(" "),
            imageUrl: imageUrl
        }
       return formDataHolder 
    }
    const preventString = () =>{
        var x = document.getElementById("addForm").elements["iNumber"].value;
        if(x === "") {document.getElementById("addForm").elements["iNumber"].value = 1}
    }

    async function postPokemon(object)
    {
        const response = await fetch("http://localhost:8000/api/pokemon/", 
        {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
              }
        });

        const json = await response.json();
        if ('types' in json){
            alert('success' + JSON.stringify(json));
        }
        else
        {   
            var keyPattern = json.keyPattern
            if ('number' in keyPattern){
                alert('Error: Pokemon number already exists!')
            }
            if ('name' in keyPattern){
                alert('Error: Pokemon name already exists!')
            }
            if ('imageUrl' in keyPattern){
                alert('Error: Really ?')
            }
            
        }
    }

    const task = (e) => {
        var object = esm();
        if(object === null)
        {
            alert("Error submitting pokemon. Make sure you have filled the input fields properly!")
        }
        else
        {
            postPokemon(object);
        }
        e.preventDefault();
      }
      
    const cancel = (e) => {
        props.cancel();
        e.preventDefault();
      }
    
    /*const prevent = (e) => {
        e.preventDefault();
    }*/

    const Form = (
        <form id = "addForm">
            <span className='cancelButton'></span>
            <button onClick={cancel}>X</button>
            <br></br><br></br>
            <label htmlFor="iNumber">◓Pokemon Number◓</label><br></br>
            <input type="number" min='1' onKeyUp={preventString} name="iNumber"></input><br></br>
            <label htmlFor="iName">◓Pokemon Name◓</label><br></br>
            <input type="text" name="iName"></input><br></br>
            <label htmlFor="iUrl">◓Image URL◓</label><br></br>
            <input type="text" name="iUrl"></input><br></br>
            <label htmlFor="iTypes">◓Pokemon Type◓</label><br></br>
            <select name="iTypes">
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Grass">Grass</option>
                <option value="Dragon">Dragon</option>
                <option value="Water Flying">Water & Flying</option>
                <option value="Grass Poison">Grass & Poison</option>
                <option value="Fire Flying">Fire & Flying</option>
                <option value="Bug Flying">Bug & Flying</option>
                <option value="Bug Poison">Bug & Poison</option>
                <option value="Normal Flying">Normal & Flying</option>
                <option value="Poison Ground">Poison & Ground</option>
                <option value="Poison Flying">Poison & Flying</option>
                <option value="Bug Grass">Bug & Grass</option>
                <option value="Water Fighting">Water & Fighting</option>
                <option value="Rock Ground">Rock & Ground</option>
                <option value="Water Poison">Water & Poison</option>
                <option value="Water Psychic">Water & Psychic</option>
                <option value="Water Ice">Water & Ice</option>
                <option value="Ghost Poison">Ghost & Poison</option>
                <option value="Grass Psychic">Grass & Psychic</option>
                <option value="Ground Rock">Ground & Rock</option>
                <option value="Ice Psychic">Ice & Psychic</option>
                <option value="Rock Water">Rock & Water</option>
                <option value="Rock Flying">Rock & Flying</option>
                <option value="Ice Flying">Ice & Flying</option>
                <option value="Electric Flying">Electric & Flying</option>
                <option value="Fire Flying">Fire & Flying</option>
                <option value="Dragon Flying">Water & Flying</option>
            </select> <br></br><br></br><br></br>
            <button onClick={task}>Add Pokemon!</button>
        </form>
    );

    return Form;
}

export default PokemonAddForm;