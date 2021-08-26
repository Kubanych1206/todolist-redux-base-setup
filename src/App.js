import React from 'react';
import AddTodo from './container/AddTodo';
import VisibileTodoList from './container/VisibileTodoList';

function App() {

  return (
    <div className='App'>
      <AddTodo/>
      <VisibileTodoList />
    </div>
  )
}

export { App };
