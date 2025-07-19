import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../api";
import "./ProductEdit.css";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setFormData(res.data));
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData);
    navigate(`/products/${id}`);
  };

  if (!formData) return <div className="loading">Loading...</div>;

  return (
    <div className="edit-form-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Original Price</label>
            <input
              id="price"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentPrice">Current Price</label>
            <input
              id="currentPrice"
              name="currentPrice"
              className="form-control"
              value={formData.currentPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input 
            id="image"
            name="image" 
            className="form-control"
            value={formData.image} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => navigate(`/products/${id}`)}>Cancel</button>
          <button type="submit" className="save-button">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;
