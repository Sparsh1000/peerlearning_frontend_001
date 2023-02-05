import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from './Home.module.css';
import CourseCard from '../CourseCard/CourseCard';
import AuthContext from '../../AuthContext';
import bottomimg  from '../Images/Bottom.png';
import calendarimg  from '../Images/Calendar.png';
import queryimg  from '../Images/Query.png';
import todoimg  from '../Images/To-do.png';



const Home = (props) => {

  const [courses, setCourses] = useState([]);
  const { userData, setUserData, course } = useContext(AuthContext);

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
          console.log(res.courses);
        });
  
    }
  }



  return (
    <>
    <div className="home1">
        <div className="head">
          <button className="btm3"><img src={queryimg} alt="Queries" /> Queries</button>
          <Link to="/Todo">
            <button className="btm3"><img src={todoimg} alt="Todos" /> To-Do</button>
          </Link>
          <Link to="/Calendar">
            <button className="btm3"><img src={calendarimg} alt="Calendar"/> Calendar</button>
          </Link>
        </div>
    </div>
    <div className={styles.home2}>

        {courses ? courses.map((data,index) => (
          <CourseCard key={data.id} data={data} index={index} />  //image={imgArr[index % 5]}
        )) : "LOADING......"}

    </div>
    {<img src={bottomimg} alt="bottomimg" className="bottom" />}
  </>
  )
}

export default Home
