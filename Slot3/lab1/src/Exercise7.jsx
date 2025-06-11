import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR" },
  { id: 2, name: "Brian", department: "IT" },
  { id: 3, name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" },
];

const Exercise7 = () => {
  const sortedEmployees = [...employees].sort((a, b) => {
    const depCompare = (a.department || "").localeCompare(b.department || "");
    if (depCompare !== 0) return depCompare;
    return (a.name || "").localeCompare(b.name || "");
  });

  return (
    <ul>
      {sortedEmployees.map((emp, index) => (
        <li key={emp.id || index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
};

export default Exercise7;
