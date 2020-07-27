// import { FETCH_RECIPES, FETCH_RECIPE, LOADING } from '../actions/types';

const initialState = {
  // text: "",
  recipes: [],
  loading: false,
  recipe: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case SEARCH_MOVIE:
    //   return {
    //     ...state,
    //     text: action.payload,
    //     loading: false
    //   };
    case 'FETCH RECIPES':
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case 'FETCH RECIPE':
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    case 'FILTER BY CATEGORY':
      return {
        ...state,
        recipes: action.payload.data.meals, // .data.meals,
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
