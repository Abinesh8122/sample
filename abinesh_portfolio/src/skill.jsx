import { useState } from "react"

function Skill() {
  const [data] = useState([
    { id: 1, name: 'C', percent: 90 },
    { id: 2, name: 'C++', percent: 85 },
    { id: 3, name: 'Python', percent: 89 },
  ])

  const [web] = useState([
    { id: 1, name: 'HTML', percent: 85 },
    { id: 2, name: 'CSS', percent: 80 },
    { id: 3, name: 'JavaScript', percent: 75 },
  ])

  const [tools] = useState([
    { id: 1, name: 'Git', percent: 80 },
    { id: 2, name: 'GitHub', percent: 80 },
    { id: 3, name: 'VS Code', percent: 90 },
  ])

  const [database] = useState([
    { id: 1, name: 'Oracle DB', percent: 70 },
    { id: 2, name: 'MySQL', percent: 75 },
    { id: 3, name: 'MongoDB', percent: 50 },
  ])

  return (
    <section id="skill" className="skills-section">
      <div className="section-header">
        <p className="section-label">Skills</p>
        <h2>My technical strengths</h2>
      </div>

      <div className="skills-grid">
        <div className="skills-card">
          <h3>Programming Languages</h3>
          {data.map((item) => (
            <div className="skill-line" key={item.id}>
              <span>{item.name}</span>
              <span>{item.percent}%</span>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-card">
          <h3>Web Technologies</h3>
          {web.map((item) => (
            <div className="skill-line" key={item.id}>
              <span>{item.name}</span>
              <span>{item.percent}%</span>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-card">
          <h3>Developer Tools</h3>
          {tools.map((item) => (
            <div className="skill-line" key={item.id}>
              <span>{item.name}</span>
              <span>{item.percent}%</span>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-card">
          <h3>Databases</h3>
          {database.map((item) => (
            <div className="skill-line" key={item.id}>
              <span>{item.name}</span>
              <span>{item.percent}%</span>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill;