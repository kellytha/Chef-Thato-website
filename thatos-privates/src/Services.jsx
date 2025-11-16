import Catering from "../public/Catering.JPG";
import Intimate from "../public/Intimate dinner for two.JPG";
import Weekly from "../public/Weekly.JPG";
import "../src/Services.css"
import { Link } from "react-router-dom";


function Services() {
  return (
    <>
      <h1>Our Services</h1>
      <p>
        Tailored culinary solutions for every occasion — from intimate dinners
        to large-scale events.
      </p>

      <div className="services-container">
        
        {/* Catering */}
        <div className="service-card">
          <img src={Catering} alt="Catering" className="service-image" />
          <h2>Family Style Gatherings</h2>
          <p>
            Enjoy a relaxed and delicious meal with friends and family. A
            selection of dishes served family-style — perfect for warm, casual
            get-togethers.
          </p>
          <h3>From R500</h3>
          <Link to='/book' ><button>Contact Me For More</button></Link>
        </div>

        {/* Intimate Dinner */}
        <div className="service-card">
          <img src={Intimate} alt="Dinner for two" className="service-image" />
          <h2>Intimate Dinner For Two</h2>
          <p>
            A romantic multi-course dining experience prepared and served in your
            home. Ideal for anniversaries or special celebrations.
          </p>
          <h3>From R1680</h3>
          <Link to='/book' ><button>Contact Me For More</button></Link>
        </div>

        {/* Weekly Meal Prep */}
        <div className="service-card">
          <img src={Weekly} alt="Weekly meal prep" className="service-image" />
          <h2>Weekly Meal Prep</h2>
          <p>
            Save time and eat healthy with customised weekly meal prep. Nutritious,
            delicious meals tailored to your dietary needs — delivered to your door.
          </p>
          <h3>From R640</h3>
          <Link to='/book' ><button>Contact Me For More</button></Link>
        </div>

      </div>
    </>
  );
}

export default Services;
