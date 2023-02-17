import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type language = 'EN' | 'UA';
interface IState {
    language: language;
}

const initialState: IState = {
    language: "EN",
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