import activityStatus from "./activity";
import { getWordList, getSearchList, getEachWord } from "./callApi";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    activityStatus,
    getWordList,
    getSearchList,
    getEachWord
})
export default rootReducer