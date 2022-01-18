import { useState } from "react";
import './style.scss';

export default function ToDoList() {

  let [currentTodo, setCurrentTodo] = useState('');
  let [todos, setTodos] = useState([
    {
      todo: 'Hit the gym',
      isDone: false
    },
    {
      todo: 'Pay bills',
      isDone: true
    },
    {
      todo: 'Go to a grocery store',
      isDone: false
    },
    {
      todo: 'Read a book',
      isDone: false
    },
    {
      todo: 'Organize office',
      isDone: false
    }
  ]);

  return (
    <div className="todo-list mx-auto w-100">
      <div className="bg-danger p-5 text-white">
        <h1 className="header">To Do List</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Title..."
            className="form-control"
            value={currentTodo}
            onChange={e => { setCurrentTodo(e.target.value) }}
          />
          <button
            className="input-group-text px-3 px-md-5 add"
            onClick={() => {
              if (currentTodo !== "") {
                todos.push({
                  todo: currentTodo,
                  isDone: false
                });
              };
              setTodos(todos);
              setCurrentTodo("");
            }}
          >Add</button>
        </div>
      </div>
      <div>
        {todos.map((item, index) => {
          return (
            <div
              key={index}
              className={"d-flex justify-content-between align-items-center border ps-3 fs-5 " + (item.isDone ? "text-white" : "")}
              style={{ backgroundColor: (item.isDone ? "#999" : index % 2 === 0 ? "#eee" : "#ddd"), cursor: "pointer" }}
              onClick={() => {
                item.isDone = !item.isDone;
                setTodos([...todos]);
              }}
            >
              <div>
                <span className={"me-3 " + (item.isDone ? "d-inline" : "invisible")}>✔</span>
                <span>{!item.isDone ? item.todo : <s>{item.todo}</s>}</span>
              </div>
              <div
                className="delete centered"
                onClick={() => {
                  todos.splice(index, 1);
                  setTodos(todos);
                }}
              >&times;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};