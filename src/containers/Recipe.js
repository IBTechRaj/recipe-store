import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import { FETCH_RECIPE, setLoading } from "../actions";

import Spinner from "../components/Spinner";

function Recipe({ location, fetchRecipe, recipe }) {
  useEffect(() => {
    fetchRecipe(location.state.idMeal);
    // return clearData();
    // eslint-disable-next-line
  }, [fetchRecipe]);

  return Object.entries(recipe).length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="food-item">
      <div className="show-item">
        <img className="meal-img" src={recipe.strMealThumb} alt="" />
        <p className="meal-name">{recipe.strMeal}</p>
      </div>

      <div className="info">
        <h2 className="title">Ingredients Used</h2>
        {
          <ul className="ingredients">
            <li className="item">{recipe.strIngredient1}</li>
            {/* <li className="item">{food.strIngredient2}</li>
          <li className="item">{food.strIngredient3}</li>
          <li className="item">{food.strIngredient4}</li>
          <li className="item">{food.strIngredient5}</li>
          <li className="item">{food.strIngredient6}</li>
          <li className="item">{food.strIngredient7}</li>
          <li className="item">{food.strIngredient8}</li> */}
          </ul>
        }
        <h2 className="instructions">Instructions</h2>
        <p className="instruction">{recipe.strInstructions}</p>
        {console.log("recipe", recipe.meals)}
      </div>
    </div>
  );
}

//   render() {
//     const { loading, recipe } = this.props;
//     console.log("o", this.props.match.params.id);
//     const recipeInfo = (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 card card-body">
//             <img src={recipe.strMealThumb} className="thumbnail" alt="Poster" />
//           </div>
//           <div className="col-md-6">
//             <h2 className="mb-4 mt-4">{recipe.strMeal}</h2>
//             <h2 className="mb-4 mt-4">{recipe.strCategory}</h2>
//             <h3>Ingredients</h3>
//             <ul className="ingredients">
//               <li className="item">
//                 {recipe.strIngredient1} : {recipe.strMeasure1}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient2} : {recipe.strMeasure2}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient3} : {recipe.strMeasure3}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient4} : {recipe.strMeasure4}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient5} : {recipe.strMeasure5}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient6} : {recipe.strMeasure6}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient7} : {recipe.strMeasure7}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient8} : {recipe.strMeasure8}
//               </li>
//               <li className="item">
//                 {recipe.strIngredient9} : {recipe.strMeasure9}
//               </li>
//             </ul>
//             <h2 className="instructions">Instructions</h2>
//             <p className="instruction">{recipe.strInstructions}</p>
//           </div>
//         </div>
//       </div>
//     );

//     const content = loading ? <Spinner /> : recipeInfo;
//     // let content = recipeInfo;
//     return <div>{content}</div>;
//   }
// }

// Recipe.propTypes = {
//   recipe: PropTypes.object.isRequired,
//   fetchRecipe: PropTypes.func.isRequired,
//   match: PropTypes.number.isRequired,
//   loading: PropTypes.string.isRequired,
//   strMealThumb: PropTypes.string.isRequired,
//   strMeal: PropTypes.string.isRequired,
//   strCategory: PropTypes.string.isRequired,
//   strIngredient1: PropTypes.string.isRequired,
//   strMeasure1: PropTypes.string.isRequired,
//   strIngredient2: PropTypes.string.isRequired,
//   strMeasure2: PropTypes.string.isRequired,
//   strIngredient3: PropTypes.string.isRequired,
//   strMeasure3: PropTypes.string.isRequired,
//   strIngredient4: PropTypes.string.isRequired,
//   strMeasure4: PropTypes.string.isRequired,
//   strIngredient5: PropTypes.string.isRequired,
//   strMeasure5: PropTypes.string.isRequired,
//   strIngredient6: PropTypes.string.isRequired,
//   strMeasure6: PropTypes.string.isRequired,
//   strIngredient7: PropTypes.string.isRequired,
//   strMeasure7: PropTypes.string.isRequired,
//   strIngredient8: PropTypes.string.isRequired,
//   strMeasure8: PropTypes.string.isRequired,
//   strIngredient9: PropTypes.string.isRequired,
//   strMeasure9: PropTypes.string.isRequired,
//   strInstructions: PropTypes.string.isRequired
// };

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