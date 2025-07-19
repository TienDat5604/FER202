import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../api";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="loader">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <h2>{product.name}</h2>
      </div>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={`/Images/${product.image}`} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">
            <span className="product-detail-original-price">{product.price} đ</span>
            <span className="product-detail-current-price">{product.currentPrice} đ</span>
          </div>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
