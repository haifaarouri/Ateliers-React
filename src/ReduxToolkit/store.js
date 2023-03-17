import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";
import counterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";
import storage from 'redux-persist/lib/storage'
import cartSlice from './slices/cartSlice'
let configPersist = {
    key:'root',
    storage
}
const reducers = combineReducers({
    counter:counterSlice,
    products:productSlice,
    cart:cartSlice
})
const persistor = persistReducer(configPersist,reducers)
export default configureStore({reducer:persistor,middleware:[thunk,logger]});