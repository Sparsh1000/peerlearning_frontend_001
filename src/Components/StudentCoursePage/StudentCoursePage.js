import React, { useContext, useEffect, useState } from "react";
import TeacherPeople from "../People/TeacherPeople";
import StudentPeople from "../People/StudentPeople";
import AuthContext from "../../AuthContext";

import banner from './Banner1.png';
import styles from './StudentCoursePage.module.css';

import bottom from './bottom.png'

import peep from './People.png';
import { useHistory } from "react-router-dom";


const StudentCoursePage = (props) => {

    
  const [TeachersName, setTeachersName] = useState([]);
  const [tf, settf] = useState(true);
  const [Role, setRole] = useState("student");
  const [css, setcss] = useState(false);
  const [under, setunder] = useState(false);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    if (userData.token) {
      fetch(`https://classroom.googleapis.com/v1/courses/${props.name.id}/teachers`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          var len = res.teachers.length;
          // console.log(res.teachers[len-1].profile.name.fullName);
          setTeachersName(res.teachers[len - 1].profile.name.fullName);
        });
      // console.log(TeachersName);
  
    }
  
  }, [userData.token]);


  // fetch(`${G_API}/courses/${prop.name.id}/teachers`, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${userData.token}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     var len = res.teachers.length;
  //     // console.log(res.teachers[len-1].profile.name.fullName);
  //     setTeachersName(res.teachers[len - 1].profile.name.fullName);
  //   });
  // console.log(TeachersName);

  const f1 = () => {
    setcss(true)
    console.log("f1 is pressed")
  }
  const f2 = () => {
    setcss(false)
    console.log("f2 is pressed")
  }

  const funpeople = () => {
    settf(false);
    setunder(true);
  }

  const Assign = () => {
    settf(true);
    setunder(false);
  }

  return (
<>
      <div className={styles.topBtn}>
        <span onClick={Assign} className={under ? styles.notu : styles.u}>Stream</span>
        <span onClick={funpeople} className={under ? styles.u : styles.notu}>People</span>
      </div>
      {
        tf ?
          <div>
            <div className={styles.banner}>
              <img src={banner} alt="Image" className={styles.img}></img>
              <p style={{ marginTop: "-104.88px", paddingLeft: "32px", fontWeight: "600", paddingBottom: "15px", color: "white", fontSize: "36px", lineHeight: "43.88px" }}>{props.name.name}</p>
              <div style={{ marginTop: "-24px", paddingLeft: "32px", display: "flex" }}>
                <p style={{ fontWeight: "500", color: "white", fontSize: "22px", lineHeight: "26.82px", paddingRight: "24px" }}>{TeachersName} </p>
                <img onClick={funpeople} src={peep} alt="Image" style={{ width: "25px", height: "24px", cursor: "pointer" }} />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.form}>
                <div className={styles.formBtn}>
                  <span onClick={f2} className={css ? styles.not : styles.underline}>Peer Learning Assignments</span>
                  <span onClick={f1} className={css ? styles.underline : styles.not}>All Assignments</span>
                </div>
              </div>
            </div>
            {<img src={bottom} alt="Image" className={styles.bottom} />}
          </div> :
          <div>
            <div><TeacherPeople teach={props.name}/></div> 
            <div><StudentPeople teach={props.name}/></div> 
            {/* {Role == "student" ? <div><StudentPeople teach={props.name}/></div> : <div>other</div>} */}
          </div>
      }
    </>
  )
}

export default StudentCoursePage

