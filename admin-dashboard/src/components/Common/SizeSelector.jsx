import React from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const SizeSelector = ({ selectedSizes, setSelectedSizes }) => {
  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium">Available Sizes</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            type="button"
            key={size}
            onClick={() => toggleSize(size)}
            className={`px-4 py-2.5 rounded border outline-none font-semibold text-xs ${
              selectedSizes.includes(size)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
