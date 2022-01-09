import { useState, useEffect } from "react";
import "../Styles/main.scss";
import StatusLine from "./StatusLine";
import axios from "axios";

function Main() {
  const [tasks, setTasks] = useState([]);

  function getTasks() {
    axios
      .get("http://localhost:8000/tasks")
      .then((res) => {
        const data = res.data;
        setTasks([...data]);
        console.log("Data received");
        console.log(data);
        console.log(tasks);
      })
      .catch(() => alert("Error receiving data"));
  }

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    let isCompleted;
    isCompleted = status === "Done" ? true : false;
    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        isCompleted: isCompleted,
      },
    ]);
  }
  function cancelChange(task) {}

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });
    console.log(taskToAdd);
    let updatedtask = tasks.filter(
      (task) => task._id === taskToAdd._id && taskToAdd._id !== undefined
    )[0];
    console.log(updatedtask);
    if (updatedtask !== undefined) {
      axios
        .put(`http://localhost:8000/tasks/${updatedtask.id}`, taskToAdd)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:8000/tasks", taskToAdd)
        .then((response) => {
          console.log(response);
          let newTaskList = [...filteredTasks, taskToAdd];
          getTasks();
          setTasks(newTaskList);
        })
        .catch((err) => console.log(err));
    }
  }
 
  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    let deletedtask = tasks.filter((task) => task.id === taskId)[0]._id;
    axios
      .delete(`http://localhost:8000/tasks/${deletedtask}`)
      .then((res) => setTasks(filteredTasks));
  }

  function moveTask(id, _id) {
    let task = tasks.filter((task) => {
      return task.id === id;
    })[0];
    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    task.isCompleted = true;
    let newTaskList = [...filteredTasks, task];
    setTasks(newTaskList);
    axios
    .put(`http://localhost:8000/tasks/${task.id}`,{isCompleted: true})
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  }
  return (
    <div>
      <h1>Task Manager</h1>
      <main>
        <section>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            cancelChange={cancelChange}
            status="In Progress"
            isCompleted={false}
          />
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            cancelChange={cancelChange}
            status="Done"
            isCompleted={true}
          />
        </section>
      </main>
    </div>
  );
}

export default Main;
