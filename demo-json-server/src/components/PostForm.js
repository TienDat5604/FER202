import React, { useState } from 'react';
import axios from 'axios';

function PostForm({ onPostAdded, editingPost, onPostUpdated, onCancelEdit }) {
  const [title, setTitle] = useState(editingPost ? editingPost.title : '');
  const [content, setContent] = useState(editingPost ? editingPost.content : '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    try {
      if (editingPost) {
        // Update existing post
        await axios.put(`http://localhost:3000/posts/${editingPost.id}`, {
          id: editingPost.id,
          title,
          content
        });
        
        onPostUpdated({
          id: editingPost.id,
          title,
          content
        });
      } else {
        // Create new post
        const response = await axios.post('http://localhost:3000/posts', {
          title,
          content
        });
        
        onPostAdded(response.data);
      }
      
      // Reset form
      setTitle('');
      setContent('');
      setError('');
    } catch (err) {
      setError('Error saving post. Make sure json-server is running.');
      console.error(err);
    }
  };

  return (
    <div className="post-form">
      <h3>{editingPost ? 'Edit Post' : 'Add New Post'}</h3>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            rows="5"
          />
        </div>
        
        <div className="form-actions">
          {editingPost && (
            <button 
              type="button" 
              className="cancel-button"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}
          <button type="submit" className="submit-button">
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm; 