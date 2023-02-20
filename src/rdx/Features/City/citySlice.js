import { createSlice } from "@reduxjs/toolkit"; 

const  initialState = {
    cities: [],
}

export const citySlicer = createSlice({
    name: 'favouriteCities',
    initialState,
    reducers: { 
        addCity: (state,action)=>{
            
            if (!state.cities.includes(action.payload.city)){
                state.cities.unshift(action.payload.city);
            }
        },
        removeCity: (state,action)=>{
            state.cities=[...state.cities.slice(0,state.cities.indexOf(action.payload.city)),...state.cities.slice((state.cities.indexOf(action.payload.city)+1))];
        },
        
    },
});

export const { addCity, removeCity } = citySlicer.actions;

export default citySlicer.reducer;


  
 