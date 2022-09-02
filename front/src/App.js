import "./App.css";
import { useRef, useState, useEffect } from "react";
import Tasks from "./Components/Tasks";


function App() {
  const inputText = useRef("");
  const apiUrl = "http://localhost:8080";
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch(`${apiUrl}/tasks`);
      const data = await res.json();
      setTasks(data.tasks);
      //console.log(data.tasks)
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
  return (
    <div className="App">
      <header className="App-header">
        <p>Tache</p>
      </header>
      <form onSubmit={onSubmit}>
        <input id="add" ref={inputText} type="text" placeholder="Tache à faire.." />
        &nbsp; <button>Ajouter</button>
      </form>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
