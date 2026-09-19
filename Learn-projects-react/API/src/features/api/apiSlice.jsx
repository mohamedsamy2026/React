import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk("feathcApi", async () => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=30.0333&lon=31.2333&appid=bdc36c23828ca70eafb1a14accb000e7&units=metric",
  );

  const temp = Math.round(response.data.main.temp);
  const min = Math.round(response.data.main.temp_min);
  const max = Math.round(response.data.main.temp_max);
  const description = response.data.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  return { temp, min, max, description, icon };
});



export const counterSlice = createSlice({
  name: "API",
  initialState: {
    isLoader: false,
    weather: {},
  },

  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoader = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoader = false;
      });
  },
});


export default counterSlice.reducer;
