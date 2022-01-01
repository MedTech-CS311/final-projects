import "../Styles/task.scss";
import { useState } from "react";

export default function Task(props) {
  const { addTask, deleteTask, moveTask, task, cancelChange } = props;

  const [priorityLevel, setPriorityLevel] = useState(task.priority);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setPriority(event) {
    setPriorityLevel(event.target.attributes.priority.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        if (task._id !== undefined) {
          let newTask = {
            _id: task._id,
            id: task.id,
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            deadline: event.target.elements.date.value,
            isCompleted: task.isCompleted,
            priority: priorityLevel,
            isCollapsed: true,
          };
          addTask(newTask);
        } else {
          let newTask = {
            id: task.id,
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            deadline: event.target.elements.date.value,
            isCompleted: task.isCompleted,
            priority: priorityLevel,
            isCollapsed: true,
          };
          addTask(newTask);
        }
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteTask(task.id);
    }
    if (formAction === "cancel") {
      setCollapsed(true);
      cancelChange(task);
    }
  }

  function handleCompletion() {
    moveTask(task.id, task._id);
  }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <form
        onSubmit={handleSubmit}
        className={collapsed ? "collapsed" : "notcollapsed"}
      >
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="date"
          className="title input"
          name="date"
          placeholder="Enter Date"
          disabled={collapsed}
          defaultValue={task.deadline}
        />
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Enter Description"
          defaultValue={task.description}
        />
        <div className="priorityLabels">
          <label className={`low ${priorityLevel === "low" ? "selected" : ""}`}>
            <input
              priority="low"
              onChange={setPriority}
              type="radio"
              name="priority"
            />
            low
          </label>
          <label
            className={`medium ${priorityLevel === "medium" ? "selected" : ""}`}
          >
            <input
              priority="medium"
              onChange={setPriority}
              type="radio"
              name="priority"
            />
            medium
          </label>
          <label
            className={`high ${priorityLevel === "high" ? "selected" : ""}`}
          >
            <input
              priority="high"
              onChange={setPriority}
              type="radio"
              name="priority"
            />
            high
          </label>
        </div>

        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? "Edit" : "Save"}
        </button>
        {!collapsed && (
          <button
            onClick={() => {
              setFormAction("cancel");
            }}
            className="button delete"
          >
            Cancel
          </button>
        )}
        {collapsed && (
          <button
            onClick={() => {
              setFormAction("delete");
            }}
            className="button delete"
          >
            X
          </button>
        )}
      </form>
      {collapsed && (
        <button onClick={handleCompletion} className="button moveTask">
          &#187;
        </button>
      )}
    </div>
  );
}
