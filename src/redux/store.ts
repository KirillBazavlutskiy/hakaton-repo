import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";

import languageReducer from './Slices/LanguageSlice';
import userReducer from './Slices/AdminSlice';

const rootReducer = combineReducers({
    language: languageReducer,
    status: userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
