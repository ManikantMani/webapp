import React from 'react'
import "../style.css";
import DesktopProjectCard from './DesktopProjectCard';
import DesktopProjectData from './DesktopProjectData';
const DesktopProject = () => {
  return (
    <>
        <div className="container_project" style={{width:"100%", height: "auto"}} >
        <div className="main_project main_project_for_desktop_project_page_only">
            <h1 className="text-center project_h1" style={{margin: "10px"}}>Desktop Projects</h1>
            <div className="container-fluid project_main mb-auto">
                <div className="row1">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                DesktopProjectData.map((value, index) => {
                                    return <DesktopProjectCard 
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

export default DesktopProject;