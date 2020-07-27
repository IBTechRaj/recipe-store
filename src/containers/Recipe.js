import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FETCH_RECIPE, setLoading } from "../actions";
import Spinner from "../components/Spinner";

function Recipe({ location, fetchRecipe, recipe }) {
  useEffect(() => {
    fetchRecipe(location.state.idMeal);
    // return clearData();
    // eslint-disable-next-line
  }, [fetchRecipe]);

  return Object.entries(recipe).length === 0 ? (
    <div>
      <Spinner />{" "}
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-6 card card-body">
          <img src={recipe.strMealThumb} alt="" />
        </div>
        <div className="col-md-6 ">
          <h1 className="mb-4 text-center">{recipe.strMeal}</h1>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            <li className="item">
              {recipe.strIngredient1} : {recipe.strMeasure1}
            </li>
            <li className="item">
              {recipe.strIngredient2} : {recipe.strMeasure2}
            </li>
            <li className="item">
              {recipe.strIngredient3} : {recipe.strMeasure3}
            </li>
            <li className="item">
              {recipe.strIngredient4} : {recipe.strMeasure4}
            </li>
            <li className="item">
              {recipe.strIngredient5} : {recipe.strMeasure5}
            </li>
            <li className="item">
              {recipe.strIngredient6} : {recipe.strMeasure6}
            </li>
            <li className="item">
              {recipe.strIngredient7} : {recipe.strMeasure7}
            </li>
            <li className="item">
              {recipe.strIngredient8} : {recipe.strMeasure8}
            </li>
            <li className="item">
              {recipe.strIngredient9} : {recipe.strMeasure9}
            </li>
          </ul>
          <h2 className="instructions">Instructions</h2>
          <p className="instruction text-justify">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired
};
const mapStateToProps = state => ({
  loading: state.recipes.loading,
  recipe: state.recipes.recipe
});

export const mapDispatchToProps = dispatch => ({
  fetchRecipe: id => dispatch(FETCH_RECIPE(id)),
  setLoading: dispatch(setLoading())
  // clearData: () => dispatch(CLEAR_DATA())
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
