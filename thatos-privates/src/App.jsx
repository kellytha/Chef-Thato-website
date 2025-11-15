import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Visual from "./Visual";
import Book from "./Book";
import Footer from "./Footer";
import Last from "./Last"
import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* Routes only render the content based on the URL */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Visual />
              <Last />
            </>
          }
        />
        <Route path="/services" element={<Services />}/>
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
