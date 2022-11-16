import classNames from "classnames";
import React from "react";

export const Button = ({
  type,
  disabled,
  secondary,
  fullWidth,
  icon,
  children,
  loading,
  handleClick,
  color,
  buttonColor = "defaultGreen",
  additionalClasses = "",
  ...rest
}) => {

  if (type === "medium")
    return (
      <div className={`${fullWidth ? "w-full " : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={classNames(`${fullWidth ? "w-full" : ""
            } px-6 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${disabled ? "cursor-default" : ""
            } ${secondary
              ? `bg-${buttonColor} text-white border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${buttonColor}  text-white active:bg-defaultGreen focus:shadow-outline-defaultGreen`
            } border rounded-xl  focus:outline-none`,'disabled:opacity-25', additionalClasses)}
          {...rest}
        >
          {children}
        </button>
      </div>
    );

    if (type === "iconLeft")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${fullWidth ? "w-full" : ""
            } flex items-center justify-center gap-2 px-4 py-2 text-base font-medium leading-5 text-white transition-colors duration-150 ${disabled ? "cursor-default" : ""
            } ${secondary
              ? `bg-${color} text-defaultGreen active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${color} text-defaultGreen`
            } focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          <div className="ml-4">{icon}</div>
          <span>{children}</span>
        </button>
      </div>
    );
};
