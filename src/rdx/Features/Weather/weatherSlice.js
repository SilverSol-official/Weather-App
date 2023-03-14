import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function (city = 'Kharkiv', {
        rejectWithValue
    }) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=b286e981ec3e548cd8a4d987628524d4`;
        try {
            const responce = await fetch(url);
            if (!responce.ok) {
                throw new Error('error');
            }
            const data = await responce.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }


    }
);
export const fetchForecast = createAsyncThunk(
    'weather/fetchForecast',
    async function (city = 'Kharkiv', {
        rejectWithValue
    }) {
        // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=b62d57689dbf49c6a96175709231403`;
        const url = `http://api.weatherapi.com/v1/forecast.json?key=b62d57689dbf49c6a96175709231403&q=${city}&days=10&aqi=no&alerts=no`
        try {
            const responce = await fetch(url);
            if (!responce.ok) {
                throw new Error('error');
            }
            const data = await responce.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }


    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const initialState = {
    weatherInfo: [],
    status: 'loading',
    error: null,
    city: 'London',
    forecastInfo: [],
    forecastStatus: 'loading',
    forecastError: null,
    popUpModal: 0,
}


export const weatherSlicer = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
            console.log('pending');
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.weatherInfo = action.payload;
            console.log('state w info', state.weatherInfo);
        },
        [fetchWeather.rejected]: setError,
        [fetchForecast.pending]: (state) => {
            state.forecastStatus = 'loading';
            state.forecastError = null;
            console.log('pending');
        },
        [fetchForecast.fulfilled]: (state, action) => {
            state.forecastStatus = 'resolved';
            state.forecastInfo = action.payload;
            console.log('state f info', state.forecastInfo);
        },
        [fetchForecast.rejected]: setError,
    }
});

// export const { setPopUpModal } = weatherSlicer.actions;

export default weatherSlicer.reducer;