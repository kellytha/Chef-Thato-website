import { Link } from "react-router-dom";
import "../src/Header.css";

function Header() {
  return (
    <header>
      <h1>Chef Thato</h1>

      {/* Book Now button that actually routes */}
      <Link to="/book" className="book">
        Book Now
      </Link>
    </header>
  );
}

export default Header;
