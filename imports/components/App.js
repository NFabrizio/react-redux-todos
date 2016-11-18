import React from 'react';
import Footer from './Footer';
import AddTodo from '/imports/containers/AddTodo';
import VisibleTodoList from '/imports/containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
