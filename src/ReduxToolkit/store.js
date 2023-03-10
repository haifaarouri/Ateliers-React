import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import counterSlice from "./slices/counterSlice";

const reducers = combineReducers({
    counter:counterSlice
})

export default configureStore({reducer:reducers,middleware:[logger]});