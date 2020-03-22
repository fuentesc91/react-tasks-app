import React, { useState, useEffect } from 'react';
import { Tasks } from './components/Tasks';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';

function App() {
  // React Hooks

  // useState definitions
  const [userName, setUserName] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  // useEffect to check if there is info saved on localstorage, if it is
  // load that data, if it is not, give default example values
  useEffect(() => {
    let data = localStorage.getItem('tasks');
    let user = localStorage.getItem('user');
    if (data != null) {
      setTaskItems(JSON.parse(data));
      setUserName(user);
    } else {
      user = window.prompt('Welcome, please set your User Name', 'User');
      setUserName(user);
      setTaskItems([]);
      setShowCompleted(true);
    }
  }, []);

  // Every tome TaskItems changes, save on local storage the info
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
    localStorage.setItem('user', userName);
  }, [taskItems, userName]);

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

  const noTaskToDo = () => {
    if (taskItems.filter(t => t.done === false).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // XML
  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />

      <TaskCreator callback={createNewTask} />

      {taskItems.length ? (
        <Tasks
          showCompleted={showCompleted}
          taskTableRows={taskTableRows}
          setShowCompleted={setShowCompleted}
          noTaskToDo={noTaskToDo}
        />
      ) : (
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Add a new task!</h1>
            <p className='lead'>
              To start using your task app, the first thing to do is add a new
              task on the input up here =D
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// TODO change checkbox style with a custom component
