/**
 * Todo component
 *
 * Component that renders the li elements for displaying the todo list.
 *
 * @parents /imports/components/TodoList.js
 *
 * @export Todo - Default. Export of the individual list elements for the todo list.
 */

// Import required dependencies
import React, { PropTypes } from 'react';

/**
 * Todo presentational component
 *
 * Creates the li elements for displaying the items in the todo list. Sets the
 * onClick event handler to the onClick callback defined in TodoList, and styles
 * the li element based on whether the boolean completed is true or false. False
 * will result in a line-through style while true will display the item normally.
 * The text string will be displayed as the content of the li element.
 *
 * @param {Function} $onClick - Callback to invoke when list element is clicked.
 *                              Defined in TodoList.js.
 * @param {Boolean} $completed - Boolean that represents whether the task is completed.
 * @param {String} $text - Todo text which is input by the user.
 */
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

// Define the propTypes for each parameter passed to the Link component
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
