import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="header-wraper">
                <div className="main-info">
                    <div className="info">
                        <h2 className="info1">welcome to my world</h2>
                        <h1 className="info2">Hi,</h1>
                        <h2 className='info2'>I'm manikant mani</h2>
                        <h1 className="info3">React developer.</h1>
                        <h1 className="info2">Based in INDIA.</h1>
                    </div>
                    <div className="moreinfo">
                        <h3>Hello, I am Manikant Mani. I am a front-end web developer. I am a Reactjs learner. I have learnt my all course from online sourses and I want to explore my skillks to work with real time work.</h3>
                    </div>
                    <NavLink to="/project"><button className='button'>my projects</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home
