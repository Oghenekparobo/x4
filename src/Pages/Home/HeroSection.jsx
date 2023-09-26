export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Stephen</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            i just want to build.
            <br /> solve problems and get paid doing it.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/me-one.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
