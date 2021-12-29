function PokemonDeleteForm()
{   
    
    const task = (e) => {
        alert('task');
        e.preventDefault();
      }

    const cancel = (e) => {
        alert('cancel');
        e.preventDefault();
      }
    const Form = (
        <form className ="deleteForm">
         <label htmlFor="PokeID">Pokemon Number</label><br></br>
         <input type="number" name="PokeID"></input><br></br>
         <button onClick= {task}>Delete Pokemon!</button><button onClick= {cancel} >Cancel</button>
        </form>
        
    );
    return Form;
}
export default PokemonDeleteForm;