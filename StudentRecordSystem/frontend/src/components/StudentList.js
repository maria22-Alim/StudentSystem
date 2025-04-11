import React from "react";

const StudentList = ({ students }) => {
  const defaultStudents = [
    { name: "Alim, Maria Theresa F", course: "BSIT" },
    { name: "Aquino, Zywren Vhiel ", course: "BSIT" },
    { name: "Lanzar, Stephen Louise ", course: "BSIT" },
    { name: "Viñas, Francis ", course: "BSIT" },
    { name: "Babon, Hazel Joy", course: "BSIT"},
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}> 
        {(students.length === 0 ? defaultStudents : students).map((student, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
            <strong>{student.name}</strong> - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;