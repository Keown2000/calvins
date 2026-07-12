function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Calvin's
      </div>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="book-btn">
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;
