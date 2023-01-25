// import React, { useState } from "react";
// import "./Userviewofrecipes.css";
// import { Link } from 'react-router-dom';
// import steak from "../assets/img/steak.jpg"
// import maggi from "../assets/img/maggi.jpg"

// const Userviewofrecipes = () => {

//     const [show, setShow] = useState(false)

//     return(
//         <main className={show ? 'space-toggle' : null }>
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
//                             <Link to="/userViewOfRecipes" className="nav-link active">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">Recipes</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <Link to="/" className="nav-link">
//                         <i className="fas fa-sign-out nav-link-icon"></i>
//                         <span className="nav-link-name">LOGOUT</span>
//                     </Link>
//                 </nav>
//             </aside>
//             <h1 className="pt-4">User View Of Recipes</h1>
//             <hr/>
//             <div className="menu-items container-fluid mt-5">
//                 <div className="row">
//                     <div className="col-11 mx-auto">
//                         <div className="row my-5">

//                             <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
//                                 <div className="row item-inside">
//                                     {/* For Image */}
//                                     <div className="col-12 col-md-12 col-lg-4 img-div">
//                                         <img src={steak} alt="menuPic" className="img-fluid"></img>
//                                     </div>
//                                     {/* For Menu Description */}
//                                     <div className="col-12 col-md-12 col-lg-8">
//                                         <div className="main-title pt-4 pb-3">
//                                             <h2>Recipe Name: Steak</h2>
//                                             <hr></hr>
//                                             <h3>Ingredients</h3>
//                                             <p>1/2 LB POUND OF RIBEYE STEAK , LEMON , TUMERIC, ASPARAGHUS.</p>
//                                             <hr></hr>
//                                             <h3>Method</h3>
//                                             <p>Dry heat cooking is best for more delicate cuts of meat, the ones that come from the less exercised parts of the animal. 
//                                                 Dry heat methods add robust flavor. These cooking methods are often done over high heat for short periods of 
//                                                 time to prevent drying out the beef, and/or combined with slower, lower heat cooking to finish.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
//                                 <div className="row item-inside">
//                                     {/* For Image */}
//                                     <div className="col-12 col-md-12 col-lg-4 img-div">
//                                         <img src={maggi} alt="menuPic" className="img-fluid"></img>
//                                     </div>
//                                     {/* For Menu Description */}
//                                     <div className="col-12 col-md-12 col-lg-8">
//                                         <div className="main-title pt-4 pb-3">
//                                             <h2>Recipe Name: Maggi</h2>
//                                             <hr></hr>
//                                             <h3>Ingredients</h3>
//                                             <p>1/2 LB POUND OF RIBEYE STEAK , LEMON , TUMERIC, ASPARAGHUS.</p>
//                                             <hr></hr>
//                                             <h3>Method</h3>
//                                             <p>Dry heat cooking is best for more delicate cuts of meat, the ones that come from the less exercised parts of the animal. 
//                                                 Dry heat methods add robust flavor. These cooking methods are often done over high heat for short periods of 
//                                                 time to prevent drying out the beef, and/or combined with slower, lower heat cooking to finish.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Userviewofrecipes;





// new code

// import React, { useState, useEffect } from "react";
// import "./Userviewofrecipes.css";
// import { Link } from 'react-router-dom';
// import steak from "../assets/img/steak.jpg"
// import maggi from "../assets/img/maggi.jpg"
// import RecipeCard from "./RecipeCard";
// import axios from "axios";

// let API_URL = "http://127.0.0.1:5000/getrecipe";
// const Userviewofrecipes = () => {

//     const [show, setShow] = useState(false);
//     const [items, setItems] = useState({ "data": [] });

//     useEffect(() => {
//         console.log("hehe");
//         async function getInfo() {

//             const res = await axios.get(API_URL);
//             console.log(res.data);
//             setItems(res.data);

//         }
//         console.log(items)
//         getInfo();
//         ;
//     }, []);


//     // const location = useLocation();



//     return (
//         <main className={show ? 'space-toggle' : null}>
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
//                             <Link to="/userViewOfRecipes" className="nav-link active">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">Recipes</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <Link to="/" className="nav-link">
//                         <i className="fas fa-sign-out nav-link-icon"></i>
//                         <span className="nav-link-name">LOGOUT</span>
//                     </Link>
//                 </nav>
//             </aside>

//             {/* main content of the page */}

//             <div className="container-fluid">
//                 {/* heading add recipe */}
//                 <div className="row text-center justify-content-center">
//                     <h1>
//                         User View Of Recipes
//                     </h1>
//                     <hr />
//                 </div>

//                 <div className="row">

//                     {/* do this when u connect it to the database */}
//                     {/* {data.map((recipe) => (
//         <div className="col-md-10 col-sm-10 justify-content-center" key={recipe.id}>
//         <RecipeCard key={recipe.id} img={steak} title="Recipe name" ingredients="ingredients" description="Recipe description"/>
//           </div>
//       ))} */}

//                     <div className="col-md-10 col-sm-10 justify-content-center">

//                     {
//                         items.data.map((elem) => (
//                         <RecipeCard img={elem.recimg} title={elem.chef_name} ingredients={elem.recing} descriptio={elem.recmethod} title="Recipe name" ingredients="ingredients" description="Recipe description"/>
//                         // <RecipeCard img={steak} title="Recipe name" ingredients="ingredients" description="Recipe description"/>
//                         ))
//                     }
//                     </div>
//                 </div>




//             </div>






//         </main>
//     )
// }

// export default Userviewofrecipes;



import React, { useState, useEffect } from "react";
import "./Userviewofrecipes.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import steak from "../assets/img/steak.jpg"
import maggi from "../assets/img/maggi.jpg"
import axios from "axios";

let API_URL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/getrecipe";
const Userviewofrecipes = () => {

    const [show, setShow] = useState(false)
    const [items, setItems] = useState({ "data": [] });

    let navigateToViewUser = useNavigate();
    const routeChangeToViewRecipeUser = (rec) => {
        let path = "/viewRecipeUser";
        navigateToViewUser(path, {state: rec});
    }



    useEffect(() => {
        console.log("hehe");
        async function getInfo() {

            const res = await axios.get(API_URL);
            console.log(res.data);
            setItems(res.data);

        }
        console.log(items)
        getInfo();
        ;
    }, []);

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
                        <Link  className="nav-link">
                            <i className="fas fa-home-alt nav-link-icon"></i>
                            <span className="nav-link-name">Homepage</span>
                        </Link>

                        <div className="nav-list">
                            <Link to="/userViewOfRecipes"  className="nav-link active">
                                {/* <i className="fa-solid fa-house nav-link-icon"></i> */}
                                <i className="fa-solid fa-utensils nav-link-icon"></i>
                                <span className="nav-link-name">Recipes</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-sign-out nav-link-icon"></i>
                        <span className="nav-link-name">LOGOUT</span>
                    </Link>
                </nav>
            </aside>
            <h1 className="pt-4">User View Of Recipes</h1>
            <hr />
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {

                                items.data.map((elem) => (

                                    <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                        <div className="row item-inside" onClick={() => {routeChangeToViewRecipeUser(elem)}}>

                                            <div className="col-12 col-md-12 col-lg-4 img-divUser">
                                                <img src={elem.recimg} alt="menuPic" className="img-fluid"></img>
                                            </div>

                                            <div className="col-12 col-md-12 col-lg-8">
                                                <div className="main-title pt-4 pb-3">
                                                    <h2>Recipe Name: {elem.recname}</h2>
                                                    <hr></hr>
                                                    <h4>{elem.chef_name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomResponsivenessChefViewRecipe">
            </div>
        </main>
    )
}

export default Userviewofrecipes;












// import React, { useState } from "react";
// import "./Userviewofrecipes.css";
// import { Link } from 'react-router-dom';
// import Menu from "./Menu";
// import { useNavigate } from "react-router-dom";

// const Userviewofrecipes = () => {

//     const [show, setShow] = useState(false)

//     const [items, setItems] = useState(Menu);


//         return (
//             <main className={show ? 'space-toggle' : null }>
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
//                             <Link to="/userViewOfRecipes" className="nav-link active">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">Recipes</span>
//                             </Link>
//                         </div>
//                     </div>
//                     <Link to="/" className="nav-link">
//                         <i className="fas fa-sign-out nav-link-icon"></i>
//                         <span className="nav-link-name">LOGOUT</span>
//                     </Link>
//                 </nav>
//             </aside>
//             <h1 className="pt-4">User View Of Recipes</h1>
//             <hr/>

//             <div className="menu-items container-fluid mt-5">
//                 <div className="row">
//                     <div className="col-11 mx-auto">
//                         <div className="row alignChefMainPage my-5">

//                             {
//                                 items.map((elem) => {
//                                     const { id, image, recipeName } = elem;

//                                     return (
//                                         <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
//                                             <div className="row Item-inside ">
//                                                 {/* For Images */}
//                                                 <div className="col-12 col-md-12 col-lg-4 img-div">
//                                                     <img src={image} alt="menuPic" className="img-fluid"></img>
//                                                 </div>
//                                                 {/* For Menu Description */}
//                                                 <div className="col-12 col-md-12 col-lg-8">
//                                                     <div className="main-title pt-4 pb-3">
//                                                         <h2>{recipeName}</h2>
//                                                     </div>
//                                                     <div className="menu-price-book">
//                                                         <div className="price-book-divide d-flex justify-content-around">
//                                                             <div>
//                                                                 <h4>Chef Ka Name</h4>
//                                                             </div>
//                                                             <button className="buttonChefMainPage">View</button>
//                                                             <button className="buttonChefMainPage">Update</button>
//                                                             <button className="buttonChefMainPage" >Delete</button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bottomResponsivenessChefViewRecipe">
//             </div>
//         </main>
//     )
// }

// export default Userviewofrecipes;
