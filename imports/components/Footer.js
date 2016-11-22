/**
 * Footer component
 *
 * Component that renders the footer links to filter what is shown in the todos list.
 *
 * @parents /imports/components/App.js
 *
 * @export Footer - Default. Export of the filter links to display at the bottom of the todo list.
 */

// Import required dependencies
import React from 'react';
import FilterLink from '/imports/containers/FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
