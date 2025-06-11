// SortPeople.js
function SortPeople() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 30, occupation: "Teacher" },
    { name: "Le Van C", age: 22, occupation: "Designer" },
    { name: "Pham Thi D", age: 24, occupation: "Engineer" },
    { name: "Vo Van E", age: 28, occupation: "Designer" },
  ];


  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age; 
  });

  return (
    <div>
      <h2>Sắp xếp theo nghề và tuổi</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            <strong>Tên:</strong> {person.name} | <strong>Tuổi:</strong> {person.age} | <strong>Nghề:</strong> {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;
