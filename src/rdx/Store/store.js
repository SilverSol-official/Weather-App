import {  configureStore } from "@reduxjs/toolkit";
import themeSlicer from '../Features/Theme/themeSlice';
import weatherSlicer from '../Features/Weather/weatherSlice';
export const store = configureStore({
    reducer: {
        theme: themeSlicer,
        weather: weatherSlicer,
    },
})


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = store.dispatch;