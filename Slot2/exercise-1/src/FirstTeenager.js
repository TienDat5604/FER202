function FirstTeenager() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 15, occupation: "Student" },
    { name: "Le Van C", age: 30, occupation: "Designer" },
    { name: "Pham Thi D", age: 17, occupation: "Intern" },
  ];


  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Người thiếu niên đầu tiên</h2>
      {firstTeenager ? (
        <p>
          <strong>Tên:</strong> {firstTeenager.name} | <strong>Tuổi:</strong> {firstTeenager.age} | <strong>Nghề:</strong> {firstTeenager.occupation}
        </p>
      ) : (
        <p>Không có ai là thiếu niên.</p>
      )}
    </div>
  );
}

export default FirstTeenager;