import React, { useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import './AssignmentCard.css'
import asimg from '../Images/Assignment.png';
import more from '../Images/more.png';

const PeerAssignmentCard = ({ peerAssignments,ids}) => {

  const [opt, setopt] = useState(false);
  // console.log(peerAssignments);
  var reviewDeadline = "";
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       color: "#4285F4"
//     },
//     large: {
//       width: theme.spacing(7),
//       height: theme.spacing(7),
//     },
//   }));

//   const classes = useStyles();
  const truncate = (str) => {
    if (str) {
      return str.length > 75 ? str.substring(0, 75) + "..." : str;
    }
  }
  var day = '-';
  var month = '-';
  var year = '-';
  if(peerAssignments.creationTime)
  {
    day = peerAssignments.creationTime.substring(8,10);
    month = peerAssignments.creationTime.substring(5, 7);
    year = peerAssignments.creationTime.substring(0, 4);
  }
  const f1 = () => {
    setopt(true)
  }
  return (
  <>
    {ids.map((e)=>(
      e === peerAssignments.assignment_id ? 
    <div className="submain">
      <div className="left-part">
        <div className="Image"><img src={asimg} alt="Assignment-Image"/></div>
        <div>
          <div className="section">{peerAssignments.assignment_title}</div>
          <div className="date">{day}/{month}/{year}</div>
        </div>
      </div>
      <div className="MoreImage"><img src={more} onClick={f1} alt="More-Options"/>
        <div className="options">
          <a href={peerAssignments.alternateLink}>View in Classroom <i className="fa fa-external-link" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    :
    null
    ))}
  </>
  );
};

export default PeerAssignmentCard;