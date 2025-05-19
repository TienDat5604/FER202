import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR" },
  { id: 2, name: "Brian", department: "IT" },
  { id: 3, name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" },
];

const Exercise6 = () => {
  const itEmployees = employees.filter((e) => e.department === "IT");

  return (
    <ul>
      {itEmployees.map((emp, index) => (
        <li key={emp.id || index}>{emp.name}</li>
      ))}
    </ul>
  );
};

export default Exercise6;
