function CourseCard({ course, duration }) {
  return (
    <div>
      <h3>Course: {course}</h3>
      <p>Duration: {duration}</p>
      <hr />
    </div>
  );
}

export default CourseCard;
