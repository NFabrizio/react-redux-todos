/**
 * Todos actions
 *
 * Sets up the actions and action creators for the app.
 *
 * @parent /imports/api/reducers/todos.js
 * @parent /imports/containers/AddTodo.js
 * @parent /imports/containers/VisibleTodoList.js
 * @parent /imports/containers/FilterLink.js
 *
 * @export {String} $ADD_TODO - String representing the add todo action type.
 * @export {String} $TOGGLE_TODO - String representing the toggle todo action type.
 * @export {String} $SET_VISIBILITY_FILTER - String representing the set visibility
 *                                           filter action type.
 * @export {Object} $VisibilityFilters - Object representing the visibility filters.
 * @export {Function} $addTodo - Add todo action creator.
 * @export {Function} $toggleTodo - Toggle todo action creator.
 * @export {Function} $setVisibilityFilter - Set visibility filter action creator.
 */

/**
 * Set up exports as constants so that they never accidentally get changed, and
 * list them all in one place to make it easier not to repeat any actions when
 * adding more in the future.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
let nextTodoId = 0;

/**
 * Action creators
 */

/**
 * Add todo action creator
 *
 * Accepts the text from the user input and creates a new object for use in
 * updating the Redux state.
 *
 * @param {String} $text - Text string input by the user in the UI.
 *
 * @return {Object} - The add todo action object.
 */
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  };
}

/**
 * Toggle todo action creator
 *
 * Accepts the id of the todo and creates a new object for use in updating the
 * Redux state.
 *
 * @param {Number} $id - ID of the todo to update.
 *
 * @return {Object} - The toggle todo action object.
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

/**
 * Set visibility filter action creator
 *
 * Accepts the filter selected by the user in the UI and creates a new object
 * for use in updating the Redux state.
 *
 * @param {String} $filter - Filter selected by the user.
 *
 * @return {Object} - The set visibilty filter action object.
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
