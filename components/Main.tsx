"use client";
import React, { PropsWithChildren } from "react";
import ComboCart from "./ComboCart";

type MainProps = {} & PropsWithChildren;
const Main = ({ children }: MainProps) => {
  return (
    <div className="flex w-full gap-2 min-h-screen p-8 pb-20  relative sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
};

export default Main;
