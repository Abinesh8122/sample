import Abi from './assets/abi.jpg'
function home(){
    return(
        <>
        <section id="home">
            <div className="a1">
        <div className="a2">
            <h1>Portfolio</h1><br /><br />
           <a href="home"><h2>Home</h2></a><br /><br />
           <a href="#about"><h2>About me</h2></a><br /><br />
            <a href="#skill"><h2>Skills</h2></a><br /><br />
            <a href="#project"><h2>Projects</h2></a><br /><br />
            <a href="#contact"><h2>Contact me</h2></a><br />
        </div>
        <div className="a3">
            <h1>Hello,My Name is Abinesh RA</h1> 
            <h1>I Am A Web Developer</h1>
            <p>I am a Web designer with extensive experience for over 3 years.My experience to create Website designs and much more... </p>
            <p>Skilled in building responsive and user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React.</p>
            <button><a href="/src/resume intern(1).pdf"> Download cv</a></button>
        </div>
        <div className="a4">
           <div className="a5"> <img src={Abi} alt="cannot" /></div>
        </div>
        </div>
        </section>
        </>
    )

}
export default home