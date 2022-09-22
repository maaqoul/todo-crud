import React, { useEffect, useState } from "react";
import TodoElement from "./components/TodoElement";
import Button from "react-bootstrap/Button";

function App() {
  const url = "http://localhost:3001/api/todo";

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((todos) => {
        console.log("todos :", todos);
        setTodos(todos);
      })
      .catch((e) => console.error(e));
  }, [todo]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnClick = () => {
    if (todo) {
      // ;
      setTodo("");
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ item: todo, done: false }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((r) => {
          setTodos([
            ...todos,
            { item: todo, id: r ? r._id : null, done: false },
          ]);
        });
    }
  };

  const toggleDone = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <header>Icon</header>
      <main>
        <input type="text" value={todo} onChange={handleInputChange} /> |{" "}
        <Button variant="primary" onClick={handleOnClick}>
          Add
        </Button>{" "}
        <div>
          <ul>
            {todos.map((t) => (
              <TodoElement todo={t} key={t["_id"]} toggle={toggleDone} />
            ))}
          </ul>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
