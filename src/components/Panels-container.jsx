import React from "react";
import './Panels-container.css'
import MakerLaunch from '../assets/images/maker_launch.svg'
import PressPlay from '../assets/images/play.svg'

export default function PanelsContainer({ setProps }){
    return(
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>New here?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis, quidem ex. Praesentium?</p>
                    <button className="btn transparent" id="sign-up-btn" onClick={(e) => setProps(1)}>Sign up</button>
                </div>
                <img src={MakerLaunch} alt="" className="image" />
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3>One of us?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis, quidem ex. Praesentium?</p>
                    <button className="btn transparent" id="sign-in-btn" onClick={(e) => setProps(0)}>Sign in</button>
                </div>
                <img src={PressPlay} alt="" className="image" id="scnd"/>
            </div>
        </div>
    )
}