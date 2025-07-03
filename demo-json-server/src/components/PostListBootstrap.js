import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const PostListBootstrap = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu: " + err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const confirmDelete = (post) => {
    setPostToDelete(post);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!postToDelete) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${postToDelete.id}`);
      setPosts(posts.filter(post => post.id !== postToDelete.id));
      setShowDeleteModal(false);
      setPostToDelete(null);
    } catch (err) {
      setError("Lỗi khi xóa bài viết: " + err.message);
    }
  };

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p className="mt-2">Đang tải dữ liệu...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container className="my-5">
        <Alert variant="info">
          Không có bài viết nào. <Link to="/create">Tạo bài viết mới</Link>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Danh sách bài viết</h1>
        <Button variant="primary" as={Link} to="/create">
          Tạo bài viết mới
        </Button>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white">
                <div className="d-flex justify-content-end gap-2">
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    as={Link} 
                    to={`/edit/${post.id}`}
                  >
                    Chỉnh sửa
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={() => confirmDelete(post)}
                  >
                    Xóa
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal xác nhận xóa */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa bài viết "{postToDelete?.title}" không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

PostListBootstrap.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

export default PostListBootstrap; 