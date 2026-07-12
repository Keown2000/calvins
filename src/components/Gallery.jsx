
function Gallery() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ];

  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>

      <p className="gallery-subtitle">
        Experience the atmosphere of Calvin's.
      </p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
