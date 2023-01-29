// import React from 'react'

// const CourseCard = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CourseCard


import React, { useState, useContext, useEffect } from 'react';
import './CourseCard.css';
import dashboardimg from "./CourseCard_Images/dashboard.png";
import googleclassroomimg from "./CourseCard_Images/google-classroom.png";
import bannerimg from "./CourseCard_Images/Banner3.png";
import { Link } from "react-router-dom";
import AuthContext from '../../AuthContext';


// function truncateString1(str) {
//     return str.length >= 18 ? str.substring(0, 17) + "..." : str;
// }
  
function truncateString2(str) {
    return str.length >= 22 ? str.substring(0, 18) + "..." : str;
}

export default function CourseCard(props) {

    const [TeachersName, setTeachersName] = useState([]);
    const [Photo, setPhoto] = useState([]);
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        if (userData.token) {
          fetch(`https://classroom.googleapis.com/v1/courses/${props.dataid}/teachers`, {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${userData.token}`,
            },
          })
            .then((res) => res.json())
            .then((res) => {
                var len = res.teachers.length;
                setPhoto("https:"+res.teachers[len-1].profile.photoUrl);
                setTeachersName(res.teachers[len-1].profile.name.fullName);
            });
      
        }
      
      }, [userData.token]);


    const OnCourseClick = () => {
        console.log("OnCourseClick......Hello");
        props.setCourse(props.data);
    }


    return (
        <>
            <div className="submain_courseCard" onClick={OnCourseClick}>
                <div className="classCard__upper" style={{backgroundImage: `url(${bannerimg})`}}>
                    <div className="name_courseCard">{props.dataname}</div>
                    <div className="section_courseCard">{truncateString2(TeachersName)}</div>
                    <img className="classCard__creatorPhoto" src={Photo} alt="userimg"/>
                </div>
                <div className="classCard__middle"></div>
                <div className="foot">
                    <Link to="/dashboard">
                    <button className="btm2"><img src={dashboardimg} alt="dashboard"/> Dashboard</button>
                    </Link>
                    <a href={props.alternateLink}>
                    <button className="btm2"><img src={googleclassroomimg} alt="classroom"/> Classroom</button>
                    </a>
                </div>
            </div>
        </>
    )
}