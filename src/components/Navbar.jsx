import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Student Portal</h1>
      <Link to="/">Home</Link> |{" "}
      <Link to="/students">Students</Link> |{" "}
      <Link to="/courses">Courses</Link> |{" "}
      <Link to="/contact">Contact</Link>
      <hr />
    </nav>
  );
}

export default Navbar;
