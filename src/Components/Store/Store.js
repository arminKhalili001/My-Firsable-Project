import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "./AuthSlice";
import cartReducer from "./CartSlice";
import SetTransform from './Transforms'

const reducers = combineReducers({
    cart: cartReducer
})

const persistConfige = {
    key: 'cart',
    storage:storage,
    
}
const persistReducers = persistReducer(persistConfige, reducers)


const store = configureStore({
    reducer: {
        persistReducers,
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],

})

export default store;