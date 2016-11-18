/**
 * Todos actions
 *
 * Sets up the actions and action creators for the app.
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

// Handle the action of adding a todo
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  };
}

// Handle the action of toggling a todo on or off
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

// Handle the action of setting the visibility filter for a todo
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
