import React from 'react';
import MovieSearch from './components/MovieSearch';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <div>
      <h1>Todoist Clone</h1>
      <MovieSearch />
      <TaskList/>
      <AddTaskForm/>
      
    </div>
  );
};

export default App;