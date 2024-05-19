import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";
import {createStore} from "redux"
import { applyMiddleware } from "redux";


export const store = configureStore({
    middleware: (applyMiddleware) =>
        applyMiddleware(),
    reducer: rootReducer
})