import React, { useState } from "react";

const employees = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Brian" },
  { id: 3, name: "Clara" },
  { name: "Ann" },
  { name: "Elisabeth" },
];

const Exercise10 = () => {
  const [search, setSearch] = useState("");

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((emp, idx) => (
          <li key={emp.id || idx}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;
