import { useState, useEffect } from "react";
// import "./skill.css";

function Skill() {

  const [data, setData] = useState([]);
  const [web, setWeb] = useState([]);
  const [tools,setTools] = useState([]);
  const [database, setBase] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));

    fetch("http://localhost:3000/web")
      .then(res => res.json())
      .then(result => setWeb(result))
      .catch(err => console.log(err));

      fetch("http://localhost:3000/tools")
      .then(res => res.json())
      .then(result => setTools(result))
      .catch(err => console.log(err));

      fetch("http://localhost:3000/database")
      .then(res => res.json())
      .then(result => setBase(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="s1" id="skill">
      <div className="s2">
        <div className="s4">

          
          <div className="s5">
            <h2 className="title">Programming Languages</h2>

            {data.map(item => (
              <div className="skill-box" key={item.id}>

                <div className="skill-header">
                  <h3>{item.name}</h3>
                  <span>{item.percent}%</span>
                </div>
                

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
          <div className="s6">
            <h2 className="title">Web Technologies</h2>

            {web.map(item => (
              <div className="skill-box" key={item.id}>

                <div className="skill-header">
                  <h3>{item.name}</h3>
                  <span>{item.percent}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
          </div>
          <div className="s7">
          <div className="s8">
            <h2 className="title">Developer Tools</h2>

            {tools.map(item => (
              <div className="skill-box" key={item.id}>

                <div className="skill-header">
                  <h3>{item.name}</h3>
                  <span>{item.percent}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
          <div className="s9">
            <h2 className="title">Databases</h2>

            {database.map(item => (
              <div className="skill-box" key={item.id}>

                <div className="skill-header">
                  <h3>{item.name}</h3>
                  <span>{item.percent}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
          </div>
          
        </div>
    </section>
  );
}

export default Skill;