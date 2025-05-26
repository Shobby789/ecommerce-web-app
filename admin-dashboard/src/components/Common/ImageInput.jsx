import React from "react";
import { IoClose } from "react-icons/io5";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const ImageInput = ({ images, setImages }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const totalImages = images?.length + files?.length;

    if (totalImages > 6) {
      alert("You can upload a maximum of 6 images.");
      return;
    }

    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label htmlFor="productImage" className="text-sm font-medium">
        Images
      </label>
      <label
        htmlFor="productImage"
        className="bg-white text-slate-500 w-full p-2.5 rounded-lg flex items-center justify-start gap-2 cursor-pointer border text-sm"
      >
        <LiaCloudUploadAltSolid className="text-2xl" />
        <span>Upload file</span>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={handleImageChange}
          multiple
          className="hidden"
        />
      </label>

      {/* preview */}
      <div className="w-full flex flex-wrap items-center gap-2 mt-4">
        {images?.map((file, i) => (
          <div
            className="relative w-14 h-16 bg-gray-100 border rounded flex items-center justify-center p-1.5"
            key={i}
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${i}`}
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(i)}
              className="absolute -top-2 -right-2 bg-red-100 p-0.5 rounded-full w-4 h-4"
            >
              <IoClose size={12} className="text-red-500 w-full h-full" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageInput;
