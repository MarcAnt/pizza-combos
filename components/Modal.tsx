import { CancelIcon } from "@/app/icons/CancelIcon";
import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren & {
  open: boolean;
  closeOutside?: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose, closeOutside = false }: Props) => {
  useEffect(() => {
    const closeFromKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOutside) {
        onClose();
      }
    };

    document.addEventListener("keydown", (e) => closeFromKey(e));

    return () => {
      document.removeEventListener("keydown", closeFromKey);
    };
  }, [onClose, closeOutside]);

  return (
    <>
      {open
        ? createPortal(
            <>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (closeOutside) onClose();
                }}
                className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-white/30 flex justify-center items-center overflow-hidden"
              ></div>
              <div className="modal shadow-card absolute z-50 top-[200px] bg-white w-[400px] h-[400px] rounded-lg flex items-center justify-center transform translate-y-4 ease-in-out">
                <button
                  title="Close"
                  type="button"
                  className="absolute top-2 right-3"
                  onClick={onClose}
                >
                  <CancelIcon />
                </button>
                <div className="flex justify-center items-center">
                  {children}
                </div>
              </div>
            </>,

            document.body
          )
        : null}
    </>
  );
};

export default Modal;
