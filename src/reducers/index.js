
import { combineReducers } from "redux";
import searchResult from './reducer_APIcall'
import filters from './reducer_filter'


const rootReducer = combineReducers({

  searchResult: searchResult,
  filters: filters

});


export default rootReducer;
