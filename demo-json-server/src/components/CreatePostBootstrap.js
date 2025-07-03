import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const CreatePostBootstrap = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    
    // Kiểm tra form có hợp lệ không
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const newPost = {
        title,
        content,
      };

      await axios.post("http://localhost:3000/posts", newPost);
      
      setSuccess("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      setValidated(false);
      
      // Chờ 1.5 giây trước khi chuyển hướng
      setTimeout(() => {
        navigate("/posts");
      }, 1500);
    } catch (err) {
      setError("Có lỗi xảy ra khi tạo bài viết: " + err.message);
    }
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header as="h2" className="bg-primary text-white">
          Tạo bài viết mới
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postTitle">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nhập tiêu đề bài viết"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tiêu đề bài viết
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="postContent">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                placeholder="Nhập nội dung bài viết"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập nội dung bài viết
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={() => navigate("/posts")}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Tạo bài viết
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

CreatePostBootstrap.propTypes = {
  onPostCreated: PropTypes.func
};

export default CreatePostBootstrap; 