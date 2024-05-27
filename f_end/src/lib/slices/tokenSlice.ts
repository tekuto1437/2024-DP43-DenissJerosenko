import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value: null } as { value: string | null },
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
