import React, { useState } from 'react';

// TODO give a better design to task creator

export const TaskCreator = props => {
  const [newTaskName, setNewTaskName] = useState('');

  const updateNewTaskValue = e => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName('');
  };

  const validateKey = e => {
    if (e.key === 'Enter') {
      createNewTask();
    }
  };

  return (
    <div className='m-2 d-flex align-items-center justify-content-start'>
      <input
        type='text'
        className='form-control'
        placeholder='New task name'
        value={newTaskName}
        onChange={updateNewTaskValue}
        onKeyUp={validateKey}
      />
      <button className='btn btn-primary mx-2' onClick={createNewTask}>
        Add
      </button>
    </div>
  );
};
