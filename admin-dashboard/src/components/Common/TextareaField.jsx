import React from "react";

const TextareaField = ({ labelTitle, name, value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={labelTitle} className="text-sm font-medium">
        {labelTitle}
      </label>
      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        id={labelTitle}
        className="border w-full p-2.5 rounded-lg text-sm secondary-text outline-none"
      ></textarea>
    </div>
  );
};

export default TextareaField;
