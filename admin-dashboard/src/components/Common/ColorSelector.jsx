import React from "react";

const ColorSelector = ({ selectedColors, setSelectedColors }) => {
  const availableColors = [
    "#FF0000", // red
    "#00FF00", // green
    "#0000FF", // blue
    "#FFFF00", // yellow
    "#FFA500", // orange
    "#800080", // purple
    "#000000", // black
    "#FFFFFF", // white
  ];

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((prev) => prev.filter((c) => c !== color));
    } else {
      setSelectedColors((prev) => [...prev, color]);
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label className="text-sm font-medium">Colors</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {availableColors.map((color) => (
          <button
            key={color}
            type="button"
            className={`w-8 h-8 rounded-full border-2 transition duration-200 ${
              selectedColors.includes(color)
                ? "border-black scale-110"
                : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => toggleColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
