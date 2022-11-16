import React from "react";
import { Label } from "./Label";

const Textfield = ({
  width,
  errors,
  label,
  id,
  text,
  required = true,
  ...formInput
}) => {
  return (
    <div className="">
      {label && (
        <Label required={required} label={label} id={id} />
      )}

      <input
        id={id}
        name={id}
        {...formInput}
        className={`block rounded-lg border w-full border-gray-300 bg-gray-50 p-2.5 text-${text} text-gray-900`}
      />
      {errors && (
        <div className="m-1 text-sm font-light text-red-500">
          {errors.message}
        </div>
      )}
    </div>
  );
};

export default Textfield;
