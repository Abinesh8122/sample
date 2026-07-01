import { useState, useEffect } from "react";
import Skill from "./skill";

function Aboutme() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(result => {
        console.log(result);   // 👈 check this in console
        setData(result);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="s1" id="skill">
    <div>
      {data.map(item => (
        <Skill
          key={item.id}
          name={item.name}
          percent={item.percent}
        />
      ))}
    </div>
    </section>
  );
}

export default Aboutme;