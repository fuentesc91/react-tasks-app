import React from 'react';

import { VisibilityControl } from './VisibilityControl';

export const Tasks = props => {
  return (
    <div>
      {/* Table to show to do tasks */}
      {props.anyTask(false) ? (
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{props.taskTableRows(false)}</tbody>
        </table>
      ) : (
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Well Done!</h1>
            <p className='lead'>
              You just completed all your tasks, maybe you want to add a few
              more ;)
            </p>
          </div>
        </div>
      )}

      {/* Visibility Control Component */}
      <div className='bg-light text-secondary text-center'>
        <VisibilityControl
          description='Completed Tasks'
          isChecked={props.showCompleted}
          callback={checked => props.setShowCompleted(checked)}
        />
      </div>

      {/* Table to show task completed */}
      {props.anyTask(true) ? (
        <div>
          {props.showCompleted && (
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{props.taskTableRows(true)}</tbody>
            </table>
          )}
        </div>
      ) : (
        <div>
          {props.showCompleted && (
            <div className='alert alert-info' role='alert'>
              There are any completed task (let's be more productive)
            </div>
          )}
        </div>
      )}
    </div>
  );
};
