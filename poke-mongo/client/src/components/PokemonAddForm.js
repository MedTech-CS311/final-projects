function PokemonAddForm()
{

    const esm = () => {

        const formDataHolder = {
            number: document.getElementById("addForm").elements["iNumber"].value,
            name: document.getElementById("addForm").elements["iName"].value,
            types: document.getElementById("addForm").elements["iTypes"].value.split(" "),
            imageUrl: document.getElementById("addForm").elements["iUrl"].value
        }
       return formDataHolder 
    }

    const task = (e) => {
        alert(JSON.stringify(esm()));
        e.preventDefault();
      }
      
    const cancel = (e) => {
        alert('cancel');
        e.preventDefault();
      }
    
    /*const prevent = (e) => {
        e.preventDefault();
    }*/

    const Form = (
        <form id = "addForm">
            <label htmlFor="iNumber">Database Number:</label><br></br>
            <input type="number" name="iNumber"></input><br></br>
            <label htmlFor="iName">Pokemon Name:</label><br></br>
            <input type="text" name="iName"></input><br></br>
            <label htmlFor="iUrl">Image URL:</label><br></br>
            <input type="text" name="iUrl"></input><br></br>
            <label htmlFor="iTypes">Pokemon Type:</label><br></br>
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
            </select> <br></br><br></br>
            <button onClick={task}>Add Pokemon!</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );

    return Form;
}

export default PokemonAddForm;