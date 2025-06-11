import React from "react";

const employees = [
  { id: 1, name: "Anna", department: "HR" },
  { id: 2, name: "Brian", department: "IT" },
  { id: 3, name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" },
];

const Exercise8 = () => {
  // Nhóm theo department
  const grouped = employees.reduce((groups, emp) => {
    const dept = emp.department || "Unknown";
    if (!groups[dept]) groups[dept] = [];
    groups[dept].push(emp);
    return groups;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((emp, idx) => (
              <li key={emp.id || idx}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;
