// client/src/components/TodoForm.js
import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle('');
  };

  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
