import React, { useState, useEffect } from "react";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/posts")  // API GET Posts
      .then((response) => response.json())  // Chuyển dữ liệu về dạng JSON
      .then((data) => {
        setData(data);  // Lưu dữ liệu vào state
        setLoading(false);  // Đánh dấu việc tải xong
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
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

export default PostList; 