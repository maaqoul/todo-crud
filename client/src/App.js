import React, { useState } from "react";
import TodoElement from "./components/TodoElement";

function App() {
  let [id, setId] = useState(0)
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);


  
  const handleInputChange = (e) => {

    setTodo(e.target.value)
  };

  const handleOnClick = () => {
    if(todo) {
      setId(++id)
      setTodos([...todos, {item: todo, id, done: false}]);
      setTodo('')
    }
  }

  const toggleDone = (id) => {
    const todo = todos.find(todo => todo.id === id)
    todo.done = !todo.done;
    setTodos([...todos]);
  }
 
  return (
    <div className="App">
      <header>
        Icon
      </header>
      <main>
        <input type="text" value={todo}  onChange={handleInputChange}/> | <button onClick={handleOnClick}>add</button>

        <div>
          <ul>
            {todos.map((t) => (<TodoElement todo={t} key={t.item} toggle={toggleDone}/>))}
          </ul>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
