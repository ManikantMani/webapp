import React from 'react';
import "./style.css";
import ProjectCard from './ProjectCard';
import Pdata from "./ProjectDAta"


const Projects = () => {
    return (
        <>
        <div className="container_project">
        <div className="main_project">
            <h1 className="text-center project_h1">My Projects</h1>
            <div className="container-fluid project_main mb-5">
                <div className="row1">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Pdata.map((value, index) => {
                                    return <ProjectCard 
                                    key = {index} 
                                    imgsrc = {value.imgsrc} 
                                    title = {value.title} 
                                    detail = {value.detail}
                                    link = {value.link}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Projects
