import React, { ComponentType } from "react";

type ComponentProps = {
  handleOnClicEdit?: () => void;
  handleOnClickDuplicate?: () => void;
};

function withActonButtons<T extends object>(Component: ComponentType<T>) {
  return (props: T & ComponentProps) => {
    const { handleOnClicEdit, handleOnClickDuplicate } = props;

    return (
      <>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 my-1">
            <button
              type="button"
              onClick={handleOnClicEdit}
              className="shadow-button outline outline-primary outline-1 bg-white py-2 px-3 rounded-md text-gray-600 font-bold text-xs"
              tabIndex={0}
            >
              Editar
            </button>
            <button
              type="button"
              onClick={handleOnClickDuplicate}
              className="shadow-button bg-price outline outline-primary outline-1 py-2 px-3 rounded-md font-bold text-white text-xs"
              tabIndex={0}
            >
              Duplicar
            </button>
          </div>
          <Component {...props} />
        </div>
      </>
    );
  };
}

export default withActonButtons;
