import React, { useState, useContext, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom";
import styles from './Home.module.css';
import bottomimg  from './Home_Images/Bottom.png';
import calendarimg  from './Home_Images/Calendar.png';
import queryimg  from './Home_Images/Query.png';
// import reviewimg  from './Home_Images/Review.png';
import todoimg  from './Home_Images/To-do.png';
import CourseCard from '../CourseCard/CourseCard';
import StudentCoursePage from '../StudentCoursePage/StudentCoursePage';
import AuthContext from '../../AuthContext';

const Home = (props) => {

  const [courses, setCourses] = useState([]);
  const { userData, setUserData } = useContext(AuthContext);

  let imgArr = ["Banner1.png", "Banner2.png", "Banner3.png", "Banner4.png", "Banner5.png"];


  useEffect(() => { loadData() }, [userData.token]);

  const loadData = async () =>{
    if (userData.token) {
      setUserData((u) => ({ ...u, loader: u.loader + 1 }));
      await fetch("https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${userData.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setUserData((u) => ({ ...u, loader: u.loader - 1 }));
          setCourses(res.courses);
          // console.log(res.courses);
        });
  
    }
  }



  return (
    // <>
    //   <div className={styles.home}>
    //       <div className="head">
    //         <button className="btm3"><img src={queryimg} alt="Queries" /> Queries</button>
    //         <RouterLink to="/Todo">
    //           <button className="btm3"><img src={todoimg} alt="Todos" /> To-Do</button>
    //         </RouterLink>
    //         <RouterLink to="/Calendar">
    //           <button className="btm3"><img src={calendarimg} alt="Calendar"/> Calendar</button>
    //         </RouterLink>
    //         {
    //           teachercount !=0 ?
    //           <button className="btm3"><img src={reviewimg} alt="Review" /> Review</button> :
    //           <p style={{color:'white',marginBottom:'-20px'}}> Hello </p>
    //         }
    //       </div>
    //       {courses ? courses.map((c,index,len) => (
    //         <CourseCard key={c.id} dataid={c.id} dataname={c.name} alternateLink={c.alternateLink} index={index} length={len} setCourse={setCourse}  image={imgArr[index % 5]}/>
    //       )) : "LOADING......"}
    //   </div>
    //   {<img src={bottomimg} alt="bottomimg" className="bottom" />}
    // </>
    

    <div className={styles.home}>
    {/* if course is selected */}
    {props.course.id ? (
      <>
          <div>
            <StudentCoursePage name={props.course} />
          </div>
      </>
    ) : ( // Select Course //course_list
    <>
      <div className={styles.home}>
          <div className="head">
            <button className="btm3"><img src={queryimg} alt="Queries" /> Queries</button>
            <RouterLink to="/Todo">
              <button className="btm3"><img src={todoimg} alt="Todos" /> To-Do</button>
            </RouterLink>
            <RouterLink to="/Calendar">
              <button className="btm3"><img src={calendarimg} alt="Calendar"/> Calendar</button>
            </RouterLink>
            {/* {
              teachercount !=0 ?
              <button className="btm3"><img src={reviewimg} alt="Review" /> Review</button> :
              <p style={{color:'white',marginBottom:'-20px'}}> Hello </p>
            } */}
          </div>
          {courses ? courses.map((c,index,len) => (
            <CourseCard key={c.id} data={c} dataid={c.id} dataname={c.name} alternateLink={c.alternateLink} index={index} length={len} setCourse={props.setCourse}  image={imgArr[index % 5]}/>
          )) : "LOADING......"}
      </div>
      {<img src={bottomimg} alt="bottomimg" className="bottom" />}
    </>
    )}
    </div>
  )
}

export default Home
