import React from 'react';
import './StudentCard.css';

// RECEIVE PROPS from parent
const StudentCard = ({ name, department, marks, grade }) => {
  // Color based on marks (Props-based logic)
  const getGradeColor = (marks) => {
    if (marks >= 90) return '#4CAF50';      // Green
    if (marks >= 80) return '#2196F3';      // Blue
    if (marks >= 70) return '#FF9800';      // Orange
    return '#f44336';                       // Red
  };

  return (
    <div className="student-card" style={{ borderTopColor: getGradeColor(marks) }}>
      <div className="card-header">
        <div className="avatar">
          <span className="initials">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <h3>{name}</h3> {/* PROPS RENDERING */}
      </div>

      <div className="card-body">
        <div className="detail">
          <span className="label">Department:</span>
          <span className="value">{department}</span> {/* PROPS */}
        </div>
        
        <div className="detail marks">
          <span className="label">Marks:</span>
          <span className="value large">{marks}%</span> {/* PROPS */}
        </div>
        
        <div className="detail">
          <span className="label">Grade:</span>
          <span className="grade-badge">{grade}</span> {/* PROPS */}
        </div>
      </div>

      <div className="card-footer">
        <span className="status">✅ Active Student</span>
      </div>
    </div>
  );
};

export default StudentCard; // Export reusable component