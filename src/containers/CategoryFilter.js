import React, { useState } from 'react';
import PropTypes from 'prop-types';
import categories from '../actions/allCategories';

// const categories = [
//   'Beef',
//   'Chicken',
//   'Dessert',
//   'Lamb',
//   'Miscellaneous',
//   'Pasta',
//   'Pork',
//   'Seafood',
//   'Side',
//   'Starter',
//   'Vegan',
//   'Vegetarian',
//   'Breakfast',
//   'Goat',
// ];

function CategoryFilter({ handleChange }) {
  // eslint-disable-next-line no-unused-vars
  const [dropDownValue, setDropDownValue] = useState('All');

  return (
    <div className="category-filter">
      <span>
        <h5>Choose the Category to view</h5>
      </span>
      <select
        className="select"
        onChange={e => {
          setDropDownValue(e.target.value);
          handleChange(e.target.value);
        }}
      >
        <option value="All">All</option>
        {categories.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
