import React from 'react';
import { connect } from 'react-redux';

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="task-stats">
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(TaskStats);
