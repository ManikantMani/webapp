import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="social_media" style={{ width: "100% !important" }}>
      <span className="links"><a className='aLink' href="tel:7004336713" target="_blank"><i class="fa-solid fa-phone"></i></a></span>
        <span className="links"><a className='aLink' href="https://wa.me/917004336713" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></span>
        <span className="links"><a className='aLink' href="mailto:manikantmani12345@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a></span>
        <span className="links"><a className='aLink' href="https://www.linkedin.com/in/manikant-mani-4a7606216" target="_blank"><i class="fab fa-linkedin"></i></a></span>
        <span className="links"><a className='aLink' href="https://github.com/ManikantMani" target="_blank"><i class="fab fa-github"></i></a></span>
      </div>
    </>
  )
}

export default Footer;