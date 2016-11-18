/**
 * Combine the reducers and export them
 */

// Set up imports
import { combineReducers } from 'redux';
import  todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
