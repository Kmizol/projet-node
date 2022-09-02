 function Task({ text,id,etat }) {

 
  
  return <div>
            <label style={{color: "white"}}>A Faire</label>
            <input style={{ width:" 20px",height: "20px"}} onClick={patchetatTask} type="checkbox" id={id} name={(`etat${id}`)} value="0" ></input>
            &nbsp;&nbsp;
            <label style={{color: "white"}}>Fini</label>
            <input style={{ width:" 20px",height: "20px"}} onClick={patchetatfTask} type="checkbox" id={id} name={(`etat${id}`)} value="1" ></input>
            &nbsp;&nbsp;
            <input  style={{ color: "white", fontSize: "25px", background:"#282c34", marginTop:"30px",border:"none"}} id={id} type="text" name={(`name${id}`)} placeholder={text} ></input>
            &nbsp;
            <button  type="button" id={id} onClick={patchTask}>Modifier</button>
            &nbsp;
            <button type="button" id={id} onClick={deleteTask}>Supprimer</button>
          </div>
}

const deleteTask = event => {
  console.log(event.currentTarget.id)
  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "DELETE"}
    )
};

const patchTask = event => {
  const text = document.getElementsByName((`name${event.currentTarget.id}`))[0].value
  const name = document.getElementById(event.currentTarget.id).name;
  console.log(event.currentTarget.id)
  console.log(text);
  console.log(name);

  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ text }),
    
})};

const patchetatTask = event => {
  let checkBox = document.getElementsByName((`etat${event.currentTarget.id}`))[0]
  const Fini =  document.getElementsByName((`etat${event.currentTarget.id}`))[0]
  const AFaire =  document.getElementsByName((`etat${event.currentTarget.id}`))[1]
  const etat = checkBox.value;;
  

  console.log(event.currentTarget.id)
  console.log(etat);
  
  if(Fini.checked == true)
  {
    AFaire.checked = false;
  }
  else
  {
    Fini.checked = true;
  }
  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ etat }),
    
})};

const patchetatfTask = event => {
  let checkBox = document.getElementsByName((`etat${event.currentTarget.id}`))[1]
  const Fini =  document.getElementsByName((`etat${event.currentTarget.id}`))[0]
  const AFaire =  document.getElementsByName((`etat${event.currentTarget.id}`))[1]
  const etat = checkBox.value;;
  

  console.log(event.currentTarget.id)
  console.log(etat);
  if(AFaire.checked == true)
  {
    Fini.checked = false;
  }
  else
  {
    Fini.checked = true;
  }
  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ etat }),
    
})};



export default Task;
