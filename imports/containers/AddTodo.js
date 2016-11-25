/**
 * Add todo container
 *
 * Container component that handles creating todo list items. In reality, this
 * component is a hybrid container-presentational component since it handles both
 * the dispatching of the action and the presentation of the UI elements.
 *
 * @parents /imports/components/App.js
 *
 * @export AddTodo - Default. Export of the add todo form.
 */

// Import required dependencies
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '/imports/api/actions';

/**
 * Add todo hybrid component
 *
 * Input form that allows creation of todo list items. Renders an input element
 * and a submit button for adding todos. The form includes an onSubmit action that
 * stops the default behavior of refreshing the window, then checks the input value
 * to make sure it is trimmed and, finally, dispatches the addTodo action, passing
 * in the input value and resets the input value to blank.
 *
 * @see preventDefault()
 * @see trim()
 * @see dispatch()
 * @see addTodo()
 *
 * @param {Function} $dispatch - Redux store method for intiating an action to
 *                               update the Redux state.
 */
let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

/**
 * Create the AddTodo container component
 *
 * Uses the React Redux connect function to dispatch the addTodo action from the UI
 * so that the state can be updated with the new todo list items. Since this
 * component is not affected by state, there is no need to pass in
 * mapStateToProps. There is also no need to pass in a separate function for
 * mapDispatchToProps as the dispatch can be easily set inside the presentational
 * portion of the component.
 *
 * @see connect()
 */
AddTodo = connect()(AddTodo);

export default AddTodo;
