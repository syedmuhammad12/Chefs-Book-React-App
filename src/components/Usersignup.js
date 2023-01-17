import React, {useState} from "react";
import "./Usersignup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



let API_URL = "http://127.0.0.1:5000/";
const Usersignup = () => {

    let navigate = useNavigate();

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const handleUser = (event) => {
        setMail(event.target.value)

    }

    const handlePass = (event) => {

        setPass(event.target.value)
    }

    async function user_signup() {
    
        let response = await axios.post(API_URL+"user_signup", { email: mail, password:pass, name: "Syed Muhammad"  });
        
        // setOcrtext(response.data.text);
        // igo = "data:image/jpeg;base64,"+response.data.image
        // imageRef.current.src = igo;
        console.log(response.data);
        return response.data;
    
        
    
      }

    const routeChange = async () =>{ 

        
        let res = await user_signup();
        
        if (res==="Account Added Successfully"){
            alert("Account Added Successfully");  
            let path = "/userLogin"; 
            navigate(path);

        }
        else{
            alert(res);
        }

    }

    

    return(

        <div className="page">
            <div className="cover">
                <h1>SIGN UP</h1>
                <input type="text" value={mail} onChange={handleUser} placeholder="enter your username"></input>
                <input type="password" value={pass} onChange={handlePass} placeholder="enter your password"></input>
                <button className="btn-login" onClick={routeChange} type="submit">SUBMIT</button>
            </div>
        </div>
    )
}

export default Usersignup;