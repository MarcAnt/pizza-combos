import React, { ComponentType } from "react";

type ComponentProps = {
  handleChangeCombo?: () => void;
  handleAddCombo?: () => void;
  title: string;
};

function withComboActions<T extends object>(Component: ComponentType<T>) {
  return (props: T & ComponentProps) => {
    const { handleChangeCombo, handleAddCombo, title } = props;

    return (
      <>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-center font-bold text-gray-600">
            {title}
          </span>
          <Component {...props} />
          <div className="flex flex-col  items-center gap-3 my-2">
            <button
              type="button"
              onClick={handleChangeCombo}
              className="shadow-button outline outline-primary outline-1 bg-white py-2 px-3 rounded-md text-gray-600 font-bold text-xs"
              tabIndex={0}
            >
              Cambiar combo
            </button>
            <button
              type="button"
              onClick={handleAddCombo}
              className="shadow-button outline outline-primary  outline-1 bg-white  py-2 px-3 rounded-md font-bold text-gray-600 text-xs"
              tabIndex={0}
            >
              Agregar combo
            </button>
          </div>
        </div>
      </>
    );
  };
}

export default withComboActions;
