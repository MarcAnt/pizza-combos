"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  decrement,
  increment,
  setCountCombo,
} from "@/lib/features/combos/combosSlice";

const Quantities = () => {
  // const [counter, setCounter] = useState(1);

  const [inputClicked, setInputClicked] = useState(false);
  const counter = useAppSelector((state) => state.combo.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        type="button"
        className="bg-white shadow-button outline outline-primary outline-1  py-2 px-3 rounded-md text-gray-600 font-bold text-xs"
        onClick={() => {
          if (counter > 1) {
            // setCounter((prev) => prev - 1);
            setInputClicked(false);
            dispatch(decrement());
          }
        }}
        tabIndex={0}
      >
        -
      </button>
      <button
        type="button"
        className="shadow-button outline outline-primary outline-1 bg-white py-2 px-3 rounded-md text-gray-600 font-bold text-xs"
        onClick={() => {
          if (counter <= 100) {
            // setCounter((prev) => prev + 1);
            dispatch(increment());
            setInputClicked(false);
          }
        }}
        tabIndex={0}
      >
        +
      </button>

      <input
        aria-label="show-quantities"
        onClick={() => {
          setInputClicked(true);
        }}
        onBlur={() => {
          setInputClicked(false);
        }}
        type="number"
        inputMode="numeric"
        max={100}
        min={1}
        step={1}
        tabIndex={0}
        className={
          inputClicked
            ? "w-10 text-center outline-none rounded-md py-1"
            : "bg-transparent w-10 text-center outline-none"
        }
        onChange={({ target }) => {
          if (target.valueAsNumber <= 100 && target.valueAsNumber > 0) {
            // setCounter(target.valueAsNumber);
            dispatch(setCountCombo(target.valueAsNumber));
          }
        }}
        value={counter}
      />
    </>
  );
};

export default Quantities;
