// import React, { useState, useEffect } from "react";
// import "./Chefmainpage.css";
// import { Link, useLocation } from 'react-router-dom';
// import Menu from "./Menu";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";

// let API_URL = "http://127.0.0.1:5000/chefrecipe";
// let API_CALL= "http://127.0.0.1:5000/deleterecipe";
// const Chefmainpage = () => {

//     const [show, setShow] = useState(false)

//     const [items, setItems] = useState({ "data": [] });

//     const location = useLocation();
//     // console.log(location);
//     // console.log(location.state.username, location.state.name, location.state.email, location.state.password);

//     useEffect(() => {
//         console.log("hehe");
//         async function getInfo() {

//             const res = await axios.post(API_URL, { username: location.state.username });
//             console.log(res.data);
//             setItems(res.data);

//         }
//         console.log(items)
//         getInfo();
//         ;
//     }, []);

//     let navigateToView = useNavigate();

//     const routeChangeToViewRecipe = (rec) => {

//         let path = "/viewRecipe";
//         navigateToView(path, { state: rec });
//     }

//     let navigateToRecipe = useNavigate();
//     const routeChangeToUpdateRecipe = (rec) => {
//         let path = "/updateRecipe";
//         navigateToRecipe(path, { state: rec });
//     }


//     async function deleteRecipe(rec) {

//         let res = await axios.post(API_CALL, {id: rec.recid, img_path: rec.recimg})
//         console.log(res.data);
//         // window.location.reload();
//         let rand_list = items.data
//         var ind = rand_list.indexOf(rec)
//         rand_list.splice(ind, 1)
//         console.log(rand_list)
//         setItems({"data": rand_list})
//         alert(res);

//     }

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
//                             <Link to="/chefMainPage" className="nav-link active">
//                                 <i className="fa-solid fa-house nav-link-icon"></i>
//                                 <span className="nav-link-name">My Recipes</span>
//                             </Link>
//                             <Link to={{pathname: '/addrecipe',  search: `?user=${location.state.username}`}} className="nav-link">
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
//             <h1 className="pt-4">My Recipes</h1>
//             <hr />
//             <div className="menu-items container-fluid mt-5">
//                 <div className="row">
//                     <div className="col-11 mx-auto">
//                         <div className="row my-5">

//                             {   
//                                 items.data.map((elem) => (
//                                     // const { id, image, recipeName } = elem;

//                                     // return (
//                                     <div className="item1 col-12 col-md-6 col-lg-6 col-sl-4 my-5">
//                                         <div className="row Item-inside ">
//                                             {/* For Images */}
//                                             <div className="col-12 col-md-12 col-lg-4 img-div">
//                                                 <img src={elem.recimg} alt="menuPic" className="img-fluid"></img>
//                                             </div>
//                                             {/* For Menu Description */}
//                                             <div className="col-12 col-md-12 col-lg-8">
//                                                 <div className="main-title pt-4 pb-3">
//                                                     <h2>{elem.recname}</h2>
//                                                 </div>
//                                                 <div className="menu-price-book">
//                                                     <div className="price-book-divide d-flex justify-content-around">
//                                                         <button onClick={()=>{routeChangeToViewRecipe(elem)}} className="buttonChefMainPage">View</button>
//                                                         <button onClick={()=> {routeChangeToUpdateRecipe(elem)}} className="buttonChefMainPage">Update</button>
//                                                         <button className="buttonChefMainPage" onClick={() => {deleteRecipe(elem)}}>Delete</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     // )
//                                 ))
//                             }

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Chefmainpage;





import React, { useState, useEffect } from "react";
import "./Chefmainpage.css";
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

let API_URL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/chefrecipe";
let API_CALL = "https://chefs-book-api-prod-chefsbook-3chtzv.mo6.mogenius.io/deleterecipe";
const Chefmainpage = () => {

    const [show, setShow] = useState(false)

    const [items, setItems] = useState({ "data": [] });

    const [temp_item, setTempItem] = useState({});

    const [deleteId, setDeleteId] = useState("")

    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => {
        setShowDelete(false)
    }

    const handleClickDelete = (rec) => {
        setTempItem(rec)
        setShowDelete(true)
        // console.log(id)
    }

    // const handleDeleteItem = () => {
    //     setItems(pre => {
    //         const newArray = [...pre]
    //         return newArray.filter(elem => elem.id !== deleteId)
    //     })
    //     setShowDelete(false)
    // }





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
        console.log(items)
        getInfo();
        ;
    }, [location]);

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




    async function deleteRecipe(rec) {

        let res = await axios.post(API_CALL, { id: rec.recid, img_path: rec.recimg })
        console.log(res.data);
        // window.location.reload();
        let rand_list = items.data
        var ind = rand_list.indexOf(rec)
        rand_list.splice(ind, 1)
        console.log(rand_list)
        setItems({ "data": rand_list })
        setTempItem({})
        setShowDelete(false)

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
                        <Link className="nav-link">
                            <i className="fas fa-home-alt nav-link-icon"></i>
                            <span className="nav-link-name">Homepage</span>
                        </Link>

                        <div className="nav-list">
                            <Link to="/chefMainPage" state={{username: location.state.username, name: location.state.name, email: location.state.email, password: location.state.password}} className="nav-link active">
                                <i className="fa-solid fa-cookie-bite nav-link-icon"></i>
                                <span className="nav-link-name">My Recipes</span>
                            </Link>
                            <Link to='/addrecipe' state={{username: location.state.username, name: location.state.name, email: location.state.email, password: location.state.password}} className="nav-link">
                                <i className="fa-solid fa-circle-plus nav-link-icon"></i>
                                <span className="nav-link-name">Add Recipe</span>
                            </Link>
                            {/* <Link to="/updateRecipe" className="nav-link">
                                <i className="fa-solid fa-house nav-link-icon"></i>
                                <span className="nav-link-name">Update Recipe</span>
                            </Link> */}
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

            <Modal className="modalDelete" show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting A Recipe!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this recipe?</Modal.Body>
                <Modal.Footer>
                    <Button variant="yesButton secondary" onClick={() => {deleteRecipe(temp_item)}}>
                        Yes
                    </Button>
                    <Button variant="noButton primary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row alignChefMainPage my-5">

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
                                                        <button onClick={() => { routeChangeToViewRecipe(elem) }} className="buttonChefMainPage">View</button>
                                                        <button onClick={() => { routeChangeToUpdateRecipe(elem) }} className="buttonChefMainPage">Update</button>
                                                        <button className="buttonChefMainPage" onClick={() => {handleClickDelete(elem)}}>Delete</button>
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
            <div className="bottomResponsivenessChefMainPage">
            </div>
        </main>
    )
}

export default Chefmainpage;