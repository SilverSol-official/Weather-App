import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    cities: ['kharkiv'],
}


export const citySlicer = createSlice({
    name: 'favouriteCities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.cities = JSON.parse(localStorage.favCities);
            if (!state.cities.includes(action.payload.city)) {
                state.cities.unshift(action.payload.city);
            }
            localStorage.favCities = JSON.stringify(state.cities);
        },
        removeCity: (state, action) => {
            state.cities = JSON.parse(localStorage.favCities);
            state.cities = [...state.cities.slice(0, state.cities.indexOf(action.payload.city)), ...state.cities.slice((state.cities.indexOf(action.payload.city) + 1))];
            console.log(state.cities);
            localStorage.favCities = JSON.stringify(state.cities);
        },
        startCity: (state) => {
            state.cities = JSON.parse(localStorage.favCities);
        }
    },
});

export const {
    addCity,
    removeCity,
    startCity,
} = citySlicer.actions;

export default citySlicer.reducer;