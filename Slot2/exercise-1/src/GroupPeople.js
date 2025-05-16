
function GroupPeople() {
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
    acc[key].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, persons], index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {persons.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong> - {p.age} tuổi
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupPeople;
