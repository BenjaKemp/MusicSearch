
import { combineReducers } from "redux";
import searchResult from './reducer_APIcall'


const rootReducer = combineReducers({

  searchResult: searchResult

});


export default rootReducer;
