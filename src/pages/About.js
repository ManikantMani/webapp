import React from "react";

const About = () => {
  return (
    <>
      <div className="about_main">
        <div className="about_main_div">
          <h1 className="about_heading">About Me</h1>
          <div className="infome">
            <p className="about_me">
              I am a Web Developer with a passion for web application
              development and success in managing development and success in
              managing development projects using my learning skills. Skilled in
              development and deploying software containing logical and
              programming solution to business problems. Dedicated to driving
              innovation with the ability to follow industry and technological
              trends, and facilitating early adoption of innovations.
            </p>
          </div>
          <div className="about_container">
            <div className="skills">
              <h3 className="skill_heading">My Skills</h3>
              <div className="React">
                <span className="skills_name">React Js</span>{" "}
                <i class="fab fa-react"></i> 50%
              </div>
              <div className="javaScript">
                <span className="skills_name">JavaScript</span>{" "}
                <i class="fab fa-js"></i> 40%
              </div>
              <div className="expressjs">
                <span className="skills_name">Express Js</span>{" "}
                <i class="fab fa-node"></i> 25%
              </div>
              <div className="css">
                <span className="skills_name">CSS</span>{" "}
                <i class="fab fa-css3"></i> 70%
              </div>
              <div className="html">
                <span className="skills_name">HTML</span>{" "}
                <i class="fas fa-code"></i> 75%
              </div>
            </div>
          </div>

         

        </div>
         
      </div>
      <div className="social_media">
               {/* <span className="social_media_heading">Follow me on social site...</span> */}
                   <span className="links"><a className='aLink' href="https://github.com/ManikantMani" target="_blank"><i class="fab fa-github"></i></a></span>
                   <span className="links"><a className='aLink' href="manikantmani12345@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a></span>
                   <span className="links"><a className='aLink' href="https://www.linkedin.com/in/manikant-mani-4a7606216" target="_blank"><i class="fab fa-linkedin"></i></a></span>
                   <span className="links"><a className='aLink' href="https://www.youtube.com/channel/UC4so0nZsVoydtosEXqq8eFg/featured" target="_blank"><i class="fab fa-youtube"></i></a></span>
                   <span className="links"><a className='aLink' href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram" target="_blank"></i></a></span>
               </div>
    </>
  );
};

export default About;
