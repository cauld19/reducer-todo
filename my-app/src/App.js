import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from "./reducers/reducer";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"

import './App.css';


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todo, setTodo] = useState("");



  const toggleTodo = todoId => {
    dispatch({type: "TOGGLE_TODO", payload: todoId})

    
  }

  const removeTodo = todoId => {
    dispatch({type: "REMOVE_TODO", payload: todoId})
    console.log("remove", todo)
  }


  const handleChange = e => {
    setTodo(e.target.value)
  }


  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo});
    setTodo("")
  }

  const clearTodo = () => {
    dispatch({ type: "CLEAR_TODOS"})
    console.log("clicked");
  }


  return (
    <div className="App">
      <TodoList state={state} removeTodo={removeTodo}  toggleTodo={toggleTodo} />
      <TodoForm todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} clearTodo={clearTodo}/>
    </div>
  );
}

export default App;
