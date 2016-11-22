/**
 * Index to set up imports and store for app
 *
 * This is the entry point to the app. It sets up the base of all that is needed
 * for the app to work and display properly. The Provider component is a react-redux
 * piece of magic. It makes the store available to all container components in
 * the app without having to explicitly pass it to them.
 *
 * @see createStore()
 * @see Meteor.startup()
 * @see render()
 * @see getElementById()
 */

// Import everything needed to render the app
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '/imports/api/reducers';
import App from '/imports/components/App';

// Create the Redux store while adding a couple of variables for Chrome Redux dev tools
export const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
