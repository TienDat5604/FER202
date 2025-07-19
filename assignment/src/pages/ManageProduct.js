import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct } from '../api';
import './ManageProduct.css';

function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      setError("Unable to load products");
    }
  };

  const handleEdit = (id) => {
    navigate(`/products/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        loadProducts(); // Reload the product list
      } catch (err) {
        setError("Unable to delete product");
      }
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Manage Products</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="table-responsive">
        <Table striped bordered hover className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Current Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td className="description-cell">{product.description}</td>
                <td className="price-cell">{product.price} đ</td>
                <td className="price-cell">{product.currentPrice} đ</td>
                <td className="action-cell">
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleDelete(product.id)}
                    className="action-button delete-btn"
                  >
                    Delete
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => handleEdit(product.id)}
                    className="action-button edit-btn"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default ManageProduct; 