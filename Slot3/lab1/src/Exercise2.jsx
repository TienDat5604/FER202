import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 },
];

const Exercise2 = () => {
  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={emp.id || index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
};

export default Exercise2;
