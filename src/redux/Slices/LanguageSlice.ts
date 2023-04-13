import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type language = 'en' | 'ua';
interface IState {
    language: language;
}

const initialState: IState = {
    language: "en",
}

const languageSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<language>) {
            state.language = action.payload;
        }
    },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;