// import React, { useState } from "react";
// import "./Addrecipe.css";
// import { Link } from 'react-router-dom';

// const Addrecipe = () => {

// const [file, setFile] = useState();
// function handleChange(e) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
// }

// const [show, setShow] = useState(false)

// // const textarea = document.querySelector("textarea");
// // textarea.addEventListener("keyup", e =>{
// //     textarea.style.height = "63px";
// //     let scHeight = e.target.scrollHeight;
// //     textarea.style.height = `${scHeight}px`;
// // });

//     return (
// <main className={show ? 'space-toggle' : null }>
//     <header className={`header ${show ? 'space-toggle' : null}`}>
//         <div className="header-toggle" onClick={() => setShow(!show)}>
//             <i className="fa-solid fa-bars"></i>
//         </div>
//     </header>
//     <aside className={`sidebar ${show ? 'show' : null}`}>
//         <nav className="nav">
//             <div>
//                 <Link to="/" className="nav-link">
//                     <i className="fas fa-home-alt nav-link-icon"></i>
//                     <span className="nav-link-name">Homepage</span>
//                 </Link>

//                 <div className="nav-list">
//                     <Link to="/chefMainPage" className="nav-link">
//                         <i className="fa-solid fa-house nav-link-icon"></i>
//                         <span className="nav-link-name">My Recipes</span>
//                     </Link>
//                     <Link to="/addRecipe" className="nav-link active">
//                         <i className="fa-solid fa-circle-plus nav-link-icon"></i>
//                         <span className="nav-link-name">Add Recipe</span>
//                     </Link>
//                     <Link to="/updateRecipe" className="nav-link">
//                         <i className="fa-solid fa-house nav-link-icon"></i>
//                         <span className="nav-link-name">Update Recipe</span>
//                     </Link>
//                     <Link to="/" className="nav-link">
//                         <i className="fa-solid fa-trash nav-link-icon"></i>
//                         <span className="nav-link-name">Delete Recipe</span>
//                     </Link>
//                 </div>
//             </div>
//             <Link to="/" className="nav-link">
//                 <i className="fas fa-sign-out nav-link-icon"></i>
//                 <span className="nav-link-name">LOGOUT</span>
//             </Link>
//         </nav>
//     </aside>
//     <h1 className="pt-4">Add Recipe</h1>
//     <hr/>
//     <div className="menu-items container-fluid mt-5">
//         <div className="row">
//             <div className="col-11 mx-auto">
//                 <div className="row my-5">
//                     <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
//                         <div className="row item-inside">
//                             {/* For Images */}
//                             <div className="col-12 col-md-12 col-lg-4 img-div">
//                                 <h3>Upload Picture:</h3>
// <input className="inputPic" type="file" onChange={handleChange} />
// <img className="picSize" src={file} />
//                                     <hr></hr>
//                                 </div>
//                             {/* For Menu Description */}
//                             <div className="col-12 col-md-12 col-lg-8">
//                                 <div className="main-title pt-4 pb-3">
//                                     <textarea className="inputTextRecipeName" placeholder="Enter Your Recipe's Name" required></textarea>
//                                     <hr></hr>
//                                     <textarea placeholder="Enter Your Recipe's Ingredients" required></textarea>
//                                     <hr></hr>
//                                     <textarea className="methodRecipe" placeholder="Enter Your Recipe's Method" required></textarea>
//                                     <hr></hr>
//                                     <button className="btn btn-primary">Save</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </main>
//     )
// }

// export default Addrecipe;


// import React, { useState, useRef } from "react";
// import "./Addrecipe.css";
// import { Link } from 'react-router-dom';



// function Addrecipe() {

//     const [file, setFile] = useState();
//     const [img_path, setImgPath] = useState(null);
//     const [upload_photo, setUploadPhoto] = useState("Upload Photo");
//     const [display_photo, setDisplayPhoto] = useState("none");
//     const inputFile = useRef(null) 
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }

//     const onButtonClick = () => {
//         // `current` points to the mounted file input element
//         inputFile.current.click();

//       };

//       const  changePic= () => {
//         setUploadPhoto("")
//         setDisplayPhoto("inline-block");
//         setImgPath(URL.createObjectURL(inputFile.current.files[0]));
//         console.log("heheh")
//       }

//     const [show, setShow] = useState(false)
//     return (
//         <main className={show ? 'space-toggle' : null }>
//             {/* nav stuff */}
//             <header className={`header ${show ? 'space-toggle' : null}`}>
//                 <div className="header-toggle" onClick={() => setShow(!show)}>
//                     <i className="fa-solid fa-bars"></i>
//                 </div>
//             </header>
//             <aside className={`sidebar ${show ? 'show' : null}`}>
//                 <nav className="nav">
//                     <div>
//                         <Link to="/" className="nav-link">
//                             <i className="fas fa-home-alt nav-link-icon"></i>
//                             <span className="nav-link-name">Homepage</span>
//                         </Link>

//                         <div className="nav-list">
//                             <Link to="/chefMainPage" className="nav-link">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">My Recipes</span>
//                             </Link>
//                             <Link to="/addRecipe" className="nav-link active">
//                                 <i className="fa-solid fa-circle-plus nav-link-icon"></i>
//                                 <span className="nav-link-name">Add Recipe</span>
//                             </Link>
//                             <Link to="/updateRecipe" className="nav-link">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">Update Recipe</span>
//                             </Link>
//                             <Link to="/" className="nav-link">
//                                 <i className="fa-solid fa-trash nav-link-icon"></i>
//                                 <span className="nav-link-name">Delete Recipe</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <Link to="/" className="nav-link">
//                         <i className="fas fa-sign-out nav-link-icon"></i>
//                         <span className="nav-link-name">LOGOUT</span>
//                     </Link>
//                 </nav>
//             </aside>

//             {/* main content of the page goes here */}

//             <div class="container-fluid">
//                 {/* heading add recipe */}
//                 <div class="row  text-center justify-content-center">
//                 <h1>
//                     Add Recipe
//                 </h1>
//                 <hr/>

//                 </div>

//                 {/* row 1 has 2 cols upload pic and receipe name */}
//                 <div class="row">
//                     <div class="col-md-4 col-sm-12 justify-content-center">
//                     {/* <input className=" border border-danger rounded-top rounded-bottom py-5 px-5 w-90 h-30" type="file" onChange={handleChange} />
//                         <img className="" src={file} /> */}
//                     <button  className="btn btn-primary border border-danger rounded-top rounded-bottom px-5 py-5 w-90 h-30 "
//                     onClick={onButtonClick}
//                     >   
//                         <img src={img_path}  className="w-90 h-30" style={{display: display_photo}}/>
//                         <input type='file' id='file' ref={inputFile} onChange={changePic} style={{display: "none"}}/>

//                         {upload_photo}</button>
//                     </div>

//                     <div class="col-md-6 col-sm-12 justify-content-center">
//                     <input className="border border-danger rounded-top rounded-bottom mt-4 py-3 px-5 w-100"  placeholder="Enter Your Recipe's Name" required/></div>
//                     </div>



//                 {/* row 2 has 1 col ingredients */}
//                 <div class="row">
//                     <div class="col-md-10 col-sm-10 justify-content-center">
//                     <input className=" border border-danger rounded-top rounded-bottom mt-4 py-3 px-3 w-100"  placeholder="Enter Your Recipe's ingredients" required/></div>
//                 </div>
//                 {/* row 3 has 1 col method */}
//                 <div class="row">
//                     <div class="col-md-10 col-sm-10 justify-content-center ">
//                     <textarea className="methodRecipe border border-danger rounded-top rounded-bottom mt-4 py-3 px-3 w-100" placeholder="Enter Your Recipe's Method" required></textarea>
//                 </div>
//                 </div>
//                 {/* row 4 has 1 col button */}
//                 <div class="row ">
//                 <div class="col-md-10 col-sm-10 justify-content-center text-end">
//                     <button className="btn btn-primary px-4 py-2">Save</button>
//                 </div>


//                 </div>






//             </div>

//         </main>
//             )}
// export default Addrecipe;





import React, { useState, useRef } from "react";
import "./Addrecipe.css";
// import Avatar from "react-avatar-edit";
import 'primeicons/primeicons.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from "axios";

let API_URL = "http://127.0.0.1:5000/";
const Addrecipe = () => {


    const [file, setFile] = useState();
    const [img_path, setImgPath] = useState("");
    const [rec_name, setRecName] = useState("");
    const [rec_ing, setRecIng] = useState("");
    const [rec_method, setRecMethod] = useState("");
    const [upload_photo, setUploadPhoto] = useState("Upload Photo");
    const [display_photo, setDisplayPhoto] = useState("none");
    const inputFile = useRef(null);
    var fReader = new FileReader();

    const [show, setShow] = useState(false);
    const [searchParams] = useSearchParams();
    const user = searchParams.get("user");


    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    function handleNameChange(e) {
        
        console.log(user);
        setRecName(e.target.value);
    }


    function handleIngChange(e) {
        setRecIng(e.target.value);
    }


    function handleMethodChange(e) {
        setRecMethod(e.target.value);
    }


    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();

    };

    const changePic = () => {

        if (inputFile.current.files.length > 0) {
            setUploadPhoto("")
            setDisplayPhoto("inline-block");
            setImgPath(URL.createObjectURL(inputFile.current.files[0]));
        }
    }


    const send_data = async () => {
        
            // console.log(location);
            // console.log(file);
        await fReader.readAsDataURL(inputFile.current.files[0]);
        fReader.onloadend = async function (event) {
            

            let response = await axios.post(API_URL+"addrecipe", { file: event.target.result, recname: rec_name, recing: rec_ing,
                recmethod: rec_method, username: user});
            alert(response.data);

          }
        


    }


    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home-alt nav-link-icon"></i>
                            <span className="nav-link-name">Homepage</span>
                        </Link>

                        <div className="nav-list">
                            <Link to="/chefMainPage" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">My Recipes</span>
                            </Link>
                            <Link to="/addRecipe" className="nav-link active">
                                <i className="fa-solid fa-circle-plus nav-link-icon"></i>
                                <span className="nav-link-name">Add Recipe</span>
                            </Link>
                            <Link to="/updateRecipe" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">Update Recipe</span>
                            </Link>
                            <Link to="/" className="nav-link">
                                <i className="fa-solid fa-trash nav-link-icon"></i>
                                <span className="nav-link-name">Delete Recipe</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-sign-out nav-link-icon"></i>
                        <span className="nav-link-name">LOGOUT</span>
                    </Link>
                </nav>
            </aside>
            <h1 className="pt-4">Add Recipe</h1>
            <hr />

            <div>
                <div className="firstOne justify-content-around">
                    <button className="align-items-center img-div" onClick={onButtonClick}>
                        <input className="inputPic" id="imgs" type="file" ref={inputFile} onChange={changePic} style={{ display: "none" }} />
                        <img className="picSize" src={img_path} style={{ display: display_photo }} />
                        {/* <label htmlFor="imgs">Upload Picture</label> */}
                        <b>{upload_photo}</b>
                    </button>
                    <div className="recipeN">
                        <input className="inputTextRecipeName" value={rec_name} onChange={handleNameChange} placeholder="Enter Your Recipe's Name" required></input>
                    </div>
                </div>
                <div className="secondOne">
                    <textarea className="ingredientsRecipe" value={rec_ing} onChange={handleIngChange} placeholder="Enter Your Recipe's Ingredients" required></textarea>
                    <textarea className="methodRecipe" value={rec_method} onChange={handleMethodChange} placeholder="Enter Your Recipe's Method" required></textarea>
                    <button className="btn btn-primary" onClick={send_data}>Save</button>
                </div>
            </div>

        </main>
    )
}

export default Addrecipe;


