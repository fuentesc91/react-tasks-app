import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';
import Checkbox from '@material-ui/core/Checkbox';

export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <Checkbox
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
        color='primary'
      />
    </td>
    <td>
      <div
        className='btn btn-link text-danger'
        onClick={() => props.deleteTask(props.task)}
      >
        <Octicon icon={getIconByName('diff-removed')} />
      </div>
    </td>
  </tr>
);
