import { SET_SEARCH_RESULTS } from "../constants/action-types";

export function setSearchResults (results){
  console.log('this is firing')
  return {
    type: 'SET_SEARCH_RESULTS',
    results
  };
}

export const sortBy = (sorter) => ({
  type: 'SORT_BY',
  sorter
});
