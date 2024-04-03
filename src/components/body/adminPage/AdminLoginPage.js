import './AdminLoginPage.css'
import AdminLoginUtility from '../../../utilities/adminLoginUtility';
import React, { useState } from 'react';

const AdminLoginPage = ({ setisLoggedIn }) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginUser = () => {
        AdminLoginUtility(userName, password, callBackFunction);
    }

    const callBackFunction = (response) => {
            setisLoggedIn(response);
    }


    return (
        <div className="outer-container-login">
            <div className="main-container">
                <h1>Admin Login Page</h1>
                <h3>Dont try to login in Please !</h3>
                <label>
                    Username:
                </label>
                <input type="text"
                    id="first"
                    name="first"
                    placeholder="Enter Username or Email" required
                    onChange={userNameHandler} />

                <label>
                    Password:
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password" required
                    onChange={passwordHandler} />

                <div className="wrap">
                    <button type="submit"
                        className="login-button"
                        onClick={loginUser} >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminLoginPage;