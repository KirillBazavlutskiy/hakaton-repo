import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {TypedUseSelectorHook, useSelector} from "react-redux";

import languageReducer from './Slices/LanguageSlice'

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            language: languageReducer,
        }
    })
    return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });