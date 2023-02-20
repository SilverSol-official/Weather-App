import {createSlice} from '@reduxjs/toolkit';

const  initialState = {
    darkTheme: false,
}

export const themeSlicer = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            if (state.darkTheme === false){
                state.darkTheme = true;
            }else{
                state.darkTheme = false;
            }
        }
    },
});

export const { changeTheme } = themeSlicer.actions;

export default themeSlicer.reducer;