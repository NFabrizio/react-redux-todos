/**
 * Visibility filter reducer
 *
 * Function to specify how the set visibility filter actions changed the state
 * of the app.
 *
 * @parent /imports/api/reducers/index.js
 *
 * @export visibilityFilter - Default. Export of the visibilityFilter reducer.
 */

 // Import actions and Redux method
 import { SET_VISIBILITY_FILTER, VisibilityFilters } from '/imports/api/actions';

 // Set up a constant for use as the defualt state of the filter
 const { SHOW_ALL } = VisibilityFilters;

 /**
  * Visibility filters reducer
  *
  * Runs a switch case on the action type. If the type is SET_VISIBILITY_FILTER,
  * it returns the action filter. Otherwise, it returns the current Redux state.
  *
  * @see switch()
  *
  * @return Either the action filter string or the Redux state.
  */
 const visibilityFilter = (state = SHOW_ALL, action) => {
   switch (action.type) {
     case SET_VISIBILITY_FILTER:
       return action.filter;
     default:
       return state;
   }
 }

 export default visibilityFilter;
