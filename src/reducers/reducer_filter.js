import {FETCH_SONGS_FAILURE, SORT_BY } from '../constants/action-types'


const filtersReducerDefaultState = {
sortBy: null,
loading: true,
error: null
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: action.sorter
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
