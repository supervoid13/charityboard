import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice.js';

export const store = configureStore({
    reducer: {
        app: appSlice, 
    },
})

