import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class RecipeCard extends Component {
  render() {
    const { recipe } = this.props;
    // console.log("recipeCard props", recipe);
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100 mx-auto">
          <img
            className="w-100 mb-2"
            src={recipe.strMealThumb}
            alt="Recipe Cover"
          />
          <h5 className="text-light card-title">{recipe.strMeal}</h5>
          {/* <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}> */}
          <Link
            className="btn btn-primary"
            key={recipe.idMeal}
            to={{ pathname: `/recipe/${recipe.idMeal}`, state: recipe }}
          >
            Recipe Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired
};

export default RecipeCard;
// - {movie.Year}
