import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { addTask, toggleTask } from '../redux/taskActions';
import '../TaskList.css';

function TaskList() {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = () => {
    if (newTask.trim()) {
      store.dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleToggleTask = (taskId) => {
    store.dispatch(toggleTask(taskId));
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => handleToggleTask(task.id)}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskList;
