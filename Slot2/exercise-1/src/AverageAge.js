
function AverageAge() {
  const people = [
    { name: "Nguyen Van A", age: 25, occupation: "Engineer" },
    { name: "Tran Thi B", age: 30, occupation: "Teacher" },
    { name: "Le Van C", age: 22, occupation: "Designer" },
    { name: "Pham Thi D", age: 24, occupation: "Engineer" },
    { name: "Vo Van E", age: 28, occupation: "Designer" },
    { name: "Dang Thi F", age: 26, occupation: "Teacher" },
  ];


  const grouped = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person.age);
    return acc;
  }, {});


  const averages = Object.entries(grouped).map(([occupation, ages]) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    const avg = (total / ages.length).toFixed(2);
    return { occupation, avgAge: avg };
  });

  return (
    <div>
      <h2>Tuổi trung bình mỗi nghề</h2>
      <ul>
        {averages.map((item, index) => (
          <li key={index}>
            <strong>{item.occupation}</strong>: {item.avgAge} tuổi trung bình
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAge;
