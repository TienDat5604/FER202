
function AreAllTeenagers() {
  const people = [
    { name: "Nguyen Van A", age: 15, occupation: "Student" },
    { name: "Tran Thi B", age: 17, occupation: "Student" },
    { name: "Le Van C", age: 18, occupation: "Intern" },
  ];


  const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>Kiểm tra tất cả có phải thiếu niên</h2>
      <p>{allTeenagers ? "Tất cả đều là thiếu niên." : "Không phải tất cả đều là thiếu niên."}</p>
    </div>
  );
}

export default AreAllTeenagers;
