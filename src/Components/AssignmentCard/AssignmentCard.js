import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../AuthContext';
import './AssignmentCard.css'
import assignmentimg from '../Images/Assignment.png';
import moreimg from '../Images/more.png';

export default function AssignmentCard(props){

  const navigate = useNavigate();

  const { setAssignment } = useContext(AuthContext);

  var day = '-';
  var month = '-';
  var year = '-';
  if (props.allAssignments.creationTime) {
    day = props.allAssignments.creationTime.substring(8, 10);
    month = props.allAssignments.creationTime.substring(5, 7);
    year = props.allAssignments.creationTime.substring(0, 4);
  }


  const OnCard = () => {
    //console.log("OnCard Clicked");
    setAssignment(props.allAssignments);
    navigate(`/acourse/${props.allAssignments.courseId}/${props.allAssignments.id}`);
  }

  return (
    <>
        <div onClick={OnCard} className="submain" >
        <div className="left-part">
            <div className="Image"><img src={assignmentimg} alt="assignmentimg"/></div>
            <div>
            <div className="section">{props.allAssignments.title}</div>
            <div className="date">{day}/{month}/{year}</div>
            </div>
        </div>
        <div className="MoreImage"><img src={moreimg} alt="More-Options"/>
            <div className="options">
            <a href={props.allAssignments.alternateLink}>View in Classroom <i className="fa fa-external-link" aria-hidden="true"></i></a>
            </div>
        </div>
        </div>
  </>
  )
}