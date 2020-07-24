import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FETCH_RECIPES } from "../actions";
import RecipeCard from "./RecipeCard";

// const FoodsList = ({
//   foods, fetchRecipies, filterFoodList,
// }) => {
//   useEffect(() => {
//     fetchRecipies();
//   }, [fetchRecipies]);
// export class RecipesContainer extends Component {

const RecipesContainer = ({ recipes, fetchRecipes }) => {
  // function RecipesContainer({ recipes }) {
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);
  // console.log("re", recipes);
  // render() {
  //   const { recipes } = this.props;
  //   console.log("r", recipes);
  //   let content = "";

  // let content =
  // recipes.response === "True"
  // recipes.length > 0
  //   ? recipes.map((recipe, index) => (
  //       <RecipeCard key={index} recipe={recipe} />
  //     ))
  //   : console.log("nothing");

  // <div className="row">
  fetchRecipes();
  return recipes.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="book-list">
      <div className="header">
        <div className="header-title">Meal Recipe Catalogue</div>
        <div className="category-container">
          {/* <CategoryFilter handleChange={handleFilterChange} /> */}
        </div>
      </div>
      <div className="books-container">
        {recipes.map(recipe => (
          <Link
            key={recipe.idMeal}
            to={{ pathname: `/recipe/${recipe.idMeal}`, state: recipe }}
          >
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});
// console.log("mstp", recipes);
// const mapDispatchToProps = dispatch => ({
//   fetchRecipes: () => dispatch(FETCH_RECIPES())
//   filterFoodList: category => dispatch(FILTER_FOODLIST(category)),
// });
const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(FETCH_RECIPES())
  // filterFoodList: category => dispatch(FILTER_FOODLIST(category))
});
export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
