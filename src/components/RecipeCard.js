import React from 'react'
import steak from "../assets/img/steak.jpg"

function RecipeCard(props) {
  return (
  <div>
       
        <div className="card mt-3 border shadow-sm  rounded-top rounded-bottom" style={{background: "#EA0C5C"}}>
            <div className='row'>
                <div className="col-sm-12 col-md-4 h-25 d-inline-block w-25 justify-content-start text-start g-0">
                    <img src={props.img} className="img-fluid" alt="..."/>
                </div>
            
                <div className="col-sm-12 col-md-6 justify-content-center text-center">
                    <h2 className="card-title text-white font-weight-bold text-start">{props.title}</h2>
                    <h5 className="text-start pt-2" style={{color: "orange"}}>{props.ingredients}</h5>
                    <h5 className="text-start pt-2" style={{color: "black"}}>{props.description}</h5>
                </div>
            
            </div>
            
            
        </div>

    </div>



   
        
  )
}

export default RecipeCard