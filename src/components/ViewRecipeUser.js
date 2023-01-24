import React, { useState } from "react";
import "./ViewRecipeUser.css";
import { Link, useLocation } from 'react-router-dom';
import steak from "../assets/img/steak.jpg"

const ViewRecipeUser = () => {

    const [show, setShow] = useState(false)

    const location = useLocation();

    const [rec_name, setRecName] = useState(location.state.recname)
    const [rec_ing, setRecIng] = useState(location.state.recing)
    const [rec_method, setRecMethod] = useState(location.state.recmethod)
    const [rec_img, setRecImg] = useState(location.state.recimg)
    const [chef_name, setChefname] = useState(location.state.chef_name)



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
                            <Link to="/userViewOfRecipes" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
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
            <h1 className="pt-4">View Recipe Page</h1>
            <hr />

            <div>
                <div className="topViewRecipe">
                    <div className="imageViewRecipe">
                        <img src={rec_img} alt="menuPic" className="img-fluid"></img>
                    </div>
                </div>
                <div className="headingOneViewRecipe">
                    <h2>Recipe Name: {rec_name}</h2>
                </div>
                <div className="ingredientsViewRecipe">
                    <h2>Ingredients :</h2>
                    <h5 className="ingredientsViewRecipeH5">{rec_ing}</h5>
                </div>
                <div className="methodViewRecipe">
                    <h2>Method :</h2>
                    <h5 className="methodViewRecipeH5">{rec_method}</h5>
                </div>
            </div>

            <div className="bottomResponsiveness">
            </div>

        </main>
    )
}

export default ViewRecipeUser;