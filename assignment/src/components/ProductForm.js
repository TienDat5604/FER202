import React, { useState } from "react";
import { createProduct } from "../api";
import "./ProductForm.css";

function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "default.png",
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Cập nhật tên file trong formData
      setFormData({ ...formData, image: file.name });
      // Tạo URL xem trước
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Nếu có file được chọn, xử lý upload file
    if (selectedFile) {
      // Trong trường hợp thực tế, bạn sẽ cần một API endpoint để upload file
      // Ví dụ: const uploadResponse = await uploadImage(selectedFile);
      // Và sau đó lấy URL hoặc tên file từ response
      
      // Trong demo này, chúng ta chỉ sử dụng tên file
      console.log("File sẽ được upload:", selectedFile.name);
    }
    
    await createProduct(formData);
    onAdd(); // Reload list
    
    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      currentPrice: "",
      image: "default.png",
    });
    setSelectedFile(null);
    setPreviewUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h3>Thêm sản phẩm</h3>
      <div className="form-group">
        <label htmlFor="name">Tên sản phẩm</label>
        <input
          id="name"
          name="name"
          className="form-control"
          placeholder="Tên sản phẩm"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Mô tả</label>
        <input
          id="description"
          name="description"
          className="form-control"
          placeholder="Mô tả sản phẩm"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Giá gốc</label>
          <input
            id="price"
            name="price"
            className="form-control"
            placeholder="Giá gốc"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentPrice">Giá bán</label>
          <input
            id="currentPrice"
            name="currentPrice"
            className="form-control"
            placeholder="Giá bán"
            value={formData.currentPrice}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="image">Ảnh sản phẩm</label>
        <div className="file-upload-container">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <label htmlFor="image-upload" className="file-upload-label">
            <span className="upload-icon">📁</span>
            <span className="upload-text">
              {selectedFile ? selectedFile.name : "Chọn file ảnh..."}
            </span>
          </label>
          <input
            type="hidden"
            id="image"
            name="image"
            value={formData.image}
          />
        </div>
        {previewUrl && (
          <div className="image-preview">
            <img src={previewUrl} alt="Preview" />
          </div>
        )}
      </div>
      <button type="submit" className="submit-button">Thêm sản phẩm</button>
    </form>
  );
}

export default ProductForm;
