import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import {reducer, initialState} from './reducers/todoReducer';

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState);
const [newTodoText, setNewTodoText] = useState('');

const handleChanges = (e) => {
setNewTodoText(e.target.value);
}

const addTodo = (e) =>{
  e.preventDefault();
dispatch({type: "NEW_TODO_ADDED", payload: newTodoText});
}

const toggleCompleted = (todoId) =>{
  dispatch({type: "COMPLETED_TOGGLED", payload: todoId});
}

const clearCompleted = (e)=>{
  e.preventDefault();
  dispatch({type: "CLEAR_COMPLETED"});
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <form>
            <input
            className="title-input"
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
            />
            <button onClick={addTodo}>Add To-Do</button>
            <button onClick={clearCompleted} >Clear Completed</button>
          </form>
        </div>
        <div>
          {state.stateArray.map(todo => (
            <div 
        onClick={()=> toggleCompleted(todo.id)}
        className={`chore${todo.completed ? 'completed' : ''}`}
        >
            <h2>{todo.item}</h2>
          </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
