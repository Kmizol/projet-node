function Task({ text,id }) {
  return <div><p style={{ color: "white", fontSize: "25px" }}>{text}</p><button type="button" id={id} onClick={deleteTask}>Supprimer</button></div>
}

const deleteTask = event => {
  console.log(event.currentTarget.id)
  fetch(`http://localhost:8080/tasks/${event.currentTarget.id}`, {
    method: "DELETE"}
    )
};



export default Task;
