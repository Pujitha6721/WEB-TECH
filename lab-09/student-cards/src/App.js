import React from 'react';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  // Multiple Students Data (Parent holds data)
  const students = [
    {
      id: 1,
      name: "Pujitha Reddy",
      department: "Computer Science",
      marks: 92,
      grade: "A+"
    },
    {
      id: 2,
      name: "Rahul Kumar", 
      department: "Electronics",
      marks: 87,
      grade: "A"
    },
    {
      id: 3,
      name: "Priya Sharma",
      department: "Mechanical",
      marks: 78,
      grade: "B+"
    },
    {
      id: 4,
      name: "Arjun Patel",
      department: "Computer Science",
      marks: 95,
      grade: "A++"
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>🎓 Student Dashboard</h1>
        <p>{students.length} Students | Top Performers</p>
      </div>
      
      {/* REUSABLE COMPONENTS - Pass props to each */}
      <div className="students-grid">
        {students.map(student => (
          <StudentCard
            key={student.id}  // Unique key for list
            name={student.name}
            department={student.department}
            marks={student.marks}
            grade={student.grade}
          />
        ))}
      </div>
    </div>
  );
}

export default App;