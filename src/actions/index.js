import axios from "axios";

// import { FETCH_RECIPES } from "./types";

const FETCH_RECIPES = () => dispatch => {
  // import { APIKey } from "../APIKey";
  const allCategories = ["Beef", "Chicken", "Dessert", "Vegan", "Vegetarian"];

  const allCategoriesResult = [];
  console.log("ac", allCategories);
  // eslint-disable-next-line array-callback-return
  allCategories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        allCategoriesResult.push(...response.data.meals);
      })
      .then(() => {
        console.log("a", allCategoriesResult);
        dispatch({
          type: "FETCH RECIPES",
          payload: allCategoriesResult
        });
      });
  });
};

// export const fetchMovies = text => dispatch => {
//   axios
//     .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_MOVIES,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
// };

// export const fetchRecipe = id => dispatch => {
//   axios
//     // .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
//     .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then(response =>
//       dispatch({
//         type: FETCH_RECIPE,
//         payload: response.data
//       })
//     )
//     .catch(err => console.log(err));
// };

// export const setLoading = () => {
//   return {
//     type: LOADING
//   };
// };
export { FETCH_RECIPES };
