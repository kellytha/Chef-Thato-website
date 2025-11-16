import "../src/Visual.css";
import Grilled from "../public/Grilled salmon.JPG";
import Wild from "../public/Wld mushroom.jpg";
import Moroccan from "../public/Moroccan lamb.jpg";
import Caprese from "../public/Caprese skewers.jpg";
import Pan from "../public/Pan-seared.jpg";
import Vegan from "../public/Vegan buddha.jpg";
import Decadent from "../public/Decadent chocolate.jpg";
import Spicy from "../public/Spicy shrimp.jpg";

function Visual() {
  const gallery = [
    { src: Grilled, alt: "Grilled Salmon with Asparagus", caption: "Grilled Salmon with Asparagus" },
    { src: Wild, alt: "Wild Mushroom Risotto", caption: "Wild Mushroom Risotto" },
    { src: Moroccan, alt: "Moroccan Lamb Tagine", caption: "Moroccan Lamb Tagine" },
    { src: Caprese, alt: "Caprese Skewers", caption: "Caprese Skewers with Balsamic Glaze" },
    { src: Pan, alt: "Pan-Seared Duck Breast", caption: "Pan-Seared Duck Breast" },
    { src: Vegan, alt: "Vegan Buddha Bowl", caption: "Vegan Buddha Bowl" },
    { src: Decadent, alt: "Decadent Chocolate Lava Cake", caption: "Decadent Chocolate Lava Cake" },
    { src: Spicy, alt: "Spicy Shrimp Tacos", caption: "Spicy Shrimp Tacos" },
  ];

  return (
    <>
      <h1>A Visual Taste</h1>
      <p>Explore a collection of moments and masterpieces from my kitchen</p>

      <div className="gallery">
        {gallery.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Visual;




