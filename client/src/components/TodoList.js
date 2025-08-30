// client/src/components/TodoList.js
import React from 'react';

export default function TodoList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) return <p>No tasks yet — add one above.</p>;
  return (
    <ul className="todo-list">
      {tasks.map((t) => (
        <li key={t._id} className={t.completed ? 'completed' : ''}>
          <span className="title" onClick={() => onToggle(t._id)}>
            {t.title}
          </span>
          <div className="actions">
            <button onClick={() => onDelete(t._id)} className="delete">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
