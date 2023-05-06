import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./authSlice"
import activationSlice from './activationSlice';
import modalSlice from './modalSlice';
import modeSlice from './modeSlice';





export const store = configureStore({
    reducer : {
        auth : authSlice,
        activation : activationSlice,
        toggle : modalSlice,
        mode : modeSlice
    }
})

