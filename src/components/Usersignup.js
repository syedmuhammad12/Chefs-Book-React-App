import React, {useState} from "react";
import "./Usersignup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



let API_URL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/";
const Usersignup = () => {

    let navigate = useNavigate();

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    
    const handleUser = (event) => {
        setMail(event.target.value)

    }

    const handlePass = (event) => {

        setPass(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)

    }

    async function user_signup() {
    
        let response = await axios.post(API_URL+"user_signup", { email: mail, password: pass, name: name  });
        
        // setOcrtext(response.data.text);
        // igo = "data:image/jpeg;base64,"+response.data.image
        // imageRef.current.src = igo;
        console.log(response.data);
        return response.data;
    
        
    
      }

    const routeChange = async () =>{ 

        if(name!=="" && mail!=="" && pass!==""){
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
    else{
        alert("Fieds can't be empty");
    }

    }

    

    return(

        <div className="page">
            <div className="cover">
                <h1>SIGN UP</h1>
                <input type="text" value={name} onChange={handleName} placeholder="enter your Name"></input>
                <input type="text" value={mail} onChange={handleUser} placeholder="enter your Email"></input>
                <input type="password" value={pass} onChange={handlePass} placeholder="enter your password"></input>
                <button className="btn-login" onClick={routeChange} type="submit">SUBMIT</button>
            </div>
        </div>
    )
}

export default Usersignup;