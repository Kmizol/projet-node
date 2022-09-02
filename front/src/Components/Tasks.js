import Task from "./Task";
function Tasks({ tasks }) {

  return (
    <div>
      {tasks.map((task) => (
        
        <Task key={task._id} id={task._id} text={task.text} />
      ))}
    </div>
  );
}

export default Tasks;
