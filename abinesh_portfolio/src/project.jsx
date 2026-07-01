import calculatorImg from './assets/calculator.jpg'
import portImg from './assets/port.png'
import kawasakiImg from './assets/kawasaki.jpg'
import trainImg from './assets/train.jpg'

const projectItems = [
  {
    id: 1,
    image: calculatorImg,
    title: 'Gesture based calculator',
    description: 'Intuitive gesture controls and polished UI.',
  },
  {
    id: 2,
    image: portImg,
    title: 'Personal portfolio website',
    description: 'A modern portfolio with responsive design.',
  },
  {
    id: 3,
    image: kawasakiImg,
    title: 'Kawasaki website clone',
    description: 'A clean brand-inspired landing page.',
  },
  {
    id: 4,
    image: trainImg,
    title: 'Railway reservation system',
    description: 'A booking interface with form-based workflow.',
  },
]

function Project() {
  return (
    <section id="project" className="projects-section">
      <div className="section-header">
        <p className="section-label">Projects</p>
        <h2>Recent work</h2>
      </div>

      <div className="project-grid">
        {projectItems.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project