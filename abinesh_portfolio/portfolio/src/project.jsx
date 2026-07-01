import { useEffect, useState } from "react"


function project(){
    const[project, Setproject]=useState([]);
    const[port,setport]=useState([]);
    const[website,setwebsite]=useState([]);
    const[train,settrain]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/project")
      .then(res => res.json())
      .then(result => Setproject(result))
      .catch(err => console.log(err));

      fetch("http://localhost:3000/project2")
      .then(res => res.json())
      .then(result => setport(result))
      .catch(err => console.log(err));

      fetch("http://localhost:3000/project3")
      .then(res => res.json())
      .then(result => setwebsite(result))
      .catch(err => console.log(err));

      fetch("http://localhost:3000/project4")
      .then(res => res.json())
      .then(result => settrain(result))
      .catch(err => console.log(err));
    })
    return(
        <section id="project" className="p1">
            <div className="p2">
                <div className="p3">
                    <div className="p4">

            {project.map(item => (
              <div className="project-box" key={item.id}>
                <div className="z1"><img src={item.image} alt={item.name}  width="350px"/></div>

                <div className="z2">
                    <h2>Gesture based calculator</h2>
                  
                </div>
                

                

              </div>
            ))}
            </div>
                        <div className="p5">
                            
            {port.map(item => (
              <div className="project-box" key={item.id}>
                <div className="z3"><img src={item.image} alt={item.name}  width="350px"/></div>

                <div className="z4">
                    <h2>Personal portfolio website</h2>
                 
                </div>
                

                

              </div>
            ))}
            </div>
            </div>
<div className="p6">
                <div className="p8">
                        
            {website.map(item => (
              <div className="project-box" key={item.id}>
                <div className="z5"><img src={item.image} alt={item.name} width="350px" /></div>

                <div className="z6">
                    <h2>Kawasaki weebsite clone</h2>
                  
                </div>
                </div>
            ))}
                    </div>
                    <div className="p9">
                        
            {train.map(item => (
              <div className="project-box" key={item.id}>
                <div className="z7"> <img src={item.image} alt={item.name} width="350px" height="200px"/></div>

                <div className="z8">
                    <h2>Railway reservation system</h2>
                  
                </div>
                

                

              </div>
            ))}
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default project