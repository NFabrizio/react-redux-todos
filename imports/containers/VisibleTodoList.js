/**
 * Visible todo list container
 *
 * Container component that handles data flow and redux state changes for todo
 * list elements.
 *
 * @parents /imports/components/App.js
 *
 * @export VisibleTodoList - Default. Export of the unordered todo list.
 */

// Import required dependencies
import { connect } from 'react-redux';
import { toggleTodo } from '/imports/api/actions';
import TodoList from '/imports/components/TodoList';

/**
 * getVisibleTodos function
 *
 * Function to handle filtering the todos array based on the visibility filter
 * selected by the user. It runs a switch case based on the filter and returns
 * the appropriately matching array of todos.
 *
 * @see switch()
 * @see filter()
 *
 * @param {Array} $todos - Array of all todos in the Redux state tree.
 * @param {String} $filter - Current visibilityFilter in the Redux state tree.
 *
 * @return {Array} $todos - Array of todos after being filtered based on case.
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

/**
 * Map state to props function
 *
 * Function that tells how to transform the current Redux store state into the
 * props that should be passed to the presenatational components. This function is
 * used to pass the todos and visibilityFilter from the state into the getVisibleTodos
 * function and return the appropriate todos to create a valid array of todos
 * inside an object.
 *
 * @see getVisibleTodos()
 *
 * @param {Object} $state - Redux state object passed in from the Provider component.
 *
 * @return {Object} $todos - Array of filtered todos according to filter set.
 */
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

/**
 * Map dispatch to props function
 *
 * Function that returns the onTodoClick method. The onTodoClick method will be
 * injected as a prop into the presentational component and will trigger the
 * dispatching of the toggleTodo action. This method will fire the
 * toggleTodo action and dispatch it so that the redux state object
 * will be updated with the new completed boolean based on the user action in the UI.
 *
 * @see dispatch()
 * @see toggleTodo()
 *
 * @param {Function} $dispatch - Redux store method for intiating an action to
 *                               update the Redux state.
 *
 * @return {Function} $onTodoClick - Connects the UI to the action and allows it to
 *                               be fired when a user clicks a todo item.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

/**
 * Create the VisibleTodoList container component
 *
 * Uses the React Redux connect function to pass in the functions defined above
 * so that the state can be converted into the props needed and the actions can
 * be dispatched from the presentational component. These functions will be passed
 * in and connected to the TodoList presentational component.
 *
 * @see connect()
 */
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
