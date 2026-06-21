import StudentCard from "../components/StudentCard";

function Students() {
  return (
    <div>
      <StudentCard
        name="Arun"
        department="Computer Science"
        year="Final Year"
      />
      <StudentCard
        name="Priya"
        department="Information Technology"
        year="Third Year"
      />
    </div>
  );
}

export default Students;
