import React, { useState } from "react";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [todoLists, setTodoList] = useState([]);
  const HandleAddTodo = () => {
    if (!task) {
      alert("Please Add Something");
    } else {
      setTodoList((data) => {
        const AddingTodo = JSON.parse(JSON.stringify([...data, task]));
        return AddingTodo;
      });
      alert("Successfully Adedd" + " " + task);
      setTask("");
    }
  };
  const HAndleRemoveTodo = (element) => {
    const updatedTodos = todoLists.filter((item) => item !== element);
    setTodoList(updatedTodos);
    alert("SucessFully Removed" + " " + element);
  };
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">Todo App Using React</h3>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={HandleAddTodo}>
          Add
        </button>
      </div>
      <ul className="list-group mt-5">
        {todoLists?.map((item) => (
          <li key={item} className="list-group-item">
            {item}
            <button className="btn" onClick={() => HAndleRemoveTodo(item)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
