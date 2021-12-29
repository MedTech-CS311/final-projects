function PokemonDeleteForm(props)
{   
    
    const task = (e) => {
        e.preventDefault();
      }

    const cancel = (e) => {
        props.cancel();
        e.preventDefault();
      }
    const preventString = () =>{
        var x = document.getElementById("deleteForm").elements["iNumber"].value;
        if(x === "") {document.getElementById("deleteForm").elements["iNumber"].value = 0}
    }
    const Form = (
        <form id ="deleteForm">
         <label htmlFor="iNumber">Pokemon Number</label><br></br>
         <input type="number" min='0' onKeyUp={preventString} name="iNumber"></input><br></br>
         <button onClick= {task}>Delete Pokemon!</button><button onClick= {cancel} >Cancel</button>
        </form>
        
    );
    return Form;
}
export default PokemonDeleteForm;