import Image from './assets/aboutme.jpg'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <p className="section-label">About Me</p>
        <h2>Designing elegant and scalable web experiences.</h2>
      </div>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="about-image-ring">
            <img className="about-img" src={Image} alt="About me" />
          </div>
        </div>

        <div className="about-copy">
          <p>
            Hi, I am Abinesh RA, a 3rd year B.E. Computer Science and Engineering student at St. Xavier's Catholic College of Engineering, Nagercoil. I enjoy building responsive, user-friendly, and scalable applications using modern web technologies.
          </p>
          <p>
            I am passionate about Full Stack Web Development with React, Node.js, and MongoDB. I focus on writing clean code, taking a practical design-first approach, and creating projects that feel intuitive and polished.
          </p>
          <p>
            I have built several web projects and continue learning the best practices in frontend and backend development while improving my UI/UX and deployment skills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About