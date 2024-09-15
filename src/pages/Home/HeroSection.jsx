export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box"> {/* Corrected class name */}
        <div className="hero--section--content">
          <p className="section-title">Hello, I'm Lee</p>
          <h1 className="hero--section--title"> 
            <span className="hero--section-title--color">
              3rd Year 
            </span> {" "}
            <br />
            Computer Science Student
          </h1>
          <p className="hero--section-description">
            A 3rd year College Student studying Computer Science in De La Salle Lipa.
            Sharing a Passion and Interest for Technology and aspiring to be a
            Full Stack Developer. 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/mejlehero.png" alt="Hero Section" />
      </div>
    </section>
  );
}
