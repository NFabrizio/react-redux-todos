/**
 * Todo list container
 *
 * Container component that handles data flow and redux state changes for Todo list elements.
 *
 * @parents /imports/containers/VisibleTodoList.js
 *
 * @export TodoList - Default. Export of the list of todos.
 */

// Import required dependencies
import React, { PropTypes } from 'react';
import Todo from './Todo';

/**
 * TodoList presentational component
 *
 * Renders the unordered list of todos by mapping through the todos array and
 * calling the Todo presentational component for each. Assigns the onTodoClick
 * function to the onClick prop of the Todo component.
 *
 * @param {Array} $todos - Array of todo list objects with completed and text props.
 * @param {Function} $onTodoClick - Callback to invoke when list element is clicked.
 *                              Defined in VisibleTodoList.js.
 */
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

// Define the propTypes for each parameter passed to the TodoList component
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
