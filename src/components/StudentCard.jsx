function StudentCard({ name, department, year }) {
  return (
    <div>
      <h3>Student Name: {name}</h3>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <hr />
    </div>
  );
}

export default StudentCard;