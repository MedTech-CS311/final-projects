function PokemonDeleteForm(props)
{   
    const number = () => {
        return(document.getElementById("deleteForm").elements["iNumber"].value)
    }
    
    const task = (e) => {
        console.log(number());
        e.preventDefault();
      }

    const cancel = (e) => {
        props.cancel();
        e.preventDefault();
      }
    const turnPositive = () =>{
        var x = number();
        if(x<0){document.getElementById("deleteForm").elements["iNumber"].value= x * -1}
    }
    const Form = (
        <form id ="deleteForm">
         <label htmlFor="iNumber">Pokemon Number</label><br></br>
         <input type="number" min='0' onKeyUp={turnPositive} name="iNumber"></input><br></br>
         <button onClick= {task}>Delete Pokemon!</button><button onClick= {cancel} >Cancel</button>
        </form>
        
    );
    return Form;
}
export default PokemonDeleteForm;