import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { IUser } from "../../../models/IUser";
import AuthService from "../../../services/authService";
import { AuthResponse } from "../../../models/response/AuthResponse";
import { API_URL } from "../../../http";

type params = {
    email: string
    password: string
}

export const fetchLogin = createAsyncThunk<AxiosResponse<AuthResponse>, params>('auth/fetchLogin', async (params) => {
    return AuthService.login(params.email, params.password)
})

export const fetchRegister = createAsyncThunk<AxiosResponse<AuthResponse>, params>('auth/fetchRegister', (params) => {
    return AuthService.registration(params.email, params.password)
})

export const fetchLogout = createAsyncThunk<void>('auth/fetchLogout', () => {
    return AuthService.logout()
})

export const checkAuth = createAsyncThunk<AxiosResponse<AuthResponse>>('auth/checkAuth', () => {
    return AuthService.checkAuth()
})

interface authSliceState {
    user: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
}

const initialState: authSliceState = {
    user: null,
    isAuth: false,
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data.user;
                state.isAuth = true;
                localStorage.setItem('token', action.payload.data.accessToken)
            })
            .addCase(fetchLogin.rejected, (state) => {
                state.isLoading = false;
            })


            .addCase(fetchRegister.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data.user;
                state.isAuth = true;
                localStorage.setItem('token', action.payload.data.accessToken);
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.isLoading = false;
            })


            .addCase(fetchLogout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                localStorage.removeItem('token');
                state.isAuth = false;
            })
            .addCase(fetchLogout.rejected, (state) => {
                state.isLoading = false;
            })


            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data.user;
                state.isAuth = true;
                localStorage.setItem('token', action.payload.data.accessToken);
                console.log(action.payload.data)
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export default authSlice.reducer;