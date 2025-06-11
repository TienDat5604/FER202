import React from "react";

const averageAge = (...ages) => {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2);
};

const Exercise4 = () => {
  const avg = averageAge(50, 40, 19, 22, 16);
  return <p>Average Age: {avg}</p>;
};

export default Exercise4;
