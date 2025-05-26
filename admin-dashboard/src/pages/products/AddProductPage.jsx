import React, { useEffect } from "react";
import AddProductForm from "../../components/Products/AddProductForm";

const AddProductPage = () => {
  useEffect(() => {
    document.title = "Products - Add PRoduct";
  }, []);
  return (
    <div className="w-full bg-white rounded-lg border">
      <div className="w-full p-10 border-b">
        <h2 className="page-heading">Add Product</h2>
      </div>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
