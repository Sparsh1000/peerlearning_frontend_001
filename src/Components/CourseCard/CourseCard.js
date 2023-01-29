import React from 'react';
import './CourseCard.css';
import userimg from "./CourseCard_Images/user-2.png";
import dashboardimg from "./CourseCard_Images/dashboard.png";
import googleclassroomimg from "./CourseCard_Images/google-classroom.png";
import bannerimg from "./CourseCard_Images/Banner3.png";
import { Link } from "react-router-dom";


// function truncateString1(str) {
//     return str.length >= 18 ? str.substring(0, 17) + "..." : str;
// }
  
// function truncateString2(str) {
//     return str.length >= 22 ? str.substring(0, 18) + "..." : str;
// }

export default function CourseCard() {

    const OnCourseClick = () => {
        console.log("OnCourseClick......Hello");
    }


    return (
        <>
            <div className="submain_courseCard" onClick={OnCourseClick}>
                <div className="classCard__upper" style={{backgroundImage: `url(${bannerimg})`}}>
                    <div className="name_courseCard">DATA NAME</div>
                    <div className="section_courseCard">TEACHER NAME</div>
                    <img className="classCard__creatorPhoto" src={userimg} alt="userimg"/>
                </div>
                <div className="classCard__middle"></div>
                <div className="foot">
                    <Link to="/dashboard">
                    <button className="btm2"><img src={dashboardimg} alt="dashboard"/> Dashboard</button>
                    </Link>
                    <Link to="#">
                    <button className="btm2"><img src={googleclassroomimg} alt="classroom"/> Classroom</button>
                    </Link>
                </div>
            </div>
        </>
    )
}




// const CourseCard = ({ data,setCourse,image}) => {
//   const [TeachersName,setTeachersName] = useState([]);
//   const [Photo, setPhoto] = useState([]);

//   return(
//     <>
//     <div className="submain_courseCard" onClick={() => setCourse(data)}>
//       <div className="classCard__upper" style={{backgroundImage: `url(/images/${image})`}}>
//         <div className="name_courseCard">{truncateString(data.name)}</div>
//         <div className="section_courseCard">{truncateString1(TeachersName)}</div>
//         <img className="classCard__creatorPhoto" src={Photo} alt="Image"></img>
//       </div>
//       <div className="classCard__middle"></div>
//       <div className="foot">
//         <button className="btm2" onClick={dashboardPage}><img src={dash} alt="dashboard"/> Dashboard</button>
//         <a href={data.alternateLink}>
//         <button className="btm2"><img src={room} alt="dashboard"/> Classroom</button>
//         </a>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CourseCard;
