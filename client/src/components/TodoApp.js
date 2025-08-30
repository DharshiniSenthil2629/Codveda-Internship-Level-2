// client/src/components/TodoApp.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchTasks() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      setError('Could not load tasks');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    try {
      const res = await api.post('/tasks', { title });
      setTasks(prev => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(t => t._id === id);
    try {
      const res = await api.put(`/tasks/${id}`, { completed: !task.completed });
      setTasks(prev => prev.map(t => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="todo-app">
      <h2>To-Do List</h2>
      <TodoForm onAdd={addTask} />

      {loading && <p>Loading tasks...</p>}
      {error && <p className="error">{error}</p>}

      <TodoList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}
