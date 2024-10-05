import { PropsWithChildren } from "react";

type TicketPriceProps = {
  price?: number | string | null;
  className?: string | undefined;
} & PropsWithChildren;

const TicketPrice = ({ price, children, className }: TicketPriceProps) => {
  return (
    <div className="flex">
      <div
        className={`ticketPrice text-center flex items-center justify-center  ${className}`}
      >
        <span className="font-bold text-gray-600 -rotate-[25deg]">
          {price && `$${price}`}
          {children}
        </span>
      </div>
    </div>
  );
};

export default TicketPrice;
