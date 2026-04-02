import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API CALL - Runs ONCE on mount (empty dependency array)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch 10 GitHub users
        const response = await fetch(
          'https://api.github.com/users?per_page=10'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // EMPTY ARRAY = Run ONCE on mount

  // LOADING STATE - Conditional Rendering
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  // ERROR STATE - Conditional Rendering
  if (error) {
    return (
      <div className="error">
        <h2>❌ Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          🔄 Retry
        </button>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h1>👥 GitHub Users</h1>
      <p className="subtitle">Fetched from GitHub API</p>
      
      {/* LIST RENDERING with map() + unique keys */}
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img 
              src={user.avatar_url} 
              alt={user.login}
              className="user-avatar"
            />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
      
      <div className="stats">
        Total Users: <strong>{users.length}</strong>
      </div>
    </div>
  );
};

export default UserList;