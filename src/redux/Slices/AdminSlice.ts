import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type userType = 'user' | 'admin' | 'superadmin'
interface IUserInit {
    user: userType;
}

const initialState: IUserInit = {
    user: 'user',
}

const AdminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        changeUserType(state, action: PayloadAction<userType>) {
            state.user = action.payload;
        }
    }
});

export const { changeUserType } = AdminSlice.actions;
export default AdminSlice.reducer;