import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <>
        <div className="social_media" style={{width:"100% !important"}}>
               {/* <span className="social_media_heading">Follow me on social site...</span> */}
                   <span className="links"><a className='aLink' href="https://github.com/ManikantMani" target="_blank"><i class="fab fa-github"></i></a></span>
                   {/* <span className="links"><a className='aLink' href="manikantmani12345@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a></span> */}
                   <span className="links"><a className='aLink' href="https://www.linkedin.com/in/manikant-mani-4a7606216" target="_blank"><i class="fab fa-linkedin"></i></a></span>
                   <span className="links"><a className='aLink' href="https://www.youtube.com/channel/UC4so0nZsVoydtosEXqq8eFg/featured" target="_blank"><i class="fab fa-youtube"></i></a></span>
                   <span className="links"><a className='aLink' href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram" target="_blank"></i></a></span>
               </div>
    </>
  )
}

export default Footer;