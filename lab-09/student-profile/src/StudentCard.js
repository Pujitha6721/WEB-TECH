import React from 'react';
import './StudentProfile.css';

const StudentCard = ({ student }) => {
  const { name, department, marks, year, section, rollNumber, email } = student;
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar">
          <span className="initials">{initials}</span>
        </div>
        <h2>{name}</h2>
        <p className="roll-number">Roll No: {rollNumber}</p>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <span className="label">Department:</span>
          <span className="value">{department}</span>
        </div>
        <div className="detail-item">
          <span className="label">Marks:</span>
          <span className="value">{marks}</span>
        </div>
        <div className="detail-item">
          <span className="label">Year:</span>
          <span className="value">{year}rd Year</span>
        </div>
        <div className="detail-item">
          <span className="label">Section:</span>
          <span className="value">{section}</span>
        </div>
        <div className="detail-item">
          <span className="label">Email:</span>
          <span className="value">{email}</span>
        </div>
      </div>

      <div className="profile-footer">
        <p>🎓 {name} is excelling in {department}</p>
      </div>
    </div>
  );
};

export default StudentCard;
