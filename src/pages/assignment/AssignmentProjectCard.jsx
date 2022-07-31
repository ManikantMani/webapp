import React from 'react'
import "../style.css";

const AssignmentProjectCard = (props) => {
  return (
    <>
        <div className="card_main col-md-4 col-12 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="propsimgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.detail}.</p>
                        <a className='projectLink' href={props.link} target= "_blank"><button className="button_project">Check It</button></a>
                    </div>
                </div>
            </div> 
    </>
  )
}

export default AssignmentProjectCard;