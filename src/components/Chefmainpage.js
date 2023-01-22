import React, { useState, useEffect } from "react";
import "./Chefmainpage.css";
import { Link, useLocation } from 'react-router-dom';
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

let API_URL = "http://127.0.0.1:5000/chefrecipe";
const Chefmainpage = () => {

    const [show, setShow] = useState(false)

    const [items, setItems] = useState({ "data": [] });

    const location = useLocation();
    console.log(location);
    console.log(location.state.username, location.state.name, location.state.email, location.state.password);

    useEffect(() => {
        console.log("hehe");
        async function getInfo() {
            
            const res = await axios.post(API_URL, { username: location.state.username });
            console.log(res.data);
            setItems(res.data);

        }

        getInfo();
        ;
    }, []);

    let navigateToView = useNavigate();

    const routeChangeToViewRecipe = (rec) => {

        let path = "/viewRecipe";
        navigateToView(path, { state: rec });
    }

    let navigateToRecipe = useNavigate();
    const routeChangeToUpdateRecipe = (rec) => {
        let path = "/updateRecipe";
        navigateToRecipe(path, { state: rec });
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
                            <Link to="/chefMainPage" className="nav-link active">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">My Recipes</span>
                            </Link>
                            <Link to={{pathname: '/addrecipe',  search: `?user=${location.state.username}`}} className="nav-link">
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
            <h1 className="pt-4">My Recipes</h1>
            <hr />
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.data.map((elem) => (
                                    // const { id, image, recipeName } = elem;

                                    // return (
                                    <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
                                        <div className="row Item-inside ">
                                            {/* For Images */}
                                            <div className="col-12 col-md-12 col-lg-4 img-div">
                                                <img src={elem.recimg} alt="menuPic" className="img-fluid"></img>
                                            </div>
                                            {/* For Menu Description */}
                                            <div className="col-12 col-md-12 col-lg-8">
                                                <div className="main-title pt-4 pb-3">
                                                    <h2>{elem.recname}</h2>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-around">
                                                        <button onClick={()=>{routeChangeToViewRecipe(elem)}} className="buttonChefMainPage">View</button>
                                                        <button onClick={()=> {routeChangeToUpdateRecipe(elem)}} className="buttonChefMainPage">Update</button>
                                                        <button className="buttonChefMainPage">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    // )
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Chefmainpage;