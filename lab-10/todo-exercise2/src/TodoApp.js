import React, { useState } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now() + Math.random(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos(prev => [...prev, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-app">
      <h1>📋 Smart Todo List</h1>
      <div className="input-section">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} className="add-btn">➕ Add</button>
        {todos.length > 0 && (
          <button onClick={clearAll} className="clear-btn">🗑️ Clear All</button>
        )}
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;