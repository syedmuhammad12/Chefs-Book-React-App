import React, { useState } from "react";
import "./Chefslogin.css";
import headerimgg from "../assets/img/headerimgg.png";
import { useNavigate } from "react-router-dom";

const Chefslogin = () => {

    const [popupStyle, showPopup] = useState("hide")
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const handleUser = (event) => {
        setUsername(event.target.value)

    }

    const handlePass = (event) => {

        setPass(event.target.value)
    }

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    // Way to use props..
    // const email = props.email;
    // const password = props.password;

    let navigateToSignup = useNavigate();
    const routeChangeToSignup = () => {
        let path = "/chefSignup";
        navigateToSignup(path);
    }

    let navigateToChefMainPage = useNavigate();
    const routeChangeToChefMainPage = () => {
        let path = "/chefMainPage";
        navigateToChefMainPage(path);
    }

    return (
        <div className="page">
            <div className="cover">
                <h1>LOGIN</h1>
                <input type="text" autoComplete="off" value={username} onChange={handleUser} placeholder="enter your username"></input>
                <input type="password" autoComplete="off" value={pass} onChange={handlePass} placeholder="enter your password"></input>
                <button className="btn-login"
                    onClick={() => {
                        if (username === "admin" && pass === "admin") {
                            routeChangeToChefMainPage();
                        }
                        else {
                            popup();
                        }
                    }}
                    type="submit">SUBMIT</button>
                <div className="alt-login align-items-center">
                    <span className="chefsDHA">DONT HAVE AN ACCOUNT? <button className="chefsSignup" onClick={routeChangeToSignup}>SIGN UP NOW</button></span>
                    <img className="chefsLogo" src={headerimgg} alt="Header Img" />
                </div>
                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username Or Password Incorrect</p>
                </div>
            </div>
        </div>
    )
}

export default Chefslogin;