import "../Styles/statusLine.scss";
import Task from "./Task";

export default function StatusLine(props) {
  const {
    status,
    tasks,
    addTask,
    deleteTask,
    addEmptyTask,
    moveTask,
    isCompleted,
    cancelChange,
  } = props;

  let taskList, tasksCompletion;

  function handleAddEmpty() {
    addEmptyTask(status);
    console.log(status);
  }

  if (tasks) {
    tasksCompletion = tasks.filter((task) => {
      return task.isCompleted === isCompleted;
    });
  }

  if (tasksCompletion) {
    taskList = tasksCompletion.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          moveTask={(id, _id) => moveTask(id, _id)}
          cancelChange={(task) => cancelChange(task)}
          key={task._id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button onClick={handleAddEmpty} className="button addTask">
        +
      </button>
    </div>
  );
}
