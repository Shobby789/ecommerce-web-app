const DropdownField = ({ labelTitle, options, name, value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={labelTitle} className="text-sm font-medium">
        {labelTitle}
      </label>
      <select
        name={name}
        value={value}
        id={labelTitle}
        onChange={onChange}
        className="border w-full p-3 rounded-lg text-sm secondary-text outline-none"
      >
        <option defaultValue={""}>Choose a category</option>
        {options?.length > 1 &&
          options?.map((opt, i) => {
            return (
              <option value={opt} key={i}>
                {opt}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default DropdownField;
