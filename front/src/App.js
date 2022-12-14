import "./App.css";
import { useRef, useState, useEffect } from "react";
import Tasks from "./Components/Tasks";


function App() {
  const inputText = useRef("");
  var apiUrl = "http://localhost:8080";
  var apisearchURL = "http://localhost:8080/tasks"
  const [tasks, setTasks] = useState([]);
  function FiltreAFaire () {
    
    apisearchURL = "http://localhost:8080/tasks/etat/false";
    console.log(apisearchURL);
  };
  
  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch(`${apisearchURL}`);
      const data = await res.json();
      setTasks(data.tasks);
     // console.log(data.tasks)
    }

    fetchTasks();
    setInterval(fetchTasks,1000);
  }, []);
 


  function onSubmit(e) {
    e.preventDefault();
    addNewTask();
    
  }

  function addNewTask() {
    const text = inputText.current.value;
    fetch(`${apiUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }).then(
      inputText.current.value = "");
    
  }



  const deleteAllTask = event => {
    console.log(event.currentTarget.id)
    fetch(`http://localhost:8080/tasks`, {
      method: "DELETE"}
      )
  };

 



  return (
    <div className="App">
      <header className="App-header">
        <p>Tache</p>
      </header>
      <form onSubmit={onSubmit}>
        <input id="add" ref={inputText} type="text" placeholder="Tache à faire.." />
        &nbsp; <button >Ajouter</button>
        <br></br>
        <p style={{color:"white"}}>Filtre</p>
        </form>
        <button onClick={FiltreAFaire}>A faire</button>  &nbsp;
        <button>Fini</button>
      
      <Tasks tasks={tasks} />
      <button style={{marginTop:"50px"}}  onClick={deleteAllTask}>Supprimer Tout</button>
      
    </div>
  );
}

export default App;
