function PokemonDeleteForm(props)
{
    const task = (e) => {
        deletePokemon();
        e.preventDefault();
      }

    const cancel = (e) => {
        props.cancel();
        e.preventDefault();
      }

    const preventString = () =>{
        var x = document.getElementById("deleteForm").elements["iNumber"].value;
        if(x === "") {document.getElementById("deleteForm").elements["iNumber"].value = 1}
    }

    async function deletePokemon()
    {
        var number = document.getElementById("deleteForm").elements["iNumber"].value;
        
        if(number==="")
        {
            alert("Error: Number field is empty!") 
        }
        else
        {
            const response = await fetch("http://localhost:8000/api/pokemon/" + number + "/",{
                method: 'DELETE'
            });
            const json = await response.json().catch(() => {return;});

            if(json === undefined)
            {
                alert("Error: Pokemon with this number does not exist!");
            }
            else
            {
                alert("Success!"); // replace
            }
        }
    }

    const Form = (
        <form id ="deleteForm">
         <label htmlFor="iNumber">◓Pokemon Number◓</label><br></br>
         <input type="number" min='1' onKeyUp={preventString} name="iNumber"></input><br></br>
         <button onClick= {task}>Delete Pokemon!</button><button onClick= {cancel} >Cancel</button>
        </form>
        
    );
    return Form;
}
export default PokemonDeleteForm;