import React, { Component } from "react";
import { Link } from "react-router-dom";

export class RecipeCard extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={recipe.strMealThumb}
            alt="Recipe Cover"
          />
          <h5 className="text-light card-title">{recipe.strMeal}</h5>
          <Link className="btn btn-primary" to={"/recipe/" + recipe.idMeal}>
            Recipe Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
// - {movie.Year}
