import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="header-wraper" style={{width:"100%"}}>
                <div className="main-info">
                    <div className="info">
                        <h2 className="info1">welcome to my world</h2>
                        <h1 className="info2">Hi,</h1>
                        <h2 className='info2'>I'm manikant mani</h2>
                        <h1 className="info3">React developer.</h1>
                        <h1 className="info2">Based in INDIA.</h1>
                    </div>
                    <div className="moreinfo">
                        <h3>I am looking for full time opportunities/ internship opportunities in the front-end development. To explore my development projects, please go to project section.</h3>
                    </div>
                    <NavLink to="/project"><button className='button'>my projects</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home
