import Abi from './assets/abinesh1.jpg'

function Home() {
  return (
    <section id="home" className="home-section">
      <aside className="sidebar">
        <strong className="sidebar-title">Portfolio</strong>
        <nav className="sidebar-nav">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#skill">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>

      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Full Stack Developer</p>
          <h1>Hi, I'm Abinesh RA</h1>
          <div className="hero-avatar">
            <img src={Abi} alt="Abinesh RA" />
          </div>
          <p className="hero-text">
            I create modern, responsive web applications using React, Node.js, and MongoDB. My goal is to deliver clean interfaces with strong performance and elegant user experiences.
          </p>
          <a href="/src/resume intern (1).pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home