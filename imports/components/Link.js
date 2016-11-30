/**
 * Link component
 *
 * Component that renders the actual a tags in the footer for filtering the todos list.
 *
 * @parent /imports/containers/FooterLink.js
 *
 * @export Footer - Default. Export of the filter links to display at the bottom
 *                  of the todo list.
 */

// Import required dependencies
import React, { PropTypes } from 'react';

/**
 * Link presentational component
 *
 * @param {Boolean} $active - Boolean representing whether the footer link should
 *                            be active. Defined in FooterLink.js.
 * @param {Array} $children - Children defined in components/Footer.js inside
 *                            the FilterLink element.
 * @param {Function} $onClick - Callback to invoke when link is clicked. Defined
 *                              in FooterLink.js.
 *
 * @return The HTML a tag element representing the filter link in the footer.
 */
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>
  }

  return(
    <a href="#"
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      { children }
    </a>
  )
};

// Define the propTypes for each parameter passed to the Link component
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
