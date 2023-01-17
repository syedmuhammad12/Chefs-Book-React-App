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


import React, { useState } from "react";
import "./Addrecipe.css";
import { Link } from 'react-router-dom';



function Addrecipe() {
    
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [show, setShow] = useState(false)
    return (
        <main className={show ? 'space-toggle' : null }>
            {/* nav stuff */}
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

            {/* main content of the page goes here */}
            
            <div class="container-fluid">
                {/* heading add recipe */}
                <div class="row  text-center justify-content-center">
                <h1>
                    Add Recipe
                </h1>
                <hr/>

                </div>
                
                {/* row 1 has 2 cols upload pic and receipe name */}
                <div class="row">
                    <div class="col-md-4 col-sm-12 justify-content-center">
                    {/* <input className=" border border-danger rounded-top rounded-bottom py-5 px-5 w-90 h-30" type="file" onChange={handleChange} />
                        <img className="" src={file} /> */}
                    <button  class="btn btn-primary border border-danger rounded-top rounded-bottom py-5 px-5 w-90 h-30">
                    
                        Upload Photo</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 justify-content-center">
                    <input className="border border-danger rounded-top rounded-bottom mt-4 py-3 px-5 w-100"  placeholder="Enter Your Recipe's Name" required/></div>
                    </div>
                    
                
                    
                {/* row 2 has 1 col ingredients */}
                <div class="row">
                    <div class="col-md-10 col-sm-10 justify-content-center">
                    <input className=" border border-danger rounded-top rounded-bottom mt-4 py-3 px-3 w-100"  placeholder="Enter Your Recipe's ingredients" required/></div>
                </div>
                {/* row 3 has 1 col method */}
                <div class="row">
                    <div class="col-md-10 col-sm-10 justify-content-center ">
                    <textarea className="methodRecipe border border-danger rounded-top rounded-bottom mt-4 py-3 px-3 w-100" placeholder="Enter Your Recipe's Method" required></textarea>
                </div>
                </div>
                {/* row 4 has 1 col button */}
                <div class="row ">
                <div class="col-md-10 col-sm-10 justify-content-center text-end">
                    <button className="btn btn-primary px-4 py-2">Save</button>
                </div>
               
                
                </div>
                

                   


            
            </div>
       
        </main>
            )}
export default Addrecipe;
  
    
