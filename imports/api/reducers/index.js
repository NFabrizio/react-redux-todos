/**
 * Combine the reducers and export them
 *
 * Imports the reducers and combines them for use in the application.
 *
 * @export todoApp - Default. The todoApp export of the reducer combination.
 */

// Set up imports
import { combineReducers } from 'redux';
import  todos from './todos';
import visibilityFilter from './visibilityFilter';

/**
 * Todo app combine reducer
 *
 * Combines the visibilityFilter and todos reducers to update the Redux state
 * of the application.
 *
 * @see combineReducers()
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
