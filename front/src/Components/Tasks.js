import Task from "./Task";
function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} />
      ))}
    </div>
  );
}

export default Tasks;
