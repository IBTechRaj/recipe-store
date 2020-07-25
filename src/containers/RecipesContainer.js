import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FETCH_RECIPES, FILTER_RECIPES } from '../actions';
import { RecipeCard } from './RecipeCard';
import CategoryFilter from './CategoryFilter';
import Spinner from '../components/Spinner';

const RecipesContainer = ({ recipes, fetchRecipes, filterRecipes }) => {
  useEffect(() => {
    fetchRecipes();
    filterRecipes();
  }, [fetchRecipes, filterRecipes]);

  const handleFilterChange = e => {
    const { value } = e.target;
    console.log('v', value);
    if (value === 'All') {
      fetchRecipes();
    } else {
      filterRecipes(value);
    }
  };
  // fetchRecipes();

  // const filteredRecipes = () =>
  //   value === "All"
  //     ? recipes
  //     : recipes.filter(recipe => recipe.category === value);

  // return
  let content = '';
  content = recipes.length === 0 ? (
      <div>
        <Spinner />
      </div>
  ) : (
      <div className="recipe-list mx-auto">
        <div className="header">
          {/* <div className="header-title">Meal Recipe Catalogue</div> */}
          <div className="category-container">
            <CategoryFilter handleChange={handleFilterChange} />;
          </div>
        </div>
        <div className="container d-md-flex flex-wrap ">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
  );
  return <div className="row ">{content}</div>;
};

RecipesContainer.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  filterRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  loading: state.recipes.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(FETCH_RECIPES()),
  filterRecipes: category => dispatch(FILTER_RECIPES(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
