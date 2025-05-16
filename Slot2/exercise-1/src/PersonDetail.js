function PersonDetail() {
  const person = {
    name: "Nguyen Van A",
    age: 25,
    occupation: "Software Engineer",
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p><strong>Tên:</strong> {person.name}</p>
      <p><strong>Tuổi:</strong> {person.age}</p>
      <p><strong>Nghề nghiệp:</strong> {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;