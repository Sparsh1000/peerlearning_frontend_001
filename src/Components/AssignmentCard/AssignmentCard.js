import React from 'react'
import './AssignmentCard.css'
import assignmentimg from './AssignmentCard_Images/Assignment.png';
import moreimg from './AssignmentCard_Images/more.png';

export default function AssignmentCard(){
  return (
    <>
        <div className="submain">
        <div className="left-part">
            <div className="Image"><img src={assignmentimg} alt="assignmentimg"/></div>
            <div>
            <div className="section">title</div>
            <div className="date">date</div>
            </div>
        </div>
        <div className="MoreImage"><img src={moreimg} alt="More-Options"/>
            <div className="options">
            <a href="/">View in Classroom <i class="fa fa-external-link" aria-hidden="true"></i></a>
            </div>
        </div>
        </div>
  </>
  )
}