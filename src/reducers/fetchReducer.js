import { FETCH_RECIPES, FETCH_RECIPE, LOADING } from "../actions/types";

const initialState = {
  // text: "",
  recipes: [],
  loading: false,
  recipe: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case SEARCH_MOVIE:
    //   return {
    //     ...state,
    //     text: action.payload,
    //     loading: false
    //   };
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };
    case FETCH_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
