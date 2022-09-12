import React from "react";

const TodoList = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addItem = (e) => {
    if (input.length) {
      const item = { id: Math.random(), todo: input, isCompleted: false };
      setTodoList([...todoList, item]);
      setInput("");
    }
  };

  const handleCompleted = (key) => {
    const mapped = todoList.map((item) =>
      item.id === key ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoList(mapped);
    console.log("mapped", mapped);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div className="d-flex">
        <input className="form-control"
          placeholder="item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem} className="btn btn-info rounded-0  btn-sm">Add</button>
      </div>

      <div>
        <ul className="list-group list-group-flush">
          {todoList.map(({ id, todo, isCompleted }) => (
            <li
              onClick={() => handleCompleted(id)}
              className={isCompleted ? "todo strike" : "todo list-group-item" }
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
