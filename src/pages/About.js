import React from "react";
import "./style.css"
import resume from "../images/resume.png";
import resumePdf from "../images/ManikantMani.pdf"

const About = () => {
  return (
    <>
      <div className="about_main" style={{width:"100% !important", height: "auto !important"}}>
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
                <span className="skills_name">React Js</span>
                <i class="fab fa-react"></i> 50%
              </div>
              <div className="React next_js">
                <span className="skills_name">Next Js</span>
                <i class="fab fa-react"></i> 60%
              </div>
              <div className="javaScript">
                <span className="skills_name">JavaScript</span>
                <i class="fab fa-js"></i> 40%
              </div>
              <div className="expressjs">
                <span className="skills_name">Express Js</span>
                <i class="fab fa-node"></i> 25%
              </div>
              <div className="css">
                <span className="skills_name">CSS</span>
                <i class="fab fa-css3"></i> 70%
              </div>
              <div className="html">
                <span className="skills_name">HTML</span>
                <i class="fas fa-code"></i> 75%
              </div>
            </div>
            <div className='resume_section'>
            <h3 className="skill_heading">My Resume</h3>
                <div className="resume_section_img">
                    <img src={resume} alt="my_resume" />
                </div>
                <a href={resumePdf} download="Manikant_Mani">Download</a>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
