import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserInit {
    user: string;
}

const initialState: IUserInit = {
    user: 'user',
}

const AdminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeUserType(state, action: PayloadAction<string>) {
            state.user = action.payload;
        }
    }
});

export const { changeUserType } = AdminSlice.actions;
export default AdminSlice.reducer;