import { CancelIcon } from "@/app/icons/CancelIcon";
import React, { PropsWithChildren } from "react";
import TicketPrice from "./TicketPrice";

type ComboCardProps = {
  quantity?: number;
  extras?: string[];
  isSelectedToPay?: boolean;
  isSelectedToDisplay?: boolean;
  customClassName?: string | undefined;
  showImageBackground?: boolean;
  price?: number;
  showPrice?: boolean;
} & PropsWithChildren;

export const ComboCard = ({
  extras,
  quantity,
  isSelectedToPay,
  isSelectedToDisplay = true,
  children,
  customClassName = "",
  showImageBackground,

  price,
  showPrice = true,
}: ComboCardProps) => {
  return (
    <div
      className={`comboCard ${
        showImageBackground ? "addImage" : ""
      } min-h-[150px] min-w-36 rounded-lg relative ${
        isSelectedToPay ? "bg-selectedCard" : "bg-white"
      } transition ease-in-out hover:translate-y-1 hover:shadow-card p-2 flex ${customClassName}`}
    >
      {isSelectedToPay ? (
        <button type="button" title="Quitar" className="absolute right-2 top-2">
          <CancelIcon className="text-gray-600 h-4 w-4 " />
        </button>
      ) : null}
      {isSelectedToDisplay ? (
        <div className="flex flex-col justify-end gap-1">
          <div className="text-gray-600 text-xs font-bold">
            Cantidad: <span className="text-primary">{quantity}</span>
          </div>
          <div className="text-gray-600 text-[0.65rem] font-bold flex flex-col">
            Extras:
            {extras?.map((extra) => {
              return (
                <span key={extra} className="text-primary block">
                  {extra}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}

      {children}
      {showPrice && (
        <TicketPrice
          price={price}
          className="bg-price min-w-10 min-h-10 w-[50px] h-[50px] absolute z-10 -right-[25px] -bottom-[25px] rotate-[25deg]"
        />
      )}
    </div>
  );
};
