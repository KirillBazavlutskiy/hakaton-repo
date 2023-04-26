import {UserRole} from "@/models/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserStatus {
    user: UserRole;
}

const initialState: UserStatus = {
    user: 'Guest',
}

const UserStatusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        changeUserStatus(state, action: PayloadAction<UserRole>) {
            state.user = action.payload;
        }
    }
});

export const { changeUserStatus } = UserStatusSlice.actions;
export default UserStatusSlice.reducer;
