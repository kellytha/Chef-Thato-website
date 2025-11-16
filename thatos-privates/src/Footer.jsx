import { Link } from "react-router-dom";
import "../src/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>Chef Thato</h3>
        <p>Bringing culinary excellence to your table with personalized dining experiences.</p>
      </div>

      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/book">Contact & Booking</Link></li>
        </ul>
      </div>
      <div className="footer-section about">
        <h3>Services</h3>
          <ul>
            <li>Private Dining</li>
            <li>Event Catering</li>
            <li>Cooking Classes</li>
            <li>Menu Consultation</li>
          </ul>
        
      </div>

      <div className="footer-section connect">
        <h4>Connect</h4>
        <p>WhatsApp: <a href="https://wa.me/27763230410" target="_blank" rel="noopener noreferrer">076 323 0410</a></p>
        <p>Email: <a href="mailto:andileamese@gmail.com">andileamese@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/culinarycreationsby_thato" target="_blank" rel="noopener noreferrer">@culinarycreationsby_thato</a></p>
      </div>

      <small>© {new Date().getFullYear()} All Rights Reserved</small>

    </footer>
  );
}

export default Footer;
