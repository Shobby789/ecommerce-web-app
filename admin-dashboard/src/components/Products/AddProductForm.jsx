import { useState } from "react";
import DropdownField from "../Common/DropdownField";
import ImageInput from "../Common/ImageInput";
import TextareaField from "../Common/TextareaField";
import TextField from "../Common/TextField";
import ColorSelector from "../Common/ColorSelector";
import SizeSelector from "../Common/SizeSelector";

const AddProductForm = () => {
  const [data, setData] = useState({
    title: "",
    stockStatus: "",
    price: 0,
    availableQuantity: "",
    category: "",
    description: "",
  });
  const [images, setImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 p-10">
        <TextField
          labelTitle={"Title"}
          inputType={"text"}
          name={"title"}
          value={data.title}
          onChange={handleOnChange}
        />
        <TextField
          labelTitle={"Stock Status"}
          inputType={"text"}
          name={"stockStatus"}
          value={data.stockStatus}
          onChange={handleOnChange}
        />
        <TextField
          labelTitle={"Price"}
          inputType={"number"}
          name={"price"}
          value={data.price}
          onChange={handleOnChange}
        />
        <TextField
          labelTitle={"Available Quantity"}
          inputType={"text"}
          name={"availableQuantity"}
          value={data.availableQuantity}
          onChange={handleOnChange}
        />
        <DropdownField
          labelTitle={"Category"}
          options={["Men", "Women", "Kids"]}
          name={"category"}
          value={data.category}
          onChange={handleOnChange}
        />
        <ImageInput images={images} setImages={setImages} />
        <TextareaField
          labelTitle={`Description`}
          name={"description"}
          value={data.description}
          onChange={handleOnChange}
        />
        <ColorSelector
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
        <SizeSelector selectedSizes={sizes} setSelectedSizes={setSizes} />
      </div>
      <div className="w-full px-10 pb-10 flex items-center gap-4">
        <button type="submit" className="black-btn">
          Cancel
        </button>
        <button type="submit" className="black-btn">
          Save Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
