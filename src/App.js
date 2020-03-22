import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';

function App() {
  // React Hooks

  // useState definitions
  const [userName, setUserName] = useState('carlos');
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  // useEffect to check if there is info saved on localstorage, if it is
  // load that data, if it is not, give default example values
  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName('Carlos Example');
      setTaskItems([
        {
          name: 'Task One Example',
          done: false
        },
        {
          name: 'Task Two Example',
          done: false
        },
        {
          name: 'Task Three Example',
          done: true
        },
        {
          name: 'Task Four Example',
          done: false
        }
      ]);
      setShowCompleted(true);
    }
  }, []);

  // Every tome TaskItems changes, save on local storage the info
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  // Methods
  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const deleteTask = task => {
    if (taskItems.find(t => t.name === task.name)) {
      const pos = taskItems.indexOf(task);
      taskItems.splice(pos, 1);
      setTaskItems([...taskItems]);
    }
  };

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ));

  // XML
  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />

      <TaskCreator callback={createNewTask} />

      {/* Table for Tasks to do */}
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>

      {/* Visibility Control Component */}
      <div className='bg-secondary text-white text-center'>
        <VisibilityControl
          description='Completed Tasks'
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {/* Table to show task completed */}
      {showCompleted && (
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;

// TODO change checkbox style with a custom component
