
function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="/images/about.jpg"
          alt="Calvin's restaurant dining experience"
        />
      </div>

      <div className="about-content">

        <h2>
          Our Story
        </h2>

        <p>
          At Calvin's, we believe dining is more than just a meal.
          It is an experience built around exceptional ingredients,
          thoughtful preparation, and memorable moments.
        </p>

        <p>
          Our chefs combine modern techniques with timeless flavours
          to create dishes that bring people together.
        </p>

        <button className="primary-btn">
          Discover More
        </button>

      </div>

    </section>
  );
}

export default About;
