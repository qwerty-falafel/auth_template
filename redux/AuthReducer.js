import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchAuthData = createAsyncThunk("fetchAuthData", async () => {
  const auth_token = await AsyncStorage.getItem("@AuthToken");
  if (!auth_token) {
    throw new Error("Token not found");
  }
  const { data } = await axios.get("<api-endpoint-to-return-user-object>", {
    headers: {
      authorization: auth_token,
    },
  });
  if (data.success) {
    return data.user;
  } else {
    throw new Error("Couldn't find user");
  }
});

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    isLoading: true,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthData.pending, (state) => {
      (state.isLoading = true), (state.isLoggedIn = false);
    });
    builder.addCase(fetchAuthData.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.authData = action.payload),
        (state.isLoggedIn = true);
    });
    builder.addCase(fetchAuthData.rejected, (state) => {
      (state.isLoading = false),
        (state.isError = true),
        (state.isLoggedIn = false);
    });
  },
});

export default AuthSlice.reducer;
