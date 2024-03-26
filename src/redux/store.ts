import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import auth from './Slices/AuthSlice'

const store = configureStore({
    reducer: {
        auth
    }
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;