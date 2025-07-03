import React, { useState, useEffect } from "react";
import axios from "axios";

const PostListAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sử dụng useEffect để thực hiện tác vụ fetching khi component mount
  useEffect(() => {
    // Định nghĩa hàm async để thực hiện fetching dữ liệu
    const fetchData = async () => {
      try {
        // Gửi yêu cầu GET với axios và chờ kết quả
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);  // Lưu dữ liệu vào state từ phản hồi
        setLoading(false);  // Đánh dấu việc tải xong
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();  // Gọi hàm fetchData khi component mount
  }, []);  // Chạy 1 lần khi component được mount

  if (loading) {
    return <div>Đang tải...</div>;  // Hiển thị thông báo đang tải
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListAxios; 