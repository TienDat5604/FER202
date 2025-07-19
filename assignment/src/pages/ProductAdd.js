import React from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import "./ProductAdd.css";

function ProductAdd() {
  const navigate = useNavigate();

  const handleProductAdded = () => {
    navigate("/");
  };

  return (
    <div className="add-product-container">
      <ProductForm onAdd={handleProductAdded} />
    </div>
  );
}

export default ProductAdd;
