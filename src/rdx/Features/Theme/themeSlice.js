import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    darkTheme: false,
}

export const themeSlicer = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            if (state.darkTheme === false) {
                state.darkTheme = true;
            } else {
                state.darkTheme = false;
            }
            console.log(state);
        },
        startTheme: (state) => {
            const date = new Date();
            const hour = date.getHours();
            if (hour < 6 || hour > 20) {
                state.darkTheme = true;
            }
        }
    },
});

export const {
    changeTheme,
    startTheme,
} = themeSlicer.actions;

export default themeSlicer.reducer;