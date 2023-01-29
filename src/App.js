import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Calendar from './Components/Calendar/Calendar';
import Help from './Components/Help/Help';
import Todo from './Components/Todo/Todo';
import Query from './Components/Query/Query';
import Dashboard from './Components/Dashboard/Dashboard';
import AuthContext from './AuthContext';

// import StudentCoursePage from "./Components/StudentCoursePage/StudentCoursePage";


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    loader: 0,
  });

  const [course, setCourse] = useState({});



  return (

    <div>

      {/* <StudentCoursePage/> */}

      <AuthContext.Provider value={{ userData, setUserData}}>

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
            </Routes>
          </Router>
        ) : (<Login/>)}
        
      </AuthContext.Provider>

    </div>
  );
}

export default App;
