// client/src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <TodoApp />
      </main>
    </>
  );
}

export default App;
