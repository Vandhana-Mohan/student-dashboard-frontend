import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/"> <h2>Student App</h2> </Link>
      <ul>
        <Link to="/students">
          <li>Students</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
