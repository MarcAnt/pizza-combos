import { useEffect, useState } from "react";

const useCopyPaste = () => {
  const [pizzaOrder, setPizzaOrder] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const placeOrder = (order: string) => {
    setPizzaOrder(order);
  };

  useEffect(() => {
    (async function () {
      try {
        await navigator.clipboard.writeText(pizzaOrder);

        setIsCopied(true);
      } catch (error) {
        console.error("Unable to copy to clipboard:", error);
        setIsCopied(false);
      }
    })();
  }, [pizzaOrder]);

  return { pizzaOrder, placeOrder, isCopied };
};

export default useCopyPaste;
