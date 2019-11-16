import React from "react"

import Todo from "./Todo"

const TodoList = ({state, removeTodo}) => {
    return (
        <div className="todo-outer-div">
            {/* <Todo state={state}/> */}
            {state.todos.map(todo =>(
                <Todo 
                  key={todo.id}
                  todo={todo.item}
                  id={todo.id}
                  removeTodo={removeTodo}
                />
            ))}
            {/* <button onClick={props.clearTodos}>Clear Todos</button> */}
        </div> 
      );
}

export default TodoList

