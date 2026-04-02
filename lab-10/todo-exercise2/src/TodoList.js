import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>✨ No tasks yet!</p>
        <p>Add your first task above 👆</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span className="todo-text">{todo.text}</span>
          <button onClick={() => onDelete(todo.id)} className="delete-btn">
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;