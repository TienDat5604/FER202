
function OldestYoungest() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 30, occupation: "Teacher" },
    { name: "Le Van C", age: 22, occupation: "Designer" },
    { name: "Pham Thi D", age: 24, occupation: "Engineer" },
    { name: "Vo Van E", age: 28, occupation: "Designer" },
    { name: "Dang Thi F", age: 19, occupation: "Intern" },
  ];

  const oldest = people.reduce((max, person) => (person.age > max.age ? person : max), people[0]);
  const youngest = people.reduce((min, person) => (person.age < min.age ? person : min), people[0]);

  return (
    <div>
      <h2> Find Oldest and Youngest</h2>
      <p><strong>Người lớn tuổi nhất:</strong> {oldest.name} - {oldest.age} tuổi ({oldest.occupation})</p>
      <p><strong>Người nhỏ tuổi nhất:</strong> {youngest.name} - {youngest.age} tuổi ({youngest.occupation})</p>
    </div>
  );
}

export default OldestYoungest;
