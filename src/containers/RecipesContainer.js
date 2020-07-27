import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FETCH_RECIPES, FILTER_RECIPES, changeFilter } from "../actions";
import { RecipeCard } from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";
// import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const RecipesContainer = ({
  recipes,
  fetchRecipes,
  filterRecipes,
  changeFilter
}) => {
  useEffect(() => {
    fetchRecipes();
    // filterRecipes();
  }, [fetchRecipes]);
  // let val = "";

  //   if (value === "All") {
  //     fetchRecipes();
  //   } else {
  //     filterRecipes(value);
  //   }
  // };

  // };
  // fetchRecipes();

  // const filteredRecipes = () =>
  //   val === "All"
  //     ? recipes
  //     : recipes.filter(recipe => recipe.strCategory === val);

  // return
  // const handleFilterChange = e => {
  //   const { val } = e.target;
  //   console.log("v", val);
  // };

  const handleFilterChange = value =>
    value.toLowerCase() === "all" ? fetchRecipes() : filterRecipes(value);

  let content = "";
  content =
    recipes.length === 0 ? (
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
            // <Link
            //   key={recipe.idMeal}
            //   to={{ pathname: `/recipe/${recipe.idMeal}`, state: recipe }}
            // >
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
            // </Link>
          ))}
        </div>
      </div>
    );
  return <div className="row ">{content}</div>;
};

// RecipesContainer.propTypes = {
//   recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   fetchRecipes: PropTypes.func.isRequired,
//   filterRecipes: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  loading: state.recipes.loading,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(FETCH_RECIPES()),
  changeFilter: val => dispatch(changeFilter(val)),
  filterRecipes: category => dispatch(FILTER_RECIPES(category))
});
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
