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


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    loader: 0,
  });

  const onSuccess = (res) => {
    setUserData({
      token: res.credential,
      user: res.profileObj,
      loader: 0,
    });
    console.log(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    setUserData({
      token: undefined,
      loader: 0,
    });
  };



  return (

    <div>

      <AuthContext.Provider value={{ userData, setUserData}}>
        {userData.token ? (
          <Router>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/dashboard" element={<Dashboard/>}/>
              <Route exact path="/Calendar" element={<Calendar/>}/>
              <Route exact path="/Help" element={<Help/>}/>
              <Route exact path="/Todo" element={<Todo/>}/>
              <Route exact path="/Query" element={<Query/>}/>
            </Routes>
          </Router>
        ) : (<Login onSuccess={onSuccess} onFailure={onFailure}/>)}
        
      </AuthContext.Provider>

      {/* <Login onSuccess={onSuccess} onFailure={onFailure}/> */}

    </div>
    // <>
    //   <Router>
    //         <Navbar/>
    //         <Routes>
    //           <Route exact path="/" element={<Home/>}/>
    //           <Route exact path="/dashboard" element={<Dashboard/>}/>
    //           <Route exact path="/Calendar" element={<Calendar/>}/>
    //           <Route exact path="/Help" element={<Help/>}/>
    //           <Route exact path="/Todo" element={<Todo/>}/>
    //           <Route exact path="/Query" element={<Query/>}/>
    //         </Routes>
    //   </Router>
    // </>
  );
}

export default App;
