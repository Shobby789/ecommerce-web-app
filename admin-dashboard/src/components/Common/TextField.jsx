import React from "react";

const TextField = ({ labelTitle, inputType, value, name, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor={labelTitle} className="text-sm font-medium">
        {labelTitle}
      </label>
      <input
        type={inputType}
        name={name}
        id={labelTitle}
        value={value}
        onChange={onChange}
        className="border w-full p-2.5 rounded-lg text-sm secondary-text outline-none"
      />
    </div>
  );
};

export default TextField;
