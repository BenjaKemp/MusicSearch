import { SET_SEARCH_RESULTS, SORT_BY } from "../constants/action-types";

export function setSearchResults (results){
  return {
    type: SET_SEARCH_RESULTS,
    results
  };
}

export const sortBy = (sorter) => ({
  type: SORT_BY,
  sorter
});
