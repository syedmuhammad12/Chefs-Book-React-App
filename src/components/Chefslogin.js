import React, { useState } from "react";
import "./Chefslogin.css";
import headerimgg from "../assets/img/headerimgg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


let API_URL = "http://127.0.0.1:5000/";
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



    async function chef_signin() {

        let response = await axios.post(API_URL + "chef_signin", { email: username, password: pass });

        // setOcrtext(response.data.text);
        // igo = "data:image/jpeg;base64,"+response.data.image
        // imageRef.current.src = igo;
        return response.data;

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
    const routeChangeToChefMainPage = async () => {

        let res = await chef_signin();
        if (typeof (res) === "string") {
            popup();
            alert(res);
        }
        else {

            alert("logged in successfully");
            let path = "/chefMainPage";
            console.log(res);
            navigateToChefMainPage(path, {state: res});

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
                        
                        routeChangeToChefMainPage();
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