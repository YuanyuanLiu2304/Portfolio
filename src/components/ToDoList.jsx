import { useState } from "react";
import styled from "styled-components";
const ToDoList = () => {
  let [newTask, setNewTask] = useState("");
  let [tasks, setTasks] = useState([
    { id: 1, name: "attend a yoga class", isEdit: false },
    { id: 2, name: "pay bills for the month", isEdit: false },
    { id: 3, name: "buy groceries for the week", isEdit: false },
  ]);

  let task = {
    id: 0,
    name: "",
    isEdit: false,
  };

  function inputTask(event) {
    setNewTask(event.target.value);
  }

  function handleTask() {
    task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      name: newTask,
      isEdit: false,
    };

    setNewTask("");
    return newTask !== "" && setTasks([...tasks, task]);
  }

  function handleEdit(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isEdit: !task.isEdit } : task
      )
    );
  }

  function handleUpdate(taskId, newTaskName) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newTaskName } : task
      )
    );
  }

  function handleDelete(taskId) {
    const todoList = tasks.filter((t) => t.id !== taskId);
    setTasks(todoList);
  }

  return (
    <Wrapper>
      <div className="bg-emerald-50 header">
        <h1>To Do List</h1>
        <p>TaskList App &nbsp; | &nbsp; React &nbsp; Bootstrap</p>
        <div className="alert alert-success mt-5 fs-5">
          This is a simple "to-do list" application that features a clean and
          responsive design built with React and Bootstrap. It allows users to
          add, edit, and delete tasks, tasks are displayed in a list, where
          users can mark them as completed or delete them if they are no longer
          needed.
        </div>
      </div>
      <div className="tasks_container text-start col-sm-12 col-md-8 col-lg-6 mx-auto mt-5 py-5">
        <h2>Add your task here</h2>
        <div className="tasks_wrapper">
          <div className="d-flex">
            <input
              type="text"
              className="form-control-lg w-75"
              placeholder="Add task..."
              value={newTask}
              onChange={inputTask}
            />
            <button
              className="btn btn-primary btn-lg fs-5 ms-3 fw-medium w-25"
              onClick={handleTask}
            >
              Add
            </button>
          </div>

          <div className="tasks m-auto">
            <ul className="list mt-4 ps-0">
              {tasks.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="list-item list-unstyled fw-normal mt-3"
                  >
                    <div className="row align-items-center">
                      <div className="col-1">
                        <input
                          className="form-check-input form-check-input-sm fs-4"
                          type="checkbox"
                          id={`task-${task.id}`}
                        />
                      </div>
                      <div className="col-7">
                        <label
                          className="form-check-label fs-4 fw-medium w-100"
                          htmlFor={`task-${task.id}`}
                        >
                          {task.isEdit ? (
                            <input
                              className="w-100"
                              value={task.name}
                              onChange={(event) =>
                                handleUpdate(task.id, event.target.value)
                              }
                            />
                          ) : (
                            <span className="text-black ps-0">{task.name}</span>
                          )}
                        </label>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-sm fs-6 btn-warning fw-semibold"
                          onClick={() => handleEdit(task.id)}
                        >
                          {task.isEdit ? "Save" : "Edit"}
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-sm fs-6 btn-danger fw-semibold"
                          onClick={() => handleDelete(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #334155;

  .header {
    padding: 4rem;
    align-items: center;
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .tasks_container {
    padding: 0 2rem;
    max-width: 600px;
  }
  .tasks_container h2 {
    color: #0f172a;
    font-size: 2rem;
    margin-bottom: 2.25rem;
  }

  input {
    border: 1px solid;
  }
`;
export default ToDoList;
