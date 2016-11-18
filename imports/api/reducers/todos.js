/**
 * Action reducers
 *
 * Functions to specify how the actions changed the state of the app.
 */

// Import actions and Redux method
import { ADD_TODO, TOGGLE_TODO } from '/imports/api/actions';

/**
 * Todo reducer
 */
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        console.log('no match!');
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
}

/**
 * Todos reducer
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return state.map(t => {
        return todo(t, action);
      });
    default:
      return state;
  }
}

export default todos;
