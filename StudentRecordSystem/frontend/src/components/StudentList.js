import React from "react";

const StudentList = ({ students }) => {
  const defaultStudents = [
    { name: "Alim, Maria Theresa F", course: "BSIT" },
    { name: "Aquino, Zywren Vhiel", course: "BSIT" },
    { name: "Lanzar, Stephen Louise", course: "BSIT" },
    { name: "Viñas, Francis", course: "BSIT" },
    { name: "Babon, Hazel Joy", course: "BSIT" },
  ];

  // Use defaultStudents if students is undefined or empty
  const displayStudents = students && students.length > 0 ? students : defaultStudents;

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {displayStudents.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name} — <strong>Course:</strong> {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

