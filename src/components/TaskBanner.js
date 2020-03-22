import React from 'react';
import Octicon, { getIconByName } from '@primer/octicons-react';

export const TaskBanner = props => (
  <div className='d-flex flex-column bd-highlight bg-primary text-white mb-3'>
    <h4 className='text-center bd-highlight p-4'>
      <button
        className='btn btn-link text-right text-white'
        title='Edit User Name'
        onClick={props.editUser}
      >
        <Octicon icon={getIconByName('pencil')} />
      </button>
      {props.userName}'s Tasks ({props.taskItems.filter(t => !t.done).length}{' '}
      tasks to do)
    </h4>
  </div>
);

// TODO edit user function
