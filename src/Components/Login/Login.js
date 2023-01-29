import React, {useContext} from "react";
import { useGoogleLogin } from '@react-oauth/google';
import styles from './Login.module.css';
import homeimg from "./Login_Image/Home.png";
import leftimg from "./Login_Image/left.png";
import rightimg from "./Login_Image/right.png";
import AuthContext from "../../AuthContext";


function Login() {

    const { setUserData } = useContext(AuthContext);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            // console.log(tokenResponse);
            // console.log(tokenResponse.access_token)
            setUserData({
                token: tokenResponse.access_token,
                loader: 0,
            });

        },
        onError:  (tokenResponse) => {
            console.log("Login failed: res:", tokenResponse);
        },

        scope: "email profile https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.profile.emails https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.rosters.readonly https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/classroom.coursework.students.readonly https://www.googleapis.com/auth/classroom.coursework.students https://www.googleapis.com/auth/classroom.announcements"

    });


    return (
        <div id={styles.login}>
            <div className={styles.left}>
                <img src={leftimg} alt="Left Wave" />
            </div>
            <div className={styles.container1}>
                <div className={styles.row1}>
                    <div className={styles.col-2}>
                        <img src={homeimg} alt="Peer Learning" />
                    </div>
                    <div className={styles.col-2}>
                        <h1 className={styles.h1}>Peer Learning Platform</h1>
                        <h3 >A platform specifically designed as an addition to Google Classroom for students to gain the best out of online education, look at solutions not just from their but also from the perspectives of their peers.</h3>
                        <h3>A platform that not only promotes education but also instills moral integrity within it’s community.</h3>
                        <button className={styles.button1} onClick={login}>Sign In with Google</button>
                        {/* <div className="SignInButton1">
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Sign in with Google"
                                onSuccess={props.onSuccess}
                                onFailure={props.onFailure}
                                cookiePolicy={"single_host_origin"}
                                // theme={""}
                                onRequest={() => setUserData({ ...userData, loader: 1 })}
                                isSignedIn={true}
                                scope="email profile https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.profile.emails https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.rosters.readonly https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/classroom.coursework.students.readonly https://www.googleapis.com/auth/classroom.coursework.students https://www.googleapis.com/auth/classroom.announcements"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src={rightimg} alt="Right Wave" />
            </div>
        </div>
    );
}

export default Login;
