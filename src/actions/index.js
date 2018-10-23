import { SET_SEARCH_RESULTS, SORT_BY, FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILURE } from "../constants/action-types";
import fetch from 'cross-fetch'

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

export const fetchSongs = (searchTerm) =>  {
  return dispatch => {
    return fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSongsSuccess(json));
        return json.songs;
      })
      .catch(error => console.log(error));
  };
}


export const fetchSongsSuccess = songs => ({
  type: FETCH_SONGS_SUCCESS,
  payload: { songs }
});

export const fetchSongsError = error => ({
  type: FETCH_SONGS_FAILURE,
  payload: { error }
});
