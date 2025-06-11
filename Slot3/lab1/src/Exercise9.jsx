import React from "react";

const employees = [
  { id: 1, name: "Anna", age: 50 },
  { id: 2, name: "Brian", age: 40 },
  { id: 3, name: "Clara", age: 19 },
  { name: "Ann", age: 22 },
  { name: "Elisabeth", age: 16 },
];

const Exercise9 = () => {
  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return <p>Is there any teenager? {isTeenager ? "True" : "False"}</p>;
};

export default Exercise9;
