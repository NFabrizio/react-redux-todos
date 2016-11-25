/**
 * Filter link container
 *
 * Container component that handles data flow and redux state changes for footer link elements.
 *
 * @parents /imports/components/Footer.js
 *
 * @export FilterLink - Default. Export of the links inside the footer.
 */

// Import required dependencies
import { connect } from 'react-redux';
import { setVisibilityFilter } from '/imports/api/actions';
import Link from '/imports/components/Link';

/**
 * Map state to props function
 *
 * Function that tells how to transform the current Redux store state into the
 * props that should be passed to the presenatational components. This function is
 * used to determine if the ownProps filter matches the state
 * visibilityFilter. If these two filters match, the filter link should be active
 * since it is displaying the results for that filter.
 *
 * @param {Object} $state - Redux state object passed in from the Provider component.
 * @param {Object} $ownProps - Properties set on the FooterLink element when called.
 * @param {String} $ownProps.filter - Visibilty filter selected by the user.
 *
 * @return {Object} $active - Boolean value that determines if the link is active or not.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

/**
 * Map dispatch to props function
 *
 * Function that returns the onClick method. The onClick method will be injected
 * as a prop into the presentational component and will trigger the dispatching
 * of the setVisibilityFilter action. This method will fire the
 * setVisibilityFilter action and dispatch it so that the redux state object
 * will be updated with the new filter selected by the user in the UI.
 *
 * @see dispatch()
 * @see setVisibilityFilter()
 *
 * @param {Function} $dispatch - Redux store method for intiating an action to
 *                               update the Redux state.
 * @param {Object} $ownProps - Properties set on the FooterLink element when called.
 * @param {String} $ownProps.filter - Visibilty filter selected by the user.
 *
 * @return {Function} $onClick - Connects the UI to the action and allows it to
 *                               be fired when a user clicks a link.
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
  };
};

/**
 * Create the FilterLink container components
 *
 * Uses the React Redux connect function to pass in the functions defined above
 * so that the state can be converted into the props needed and the actions can
 * be dispatched from the presentational component. These functions will be passed
 * in and connected to the Link presentational component.
 *
 * @see connect()
 */
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
