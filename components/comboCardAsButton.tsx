import React, { ComponentType } from "react";

type ComponentProps = {
  onClick?: () => void;
};

function comboCardAsButton<T extends object>(Component: ComponentType<T>) {
  return (props: T & ComponentProps) => {
    const { onClick } = props;

    return (
      <>
        <div className="flex gap-1">
          <button type="button" title="Crear combo" onClick={onClick}>
            <Component {...props} />
          </button>
        </div>
      </>
    );
  };
}

export default comboCardAsButton;
