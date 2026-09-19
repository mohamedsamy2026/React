import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk("feathcApi", async () => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=30.0333&lon=31.2333&appid=bdc36c23828ca70eafb1a14accb000e7&units=metric",
    // {
    //   signal: control.signal,
    // },
  );

  const temp = Math.round(response.data.main.temp);
  const min = Math.round(response.data.main.temp_min);
  const max = Math.round(response.data.main.temp_max);
  const description = response.data.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
});

export const counterSlice = createSlice({
  name: "API",
  initialState: {
    result: "Start",
    isLoader: false,
  },
  reducers: {
    apiFeatch: (state, action) => {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoader = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoader = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoader = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { apiFeatch } = counterSlice.actions;

export default counterSlice.reducer;
