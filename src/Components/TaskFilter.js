import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/taskActions';

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter('ALL')} disabled={filter === 'ALL'}>All</button>
      <button onClick={() => setFilter('COMPLETED')} disabled={filter === 'COMPLETED'}>Completed</button>
      <button onClick={() => setFilter('PENDING')} disabled={filter === 'PENDING'}>Pending</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);
