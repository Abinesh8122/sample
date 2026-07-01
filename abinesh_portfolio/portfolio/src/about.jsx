import Image from './assets/aboutme.jpg'
function about(){
    return(
        <section className="b1" id="about">
            <div className="b2">
                <div className="b3"></div>
            <div className="b4">
                <h1>About me</h1>
                <p>Hi, I am Abinesh RA, a 3rd year B.E. Computer Science and Engineering student at St. Xavier’s Catholic College of Engineering, Nagercoil. <br /><br />I am passionate about Full Stack Web Development using modern technologies like React, Node.js, and MongoDB. <br /><br />I enjoy building responsive, user-friendly, and scalable web applications. <br />I am a curious learner who consistently explores new web technologies and best development practices. I love solving real-world problems through clean code, creative design, and efficient backend <br /> <br />I have built several projects in web development and continuously work on improving my frontend and backend skills. <br /><br />I believe that hard work, consistency, and clarity of purpose lead to success..</p>
            </div>
            <div className="b5">
                <div className="b6"> <img src={Image} alt="cannot" /> </div>
            </div>

            </div>
        </section>
    )
}
export default about