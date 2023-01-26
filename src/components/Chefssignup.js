import React, { useState } from "react";
import "./Chefssignup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


let API_URL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/";
const ChefsSignup = () => {

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [nam, setName] = useState("")
    const [user, setUser] = useState("")

    const handleMail = (event) => {
        setMail(event.target.value)

    }

    const handlePass = (event) => {

        setPass(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)

    }

    const handleUser = (event) => {
        setUser(event.target.value)

    }

    async function chef_signup() {

        let response = await axios.post(API_URL + "chef_signup", { email: mail, password: pass, name: nam, username: user });

        // setOcrtext(response.data.text);
        // igo = "data:image/jpeg;base64,"+response.data.image
        // imageRef.current.src = igo;
        console.log(response.data);
        return response.data;



    }



    let navigate = useNavigate();
    const routeChange = async () => {

        if (nam !== "" && user !== "" && mail !== "" && pass !== "") {
            let res = await chef_signup();
            if (res === "Account Added Successfully") {

                let path = "/chefLogin";
                navigate(path);

            }

            else {
                alert(res);

            }
        }
        else{
            alert("Fields can't be empty");
        }

    }

    return (

        <div className="page">
            <div className="chef-signup">
                <h1>SIGN UP</h1>
                <input type="text" value={nam} onChange={handleName} placeholder="enter your Name"></input>
                <input type="text" value={user} onChange={handleUser} placeholder="enter your Username"></input>
                <input type="text" value={mail} onChange={handleMail} placeholder="enter your Email"></input>
                <input type="password" value={pass} onChange={handlePass} placeholder="enter your password"></input>
                <button className="btn-login" style={{ height: "11%" }} onClick={routeChange} type="submit">SUBMIT</button>
            </div>
        </div>
    )
}

export default ChefsSignup;