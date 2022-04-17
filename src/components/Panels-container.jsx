import React from "react";
import './Panels-container.css'

export default function PanelsContainer(){
    return(
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>New here?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis, quidem ex. Praesentium?</p>
                    <button className="btn transparent" id="sign-up-btn">Sign up</button>
                </div>
            </div>
        </div>
    )
}