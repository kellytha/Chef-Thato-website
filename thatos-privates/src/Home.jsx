import { Link } from "react-router-dom";
import "./Home.css";
import Grilled from "../public/Grilled salmon.jpg"

function Home() {
  return (
    <>
      <h1>Culinary Artistry, Your Private Experience</h1>

      <p>
        Chef Thato crafts bespoke dining events that transform your home into an exclusive restaurant,
        focusing on seasonal ingredients and personalized menus.
      </p>

      <Link to="/book">
        <button>Book Your Experience</button>
      </Link>

      <Link to="/services">
        <button>Explore Services</button>
      </Link>
      <br />

      <div>
        <img
          src={ Grilled }
          alt="Grilled salmon with asparagus"
          className="image"
        />
        <p className="legend">Grilled Salmon with Asparagus</p>
      </div>

      <p>
        “My philosophy is simple: to honor the integrity of each ingredient and create dishes that
        are both beautiful to the eye and unforgettable to the palate.” — Chef Thato
      </p>
    </>
  );
}

export default Home;
