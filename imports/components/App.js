/**
 * Main parent app component
 *
 * This is where the custom components that create the display for the app are set up.
 *
 * @parent /client/main.js
 *
 * @export App - Default. Export of the base components to render the app.
 */

// Import required dependencies
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
