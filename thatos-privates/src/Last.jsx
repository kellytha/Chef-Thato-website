import "./Last.css";
import Wild from "../public/Wld mushroom.jpg"


function Last() {
  return (
    <section className="last-section">
      <div className="text-content">
        <h1>Let's Plan Your Perfect Meal</h1>
        <p>
          Reach out to discuss your event dietary needs and culinary desires. We are ready to create an unforgettable experience for you and your guests.
        </p>
        <p>Email us: <a href="mailto:andileamese@gmail.com">andileamese@gmail.com</a></p>
        <p>Follow us on Instagram: <a href="https://instagram.com/culinarycreationsby_thato" target="_blank" rel="noopener noreferrer">@culinarycreationsby_thato</a></p>
        <p>Message on WhatsApp: <a href="https://wa.me/27763230410" target="_blank" rel="noopener noreferrer">076 323 0410</a></p>
      </div>

      <div className="image-container">
        <img
          src={ Wild}
          alt="Wild Mushroom Risotto"
          className="last-image"
        />
      </div>
    </section>
  );
}

export default Last;
