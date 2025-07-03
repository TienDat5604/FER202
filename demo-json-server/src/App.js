import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PostListWithCRUD from "./components/PostListWithCRUD";
import PostListBootstrap from "./components/PostListBootstrap";
import CreatePost from "./components/CreatePost";
import CreatePostBootstrap from "./components/CreatePostBootstrap";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import Login from "./components/Login";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy loading example
const LazyPostList = React.lazy(() => import('./components/PostListAxios'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Trang chủ là trang login */}
          <Route path="/" element={<Login />} />
          
          {/* Các route cũ */}
          <Route path="/old" element={<PostListWithCRUD />} />
          <Route path="/create-old" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
          
          {/* Các route mới sử dụng Bootstrap */}
          <Route path="/posts" element={<PostListBootstrap />} />
          <Route path="/create" element={<CreatePostBootstrap />} />
          
          {/* Ví dụ về Lazy loading */}
          <Route path="/lazy" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyPostList />
            </React.Suspense>
          } />
          
          {/* Redirect cho các URL không hợp lệ */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
