import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContextState {
  firstPin: any[];
  secondPin: any[];
}

const initialState: ContextState = {
  firstPin: [],
  secondPin: [],
};

const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    setFirstPin: (state, action: PayloadAction<any[]>) => {
      state.firstPin = action.payload;
    },
    setSecondPin: (state, action: PayloadAction<any[]>) => {
      state.secondPin = action.payload;
    },
  },
});

export const { setFirstPin, setSecondPin } = contextSlice.actions;
export default contextSlice;
