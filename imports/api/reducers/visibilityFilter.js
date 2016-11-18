/**
 * Visibility filter reducer
 */

 // Import actions and Redux method
 import { SET_VISIBILITY_FILTER, VisibilityFilters } from '/imports/api/actions';

 // Set up a constant for use as the defualt state of the filter
 const { SHOW_ALL } = VisibilityFilters;

 /**
  * Visibility filters reducer
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
