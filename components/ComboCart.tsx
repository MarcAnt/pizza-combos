"use client";

import React, { PropsWithChildren } from "react";
import TicketPrice from "./TicketPrice";

type ComboCartProps = { title?: string } & PropsWithChildren;

const ComboCart = ({ title = "Pedidos" }: ComboCartProps) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <span className="text-sm font-semibold">{title}</span>
        <TicketPrice className="bg-price  min-w-10 min-h-10 w-[50px] h-[50px] rotate-[25deg]" />
      </div>
    </>
  );
};

export default ComboCart;
