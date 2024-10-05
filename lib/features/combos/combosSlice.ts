import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import { sizes, extras } from "../../../data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extrasName = extras.map((extra) => extra.name);

type CombosSizes = (typeof sizes)[number];
type ExtraNames = (typeof extrasName)[number];

type CombosList = {
  size: CombosSizes;
  extras: ExtraNames;
};

type CombosState = {
  value: number;
  comboList?: CombosList[];
};

const initialState: CombosState = {
  value: 1,
};

export const comboSlice = createSlice({
  name: "comboCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCountCombo: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { decrement, increment, setCountCombo } = comboSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.combo.value;

export default comboSlice.reducer;
