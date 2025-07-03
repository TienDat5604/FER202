import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();  // Điều hướng sau khi cập nhật

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        } else {
          console.error(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    };

    fetchPost(); // Lấy dữ liệu bài viết cần chỉnh sửa
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      content,
    };

    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
      if (response.status === 200) {
        setStatus("Bài viết đã được cập nhật!");
        setTitle("");  // Clear input fields
        setContent("");
        navigate("/");  // Quay lại trang danh sách bài viết sau khi cập nhật
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
      console.error("Lỗi khi cập nhật bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Cập nhật bài viết</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default EditPost; 