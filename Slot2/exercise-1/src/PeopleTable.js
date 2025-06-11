
function PeopleTable() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 30, occupation: "Teacher" },
    { name: "Le Van C", age: 22, occupation: "Designer" },
  ];

  return (
    <div>
      <h2>Bảng thông tin người</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
