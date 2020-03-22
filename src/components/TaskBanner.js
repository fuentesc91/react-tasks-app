import React from 'react';

export const TaskBanner = props => (
  <div className='d-flex flex-column bd-highlight bg-primary text-white mb-3'>
    <h4 className='text-center bd-highlight p-4'>
      {props.userName}'s Tasks ({props.taskItems.filter(t => !t.done).length}{' '}
      tasks to do)
    </h4>
    <div className='d-flex justify-content-end'>
      <a
        href=''
        className='text-right mr-3 text-white'
        onClick={props.editUser}
      >
        Edit User
      </a>
    </div>
  </div>
);

// TODO edit user function
