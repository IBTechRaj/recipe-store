import React from 'react';
import PropTypes from 'prop-types';
// import "../styles/CategoryFilter.css";

const categories = [
  // "All",
  'Beef',
  'Chicken',
  'Dessert',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
  'Breakfast',
  'Goat',
];

function CategoryFilter({ handleChange }) {
  return (
    <div className="category-filter">
      <span>
        <h5>Choose the Category to view</h5>
      </span>
      <select className="select" onChange={handleChange}>
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
