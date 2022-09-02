function Task({ text,id }) {
  return <div>
            <input  style={{ color: "white", fontSize: "25px", background:"#282c34", marginTop:"30px",border:"none"}} id={id} type="text" name="modif" placeholder={text} ></input>
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
  const text = document.getElementById(event.currentTarget.id).value;;
  console.log(event.currentTarget.id)
  console.log(text);
  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ text }),
    
})};


export default Task;
