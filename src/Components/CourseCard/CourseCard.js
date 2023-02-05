import React, { useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../../AuthContext';
import './CourseCard.css';
import dashboardimg from "../Images/dashboard.png";
import googleclassroomimg from "../Images/google-classroom.png";
import bannerimg from "../Images/Banner3.png";


function truncateString1(str) {
    return str.length >= 18 ? str.substring(0, 17) + "..." : str;
}
  
function truncateString2(str) {
    return str.length >= 22 ? str.substring(0, 18) + "..." : str;
}

export default function CourseCard(props) {

    const navigate = useNavigate();

    const [TeachersName, setTeachersName] = useState([]);
    const [Photo, setPhoto] = useState([]);

    const { userData, setCourse } = useContext(AuthContext);

    let arr = ["Banner1.png", "Banner2.png", "Banner3.png", "Banner4.png", "Banner5.png"];

    useEffect(() => {
        if (userData.token) {
          fetch(`https://classroom.googleapis.com/v1/courses/${props.data.id}/teachers`, {
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
        //console.log("OnCourseClick......Hello");
        setCourse(props.data);
        navigate(`/course/${props.data.id}`);
    }

//console.log(arr[(props.index)%5])
// ${bannerimg}
// /Images/${arr[(props.index)%5]}

    return (
        <>
            <div className="submain_courseCard">
                <div className="classCard__upper" onClick={OnCourseClick} style={{backgroundImage: `url(/images/${arr[(props.index)%5]})`}}>
                    <div className="name_courseCard">{truncateString1(props.data.name)}</div>
                    <div className="section_courseCard">{truncateString2(TeachersName)}</div>
                    <img className="classCard__creatorPhoto" src={Photo} alt="userimg"/>
                </div>
                <div className="classCard__middle"></div>
                <div className="foot">
                    <Link to="/dashboard">
                    <button className="btm2"><img src={dashboardimg} alt="dashboard"/> Dashboard</button>
                    </Link>
                    <a href={props.data.alternateLink}>
                    <button className="btm2"><img src={googleclassroomimg} alt="classroom"/> Classroom</button>
                    </a>
                </div>
            </div>
        </>
    )
}