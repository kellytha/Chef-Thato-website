import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "../src/Book.css";

function Book() {
  return (
    <div className="book-page">

      {/* Contact Methods */}
      <div className="card">
        <h1>Get in Touch</h1>
        <p>
          Ready to create an unforgettable culinary experience? Let’s discuss your vision 
          and bring it to life. Choose your preferred way to connect with us.
        </p>

        <div className="contact-block">
          <h2><FaWhatsapp className="icon"/> WhatsApp</h2>
          <p>Quick responses for urgent bookings and immediate questions.</p>
          <p className="contact-detail">076 323 0410</p>
          <a href="https://wa.me/27763230410" target="_blank" rel="noopener noreferrer">
            <button>Message</button>
          </a>
        </div>

        <div className="contact-block">
          <h2><FaInstagram className="icon"/> Instagram</h2>
          <p>Follow our culinary journey and see behind-the-scenes content.</p>
          <p className="contact-detail">@culinarycreationsby_thato</p>
          <a href="https://instagram.com/culinarycreationsby_thato" target="_blank" rel="noopener noreferrer">
            <button>Follow Us</button>
          </a>
        </div>

        <div className="contact-block">
          <h2><FaEnvelope className="icon"/> Email</h2>
          <p>Send detailed inquiries and event-planning messages.</p>
          <p className="contact-detail">andileamese@gmail.com</p>
          <a href="mailto:andileamese@gmail.com">
            <button>Send Email</button>
          </a>
        </div>

        <div className="contact-block">
          <h2><FaPhone className="icon"/> Phone</h2>
          <p>Direct consultation for complex events and catering needs.</p>
          <p className="contact-detail">076 323 0410</p>
        </div>
      </div>

      {/* Business Information */}
      <div className="card">
        <h1>Business Information</h1>

        <h2>Availability</h2>
        <ul>
          <li>Monday – Friday: 09:00 AM – 08:00 PM</li>
          <li>Saturday: 08:00 AM – 10:00 PM</li>
          <li>Sunday: 10:00 AM – 06:00 PM</li>
        </ul>
        <p className="note">*Event services available outside regular hours.</p>

        <h2>Service Area</h2>
        <ul>
          <li>Johannesburg</li>
          <li>Pretoria</li>
        </ul>
        <p className="note">*Extended travel available for special events.</p>

        <h2>Booking Notice</h2>
        <ul>
          <li>Private Dining: 48 hours minimum</li>
          <li>Small Events: 1 week minimum</li>
          <li>Large Catering: 2–4 weeks minimum</li>
        </ul>
        <p className="note">Rush bookings may be available with additional fees.</p>
      </div>

      {/* Planning Your Event */}
      <div className="card">
        <h1>Planning Your Event?</h1>
        <p>To help us provide you with the most accurate quote and recommendations, please consider the following details when reaching out:</p>

        <h3>Event Details</h3>
        <ul>
          <li>Date and time of your event</li>
          <li>Number of guests</li>
          <li>Type of occasion</li>
          <li>Venue of the event</li>
        </ul>

        <h3>Culinary Preferences</h3>
        <ul>
          <li>Cuisine style preferences</li>
          <li>Dietary restrictions or allergies</li>
          <li>Service style (plated, buffet, family-style)</li>
          <li>Budget range</li>
        </ul>

        <h3>Additional Services</h3>
        <ul>
          <li>Equipment and setup needs</li>
          <li>Service staff requirements</li>
          <li>Special request or themes</li>
        </ul>

        <p className="note">The more details you provide, the better we can tailor our services to your needs.</p>
      </div>

      {/* FAQs */}
      <div className="card">
        <h1>Frequently Asked Questions</h1>
        <p>Quick answers to common questions about our services</p>

        <h3>What's included in your private chef service?</h3>
        <p>Our service includes menu planning, grocery shopping, cooking, plating, and cleanup. We handle everything from start to finish.</p>

        <h3>How far in advance should I book?</h3>
        <p>We recommend booking at least 48 hours in advance for private dining, and 2–4 weeks for large events.</p>

        <h3>Do you accommodate dietary restrictions?</h3>
        <p>Absolutely! We create menus for all dietary needs including vegetarian, vegan, gluten-free, and specific allergies.</p>

        <h3>What's your cancellation policy?</h3>
        <p>Full refunds for cancellations made 48+ hours in advance. Cancellations within 24 hours may incur a service fee.</p>
      </div>

      {/* CTA at bottom */}
      <div className="card">
        <h1>Ready to Start Planning?</h1>
        <p>Don't wait to create your perfect culinary experience. Reach out today and let's begin crafting something extraordinary.</p>
        <a href="https://wa.me/27763230410" target="_blank" rel="noopener noreferrer">
          <button>Message</button>
        </a>
        <a href="mailto:andileamese@gmail.com">
          <button>Send Email</button>
        </a>
      </div>
      <div className="back-button-container">
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>

      </div>

    </div>
  );
}

export default Book;
