/**
 * Action reducers
 *
 * Functions to specify how the actions changed the state of the app.
 *
 * @parent /imports/api/reducers/index.js
 *
 * @export todos - Default. Export of the todos reducer.
 */

// Import actions
import { ADD_TODO, TOGGLE_TODO } from '/imports/api/actions';

/**
 * Todo state mutation handler
 *
 * Handles the ADD_TODO and TOGGLE_TODO actions. For ADD_TODO, creates a new todo
 * object using the id and text provided by the todo action creator and sets the
 * completed field to false. For TOGGLE_TODO, checks to make sure there is matching
 * state id for the action id passed in. If not, an error is logged along with
 * returning the existing state. If there is a matching id, a new state object
 * is created using the existing state and changing the completed field value to
 * the opposite of what it is in the current state.
 *
 * @see switch()
 * @see Object.assign()
 *
 * @param {Object} $state - The current Redux state of the application.
 * @param {Object} $action - The action object created in the action creator.
 *
 * @return {Object} - Object resresenting the change to the Redux state.
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
 *
 * Runs a switch case based on the action type. For ADD_TODO, it returns the
 * current state split into an array with the spread operator, and adds the new
 * todo by calling the todo function, passing the action to it and then
 * appending it to the end of the array. For TOGGLE_TODO, it maps through the
 * state array and for each todo, calls the todo function and passes it the todo
 * and the action and returns the updated value, which is the new state with the
 * completed field updated appropriately. If neither case is met, the current
 * state is returned.
 *
 * @see todo()
 *
 * @param {Array} $state - The Redux state of the application.
 * @param {Object} $action - The action created that should be applied to the state.
 *
 * @return {Array} - The new Redux state after the action has been applied to it.
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
