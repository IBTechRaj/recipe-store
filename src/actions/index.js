import axios from "axios";

const FETCH_RECIPES = () => dispatch => {
  const allCategories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat"
  ];
  const allCategoriesResult = [];

  // eslint-disable-next-line
  allCategories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        allCategoriesResult.push(...res.data.meals);
      })
      .then(() => {
        console.log("a", allCategoriesResult.length);
        dispatch({
          type: "FETCH RECIPES",
          payload: allCategoriesResult
        });
      });
  });
};

const FILTER_RECIPES = category => async dispatch => {
  console.log("cat", category);
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  // .then(
  //   res => {
  //     console.log("res", res);
  dispatch({
    type: "FILTER BY CATEGORY",
    payload: data
  });
  //   },
  //   error => {
  //     console.log("err", error);
  //   }
  // );
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

const FETCH_RECIPE = id => dispatch => {
  axios
    // .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response =>
      dispatch({
        type: "FETCH RECIPE",
        payload: response.data.meals[0]
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => ({
  type: "LOADING"
});

const changeFilter = filter => ({
  type: "CHANGE_FILTER",
  filter
});

// export default ;
export { FETCH_RECIPES, FILTER_RECIPES, FETCH_RECIPE, changeFilter };
