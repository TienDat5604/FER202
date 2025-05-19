import React from "react";

const employees = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Brian" },
  { id: 3, name: "Clara" },
  { name: "Ann" },
  { name: "Elisabeth" },
];

const Exercise5 = () => {
  return (
    <select>
      {employees.map((emp, index) => (
        <option key={emp.id || index} value={emp.name}>
          {emp.name}
        </option>
      ))}
    </select>
  );
};

export default Exercise5;
