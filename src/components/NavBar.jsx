import { Link } from "react-router-dom";
import "../css/Navbar.css";
import ShinyText from "./ShinyText";
import GlitchText from "./GlitchText";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <ShinyText
            text="Movie App"
            disabled={false}
            speed={2}
            className="custom-class"
          />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Fav" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
