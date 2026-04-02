import React from 'react';
import './StudentProfile.css';

// Student data stored as JavaScript variables (JSX expressions)
const StudentProfile = () => {
  // Student Details - Dynamic Data Binding with {}
  const student = {
    name: "Pujitha koduru",
    department: "Computer Science",
    year: 3,
    section: "A",
    rollNumber: "23bce20090",
    email: "pujitha@gmail.com"
  };

  return (
    <div className="profile-container">
      {/* JSX: HTML + JavaScript Expressions */}
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            <span className="initials">PR</span>
          </div>
          <h1>{student.name}</h1> {/* Dynamic JSX Binding */}
          <p className="roll-number">Roll No: {student.rollNumber}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="label">Department:</span>
            <span className="value">{student.department}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Year:</span>
            <span className="value">{student.year}rd Year</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Section:</span>
            <span className="value">{student.section}</span>
          </div>
          
          <div className="detail-item">
            <span className="label">Email:</span>
            <span className="value">{student.email}</span>
          </div>
        </div>

        <div className="profile-footer">
          <p>🌟 Excellence in {student.department}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile; // Export for App.js