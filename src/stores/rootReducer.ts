import { combineReducers } from "@reduxjs/toolkit";
import MBTIReducer from "./mbti/mbti";
import TrendReducer from "./trend/trend";

const reducer = combineReducers({ MBTIReducer, TrendReducer });

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
