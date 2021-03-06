import axios from 'axios';
import categories from './allCategories';

const FETCH_RECIPES = () => dispatch => {
  const categoriesResult = [];

  // eslint-disable-next-line
  categories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        categoriesResult.push(...res.data.meals);
      })
      .then(() => {
        dispatch({
          type: 'FETCH RECIPES',
          payload: categoriesResult,
        });
      });
  });
};

const FILTER_RECIPES = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: 'FILTER BY CATEGORY',
    payload: data,
  });
};

const FETCH_RECIPE = id => dispatch => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: 'FETCH RECIPE',
      payload: response.data.meals[0],
    }));
};

export const setLoading = () => ({
  type: 'LOADING',
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

export {
  FETCH_RECIPES, FILTER_RECIPES, FETCH_RECIPE, changeFilter,
};
