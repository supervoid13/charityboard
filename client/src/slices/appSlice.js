import { createSlice } from "@reduxjs/toolkit";
import AuthService from '../services/auth.js';
export const appSlice = createSlice({
    name: 'app',
    
    initialState: {
        isLoggedIn: false,
        user: {},
    },
    reducers: {
        setAuth: (state, action) => {
            state.isLoggedIn = true;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            try {
                const response = AuthService.login(action.payload.email, action.payload.password);
                localStorage.setItem("token", response.data.token);
                state.isLoggedIn = true;
                state.user = response.data.user;
            } catch (err) {
                console.log(err);
            }
        },
    },
})

export default appSlice.reducer;
export const { setAuth, login, setUser } = appSlice.actions;