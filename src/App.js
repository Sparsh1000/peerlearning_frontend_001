import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import StudentCoursePage from "./Components/StudentCoursePage/StudentCoursePage";
import TeacherPeople from "./Components/People/TeacherPeople";
import Calendar from './Components/Calendar/Calendar';
import Help from './Components/Help/Help';
import Todo from './Components/Todo/Todo';
import Query from './Components/Query/Query';
import Dashboard from './Components/Dashboard/Dashboard';
import AuthContext from './AuthContext';


function App() {

  const [ user, setUser ] = useState({});
  const [course, setCourse] = useState({});

  const [userData, setUserData] = useState({
    credential: undefined,
    token: undefined,
    loader: 0,
  });

  return (

    <div>

      <AuthContext.Provider value={{ user, setUser, userData, setUserData, course, setCourse}}>

        {userData.token ? (
          <Router>
            <Navbar setCourse={setCourse}/>
            <Routes>
              <Route exact path="/" element={<Home course={course} setCourse={setCourse}/>}/>
              <Route exact path="/dashboard" element={<Dashboard/>}/>
              <Route exact path="/Calendar" element={<Calendar/>}/>
              <Route exact path="/Help" element={<Help/>}/>
              <Route exact path="/Todo" element={<Todo/>}/>
              <Route exact path="/Query" element={<Query/>}/>
              <Route exact path="/course/:course_id" element={<StudentCoursePage course={course} />}/>
              <Route exact path="/people/:course_id" element={<TeacherPeople course={course} />}/>
            </Routes>
          </Router>
        ) : (<Login/>)}
        
      </AuthContext.Provider>

    </div>
  );
}

export default App;
