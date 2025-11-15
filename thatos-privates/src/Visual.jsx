import "../src/Visual.css"


function Visual() {
  const gallery = [
    { src: "../public/Grilled salmon.JPG", alt: "Grilled Salmon with Asparagus", caption: "Grilled Salmon with Asparagus" },
    { src: "../public/Wld mushroom.jpg", alt: "Wild Mushroom Risotto", caption: "Wild Mushroom Risotto" },
    { src: "../public/Moroccan lamb.jpg", alt: "Moroccan Lamb Tagine", caption: "Moroccan Lamb Tagine" },
    { src: "../public/Caprese skewers.jpg", alt: "Caprese Skewers", caption: "Caprese Skewers with Balsamic Glaze" },
    { src: "../public/Pan-seared.jpg", alt: "Pan-Seared Duck Breast", caption: "Pan-Seared Duck Breast" },
    { src: "../public/Vegan buddha.jpg", alt: "Vegan Buddha Bowl", caption: "Vegan Buddha Bowl" },
    { src: "../public/Decadent chocolate.jpg", alt: "Decadent Chocolate Lava Cake", caption: "Decadent Chocolate Lava Cake" },
    { src: "../public/Spicy shrimp.jpg", alt: "Spicy Shrimp Tacos", caption: "Spicy Shrimp Tacos" },
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



