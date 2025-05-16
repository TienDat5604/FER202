
function PeopleList() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 30, occupation: "Teacher" },
    { name: "Le Van C", age: 22, occupation: "Designer" },
  ];

  return (
    <div>
      <h2>Danh sách người</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>Tên:</strong> {person.name} | <strong>Tuổi:</strong> {person.age} | <strong>Nghề nghiệp:</strong> {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
