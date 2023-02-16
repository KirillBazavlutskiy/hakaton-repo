import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import counterReducer from './Slices/CounterSlice'
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
        }
    })
    return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });