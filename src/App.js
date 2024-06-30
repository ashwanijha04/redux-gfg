import React from 'react';
import TaskList from './Components/TaskList';
import TaskFilter from './Components/TaskFilter';
import TaskStats from './Components/TaskStats';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskFilter />
      <TaskStats />
      <TaskList />
    </div>
  );
}

export default App;
