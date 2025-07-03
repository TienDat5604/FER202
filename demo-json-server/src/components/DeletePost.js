import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams();  // Lấy id bài viết từ URL
  const navigate = useNavigate();  // Khởi tạo useNavigate để điều hướng

  // Hàm để xóa bài viết
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      // Chuyển hướng người dùng về trang danh sách bài viết sau khi xóa thành công
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  return (
    <div>
      <h1>Xác nhận xóa bài viết</h1>
      <p>Bạn chắc chắn muốn xóa bài viết này?</p>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={() => navigate("/")}>Hủy</button> {/* Quay lại trang danh sách bài viết */}
    </div>
  );
};

export default DeletePost; 