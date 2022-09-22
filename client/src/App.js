import React, { useEffect, useState } from "react";
import TodoElement from "./components/TodoElement";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">TodoAPP</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <main>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={todo}
            onChange={handleInputChange}
            placeholder="Enter your Todo"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            className="mx-auto"
            variant="primary"
            onClick={handleOnClick}
            id="button-addon2"
          >
            Add
          </Button>
        </InputGroup>
        {/* <input
          className="mx-auto"
          type="text"
          value={todo}
          onChange={handleInputChange}
        />{" "}
        |{" "}
        <Button className="mx-auto" variant="primary" onClick={handleOnClick}>
          Add
        </Button>{" "}
           */}

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
