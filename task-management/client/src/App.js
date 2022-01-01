import React,{useEffect} from 'react';
import Main from './Components/Main'




const App = ()=>{
    useEffect(() => {
        document.title = "Task Manager";  
      }, []);

    return(
        <div className ="App">
           <Main></Main>
            
        </div>
    )

}

export default App;