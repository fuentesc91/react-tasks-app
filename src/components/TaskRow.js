import React from 'react';

export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type='checkbox'
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
    <td>
      <div
        className='btn btn-danger'
        onClick={() => props.deleteTask(props.task)}
      >
        x
      </div>
    </td>
  </tr>
);
