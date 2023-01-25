import React from "react";
import "./Userlogin.css";
import headerimgg from "../assets/img/headerimgg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Userlogin = () => {

    let API_URL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/";

    const [popupStyle, showPopup] = useState("hide")
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const handleUser = (event) => {
        setUsername(event.target.value)

    }

    const handlePass = (event) => {

        setPass(event.target.value)
    }



    async function sign_in() {

        let response = await axios.post(API_URL + "user_signin", { email: username, password: pass });
        let dat = response.data;

        return dat;

    }



    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    // Another way to use props..
    // const email = props.email;
    // const password = props.password;

    let navigateToUserSignup = useNavigate();
    const routeChangeToUserSignup =  () => {

        let path = "/userSignup";
        navigateToUserSignup(path);

    }

    let navigateToUserMainPage = useNavigate();
    const routeChangeToUserMainPage = async () => {
        let res = await sign_in();
        if (typeof (res) === "string") {
            popup();
            alert(res);

        }
        else{

        alert("Successfully logged in");
        
        let path = "/userViewOfRecipes";
        navigateToUserMainPage(path);

        }
    }

    return (

        <div className="page">
            <div className="cover">
                <h1>LOGIN</h1>
                <input type="text" autoComplete="off" value={username} onChange={handleUser} placeholder="enter your username"></input>
                <input type="password" autoComplete="off" value={pass} onChange={handlePass} placeholder="enter your password"></input>
                <button className="btn-login"
                    onClick={() => {
                        routeChangeToUserMainPage();
                    }}
                    type="submit">SUBMIT</button>
                <div className="alt-login align-items-center">
                    <span className="chefsDHA">DONT HAVE AN ACCOUNT? <button className="chefsSignup" onClick={routeChangeToUserSignup}>SIGN UP NOW</button></span>
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

export default Userlogin;