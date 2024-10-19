import { Link } from "react-router-dom";
import "../assets/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Quiz App
      </a>

      <ul className="nav-link">

        <Link to="/quiz">
          <li>Quiz</li>
        </Link>

      </ul>
    </nav>
  );
};

export default Navbar;
